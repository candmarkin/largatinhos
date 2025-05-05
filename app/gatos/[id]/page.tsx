import { Storage } from "@google-cloud/storage";
import { neon } from "@neondatabase/serverless";
import dynamic from "next/dynamic";

const DynamicSwiper = dynamic(() => import('../../components/Swiper'), {
  loading: () => <p>Loading...</p>,
})


const storage = new Storage();

async function getFotosbyID(id: string) {

  const resultFotos = new Array(500);

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

async function selectDados(id: string) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const result = await sql.query('SELECT * FROM gatos WHERE id=($1)', [id]);
    return result
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
        idade = years > 1 ? (years.toString() + " anos") : (years.toString() + " meses");
      }
    else if(months > 0){
      idade = months > 1 ? (months.toString() + " meses") : (months.toString() + " mês");
    }
    else{
      idade = days > 1 ? (days.toString() + " dias") : (days.toString() + " dia");
    }
    
    return idade
  };


export default async function Gato(
    { params }: { params: Promise<{id: string}> }
) {

    const id = (await params).id
    const dados = await selectDados(id)
    const fotos = await getFotosbyID(id)

    const objGato = {id: id, dados: dados, fotos:fotos}

    

    return(
        <div key={objGato.id} className="p-6 gap-6 flex flex-col sm:flex-row h-[40rem] sm:h-96 w-full sm:w-1/2 m-0">

            <DynamicSwiper fotos={objGato.fotos}></DynamicSwiper>

            {objGato.dados.map((dado) =>{return (

                    <div key='dadosGato'>
                    
                    <h1 className="text-2xl font-bold" key={dado.nome}>{dado.nome}</h1>
                    <p key={dado.cor}><strong>Cor: </strong>{dado.cor}</p>
                    <p key={dado.nascimento}><strong>Idade: </strong>{calculateAge(dado.nascimento)}</p>
                    <p key={dado.descricao}>{dado.descricao}</p>
                    
                    </div>

                
                )})}
        </div>
    )

    
}