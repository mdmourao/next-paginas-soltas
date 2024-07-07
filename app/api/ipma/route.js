import { NextResponse } from "next/server";

export async function GET() {
    const resp = await fetch(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json`)
    const data = await resp.json()
    
    return new NextResponse(JSON.stringify(data));
}