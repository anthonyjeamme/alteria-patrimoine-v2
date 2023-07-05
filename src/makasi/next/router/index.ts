import { NextRequest, NextResponse } from "next/server";

import { DataConnector } from "@/makasi/connectors/connectors.types";
import { TRouterParams } from "./types";

export const getRouter = (connector: DataConnector) => ({
  GET: async (request: NextRequest, { params }: { params: TRouterParams }) => {
    const [scope, ...args] = params.route;

    switch (scope) {
      case "public": {
        switch (args[0]) {
          case "page": {
            const slug = request.nextUrl.searchParams.get("slug");

            if (!slug) return new Response(null, { status: 404 });

            const page = await connector.getPublicPage(slug);
            if (!page) return new Response(null, { status: 404 });

            return NextResponse.json({
              page,
            });
          }
        }
      }

      case "admin": {
        switch (args[0]) {
          case "page": {
            const id = args[1];
            if (id) {
              const page = await connector.getPage(id);
              if (!page) return new Response(null, { status: 404 });

              return NextResponse.json({
                page,
              });
            }
          }

          case "pages": {
            const pages = await connector.listPages();

            return NextResponse.json({
              pages,
            });
          }
        }
      }
    }

    return new Response(null, { status: 404 });
  },
  POST: async (request: NextRequest, { params }: { params: TRouterParams }) => {
    const [scope, command, ...args] = params.route;

    if (scope !== "admin") return new Response(null, { status: 404 });

    switch (command) {
      case "page":
        const pageData = await request.json();
        const page = await connector.createPage(pageData);

        return NextResponse.json(page);
    }

    return new Response(null, { status: 404 });
  },
  DELETE: async (
    request: NextRequest,
    { params }: { params: TRouterParams }
  ) => {
    const [scope, command, ...args] = params.route;

    if (scope !== "admin") return new Response(null, { status: 404 });

    switch (command) {
      case "page":
        await connector.deletePage(args[0]);
        return new Response(null, { status: 204 });
    }

    return new Response(null, { status: 404 });
  },
  PUT: async (request: NextRequest, { params }: { params: TRouterParams }) => {
    const [scope, command, ...args] = params.route;

    if (scope !== "admin") return new Response(null, { status: 404 });

    switch (command) {
      case "page":
        const pageData = await request.json();
        const page = await connector.updatePage(args[0], pageData);

        if (!page) return new Response(null, { status: 404 });

        return NextResponse.json({ page });
    }

    return new Response(null, { status: 404 });
  },
});
