import { sign } from "jsonwebtoken";

import { NextRequest } from "next/server";

const JWT_SECRET = process.env["JWT_SECRET"] as string;

export const POST = (
  request: NextRequest,
  { params }: { params: { route: string[] } }
) => {
  const [command] = params.route;

  switch (command) {
    case "login": {
      const token = sign({ role: "admin" }, JWT_SECRET);

      return new Response(JSON.stringify({}), {
        status: 200,
        headers: {
          "Set-Cookie": `x-token=${token}; path=/`,
          "Content-Type": "application/json",
        },
      });
    }
  }

  return new Response(JSON.stringify({}), {
    status: 200,
  });
};
