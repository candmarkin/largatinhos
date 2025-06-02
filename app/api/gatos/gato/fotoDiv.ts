
import { Storage } from "@google-cloud/storage";
const storage = new Storage();

export function getFotoDivbyID(id: string) {
  const resultFotos: string[] = [];
  const options = {
    prefix: id + '/',
    delimiter: '/',
  };

  // Lists files in the bucket, filtered by a prefix
  return storage.bucket('largatinhos').getFiles(options).then(([files]) => {
    files.forEach((file) => {
      if (file.publicUrl().endsWith('.jpg') || file.publicUrl().endsWith('.png')) {
        resultFotos.push(file.publicUrl().toString());
      }
    });
    return resultFotos;
  });
}