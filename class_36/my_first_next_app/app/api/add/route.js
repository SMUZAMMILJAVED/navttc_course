import { NextResponse } from "next/server";

export async function POST(request){
    // request.json()
return NextResponse.json({"username":"kaif kamran"})
}