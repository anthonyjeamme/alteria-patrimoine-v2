import { redirect } from "next/navigation";

import jwt from "jsonwebtoken";

import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = "xxxx";

type TTokenPayload = {
  role: "admin";
  userId: string;
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { route: Array<string> } }
) => {
  const { route } = params;

  switch (route[0]) {
    case "getPage":
      const page = await mongodbConnector.getPage(
        "/" + route.slice(1).join("/")
      );

      if (!page) return new Response("Not found", { status: 404 });

      return NextResponse.json(page);

    case "admin":
      const token = request.cookies.get("x-token");
      if (!token?.value) return new Response("Server", { status: 500 });
      const payload = jwt.verify(token.value, JWT_SECRET) as TTokenPayload;

      return NextResponse.json({ message: "connected !" });
  }

  return NextResponse.json({
    hello: "GET",
  });
};

export const POST = async (
  request: NextRequest,
  { params }: { params: { route: Array<string> } }
) => {
  const { route } = params;

  switch (route[0]) {
    case "createPage":
      const data = await request.json();

      await mongodbConnector.setPage(data.path, data);

      return new Response(JSON.stringify({}));

    case "auth":
      const json = await request.json();

      const email = json["email"];
      const password = json["password"];

      if (email !== "k.chaouch@alteriapatrimoine.fr" || password !== "secret")
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
        });

      const token = jwt.sign(
        {
          role: "admin",
          userId: "kevin",
        },
        JWT_SECRET
      );

      return new Response(JSON.stringify({}), {
        status: 200,
        headers: {
          "Set-Cookie": `x-token=${token}; path=/`,
        },
      });

    // const body = await request.json();

    // console.log(body);
    // const { username, password } = body;

    // if (username !== "admin" || password !== "secret")
    //   return new Response("Unauthorized", { status: 401 });

    // return new Response(JSON.stringify({}), {
    //   status: 200,
    //   headers: { "Set-Cookie": `x-token=${token}; path=/` },
    // });
  }

  return NextResponse.json({
    hello: "GET",
  });
};
