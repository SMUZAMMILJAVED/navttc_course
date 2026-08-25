import { NextResponse } from "next/server";

export async function GET(req){
   const a= req.json()
return NextResponse.json(a)
} 