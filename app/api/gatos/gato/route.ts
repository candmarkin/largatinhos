import { Storage } from "@google-cloud/storage";


const storage = new Storage();

export const checkEnvironment = () => {
    const base_url =
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