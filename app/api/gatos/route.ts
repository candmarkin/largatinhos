
import { NextApiRequest, NextApiResponse } from "next";
import { neon } from "@neondatabase/serverless";
import { Storage } from "@google-cloud/storage";
import { NextRequest } from 'next/server';
import { getFotosbyID } from "@/app/gatos/[id]/page";

const storage = new Storage();

export const checkEnvironment = () => {
    let base_url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://largatinhos.vercel.app";
  
    return base_url;
}

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
 
export async function GET(request: NextRequest) {
    
    const sql = neon(`${process.env.DATABASE_URL}`);
    const result = await sql.query('SELECT id FROM gatos');
    console.log(result)
 
  return new Response(
    JSON.stringify(result),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
