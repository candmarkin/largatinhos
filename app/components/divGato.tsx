import { Storage } from "@google-cloud/storage";
import { neon } from "@neondatabase/serverless";

import noImage from "../../public/noImage.png"
import Link from "next/link";
import React from "react";

const storage = new Storage();

export async function getFotoDivbyID(id: string){

  const resultFotos = new Array(1);

  const options = {
    prefix: id+ '/',
    delimite: '/'
  };


  // Lists files in the bucket, filtered by a prefix
  const [files] = await storage.bucket('largatinhos').getFiles(options);

  files.forEach((file) => {
    if(file.publicUrl().endsWith('.jpg') || file.publicUrl().endsWith('.png')){
        resultFotos.push(file.publicUrl().toString())
    }
    
  });

  return resultFotos
}

function calculateAge(data: string) {
    const birthDate = new Date(data);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    const years = (ageDate.getUTCFullYear() - 1970)
    const months = ageDate.getUTCMonth()
    const days = (ageDate.getUTCDate() - 1)


    let idade = new String()

    if(years > 0){
        idade = years > 1 ? (years.toString() + " anos") : (years.toString() + " ano");
      }
    else if(months > 0){
      idade = months > 1 ? (months.toString() + " meses") : (months.toString() + " mês");
    }
    else{
      idade = days > 1 ? (days.toString() + " dias") : (days.toString() + " dia");
    }
    
    return idade
  };

export async function selectDadosDiv(id: string) {

    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const result = await sql.query('SELECT * FROM gatos WHERE id=($1)', [id]);
    return result
  }


export const DivGato = async(gatoID: Record<string, {id: string}>) => {

    const fotos = await getFotoDivbyID(gatoID.gatoID.id)
    const dados = await selectDadosDiv(gatoID.gatoID.id)

    let urlFoto = noImage.src

    if(fotos.length>1){urlFoto=fotos[1]}

    


    return (
        <div className="divGato p-3 sm:p-4 border border-gray-300 hover:shadow-xl hover:scale-105 duration-500 w-fit rounded-3xl shadow-md flex flex-col items-center ">
            <div className="imgDivGato w-35 h-35 sm:h-40 sm:w-40 origin-center duration-500 mb-2">
                <img className="h-full w-full max-h-full object-fit rounded-2xl" src={urlFoto} alt="" />
            </div>
            
            {dados.map((dado) =>{
                return (
                <div key={"dados" + dado.id}>
                  <p className="text-xl font-bold text-center" key={dado.nome}>{dado.nome}</p>
                  <p className="text-sm max-w-30 sm:max-w-40 text-center whitespace-normal" key={dado.id + "Descricao"}>{calculateAge(dado.nascimento)}, {dado.sexo}, {dado.vacinas}, {dado.saude}</p>
                  <Link href={"/gatos/" + dado.id} className="bg-amber-500 text-white text-sm font-extrabold px-4 py-2 text-center rounded-full">Mais</Link>
                </div>
                 )
            })}
            
        </div>
        
        

    );
}