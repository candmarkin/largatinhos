import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql.query('SELECT id FROM gatos');
  console.log(result);

  return new Response(
    JSON.stringify(result),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
