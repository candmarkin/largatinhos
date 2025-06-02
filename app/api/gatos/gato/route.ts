import { Storage } from "@google-cloud/storage";

const storage = new Storage();

export const checkEnvironment = () => {
  const base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://largatinhos.vercel.app";
  return base_url;
};

function getFotoDivbyID(id: string) {
  const resultFotos = [];
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

// Next.js Route Handler
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id parameter" }), { status: 400 });
  }
  try {
    const fotos = await getFotoDivbyID(id);
    return new Response(JSON.stringify({ fotos }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), { status: 500 });
  }
}