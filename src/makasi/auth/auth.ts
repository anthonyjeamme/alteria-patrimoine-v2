import { jwtVerify, decodeJwt } from "jose";

const JWT_SECRET = process.env["JWT_SECRET"] as string;

const Auth = {
  createToken: async () => {
    //
  },

  checkRole: async (token: string, role: string) => {
    try {
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));

      const payload = await decodeJwt(token);

      return payload?.role === role;
    } catch {
      return false;
    }
  },
};

export default Auth;
