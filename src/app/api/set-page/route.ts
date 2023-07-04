import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: { path: string; data: any } = await request.json();

  delete body.data.footer;

  await mongodbConnector.setPage(body.path, body.data);

  return NextResponse.json({});
}
