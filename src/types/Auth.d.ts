import { DefaultSession, DefaultUser } from "next-auth";

interface IRegister {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILogin {
  identifire: string;
  password: string;
}

interface IActivation {
  code: string;
}

declare module "next-auth" {
  interface User extends DefaultUser {
    accessToken?: string;
    role?: string;
  }

  interface Session extends DefaultSession {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: User;
  }
}

export type { IRegister, IActivation, ILogin };
