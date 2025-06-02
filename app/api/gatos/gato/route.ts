import { NextRequest } from "next/server";
import { Storage } from "@google-cloud/storage";
const storage = new Storage();



// Next.js Route Handler
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id parameter" }), { status: 400 });
  }
  try {
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
      return new Response(JSON.stringify({ resultFotos }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), { status: 500 });
  }
}
