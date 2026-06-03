import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // TEMP LOGIN (we will connect Prisma later)
        if (
          credentials?.email === "admin@demo.com" &&
          credentials?.password === "admin"
        ) {
          return { id: "1", name: "Admin", role: "ADMIN" };
        }

        if (
          credentials?.email === "user@demo.com" &&
          credentials?.password === "user"
        ) {
          return { id: "2", name: "User", role: "USER" };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };