
import { Storage } from "@google-cloud/storage";
const storage = new Storage();

export async function getFotoDivbyID(id: string): Promise<string[]> {
  const resultFotos: string[] = [];
  const options = {
    prefix: id + '/',
    delimiter: '/',
  };

  // Lists files in the bucket, filtered by a prefix
  const [files] = await storage.bucket('largatinhos').getFiles(options);
  files.forEach((file) => {
    if (file.publicUrl().endsWith('.jpg') || file.publicUrl().endsWith('.png')) {
      resultFotos.push(file.publicUrl().toString());
    }
  });
  return resultFotos;
}