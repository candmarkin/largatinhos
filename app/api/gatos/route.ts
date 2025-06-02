import { neon } from "@neondatabase/serverless";
import { Storage } from "@google-cloud/storage";

const storage = new Storage();

export const checkEnvironment = () => {
    const base_url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://largatinhos.vercel.app";
  
    return base_url;
}
 
export async function GET() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const result = await sql.query('SELECT id FROM gatos');
    console.log(result);

    return new Response(
        JSON.stringify(result),
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );
}
