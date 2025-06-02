import { NextRequest } from "next/server";
import { getFotoDivbyID } from "./fotoDiv";




// Next.js Route Handler
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
