import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const path = searchParams.get("path");

  if (!path) return NextResponse.error();

  const page = await mongodbConnector.getPage(path);

  return NextResponse.json(page);
}
