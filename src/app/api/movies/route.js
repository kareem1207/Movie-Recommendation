import { NextResponse } from "next/server";
import movieData from "./data.json";

export async function GET() {
  try {
    return NextResponse.json(movieData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
