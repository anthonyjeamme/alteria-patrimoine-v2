import { serverConnector } from "@/connector";
import { getRouter } from "@/makasi/next/router";

export const { GET, POST, DELETE, PUT } = getRouter(serverConnector);
