import NextAuth from "next-auth";
import environment from "@/config/environment";
import CredentialsProvider from "next-auth/providers/credentials";
import authServices from "@/services/auth.service";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        identifire: { label: "identifire", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { identifire, password } = credentials as {
          identifire: string;
          password: string;
        };

        const result = await authServices.login({ identifire, password });

        const accessToken = result.data.data;

        const me = await authServices.getProfileWithToken(accessToken);
        const user = me.data.data;

        if (
          accessToken &&
          result.status === 200 &&
          user._id &&
          me.status === 200
        ) {
          user.accessToken = accessToken;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;
      return session;
    },
  },
});
