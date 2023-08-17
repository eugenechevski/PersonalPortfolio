import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

interface User {
  id: string;
  username: string;
  email: string;
}

const handler = NextAuth({
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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async function (credentials, req): Promise<User> {
        // Connect to database
        const db = await clientPromise.then((client) => client.db());
        const collection = await db.collection<IUser>('users');
        const userFound = await collection.findOne({
          userName: credentials.username,
        });

        if (!userFound) {
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
          id: userFound._id.toString(),
          username: userFound.userName,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
});

export { handler as GET, handler as POST };
