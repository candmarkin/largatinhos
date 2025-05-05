import { Storage } from "@google-cloud/storage";
import { neon } from '@neondatabase/serverless';

const storage = new Storage();

async function getFotosbyID(id: string) {


    let resultFotos = new Array()

  const options = {
    prefix: '1/',
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
    await sql.query('SELECT * FROM gatos WHERE id=($1)', [id]);
  }


export default async function Fotos(){
    
    const fotos = await getFotosbyID(1)

    return (
        <>
                <div>{fotos.map((foto) => (<img src={foto} height={20} width={20}/>))}</div>
        </>
    )


}