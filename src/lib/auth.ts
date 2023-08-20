import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { strip } from "@/lib/utils";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      authorize: async function (credentials, req): Promise<{id: string, name: string, email: string }> {
        // Connect to database
        const db = (await clientPromise).db("personal_blog");
        const collection = await db.collection<AdminUser>("users");
        let userFound = await collection.findOne({
          userName: strip(credentials.username),
        });

        if (!userFound) {
          console.log("No user found");
          throw new Error("No user found");
        }

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!passwordsMatch) {
          throw new Error("Password do not match");
        }

        return {
          id: userFound._id,
          name: userFound.userName,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/credentials-signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
