import prisma from "@/utils/prisma";
import { sendVerificationEmail } from "@/utils/send-verification-mail";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import Nodemailer from "next-auth/providers/nodemailer";

interface INodeMailerProvider {
  server: string | undefined;
  from: string | undefined;
  sendVerificationRequest({
    identifier,
    url,
    provider: { server, from },
  }: {
    identifier: string | undefined;
    url: string | undefined;
    provider: {
      server: string | undefined;
      from: string | undefined;
    };
  }): void;
}

const nodemailerProvider: INodeMailerProvider = {
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
  sendVerificationRequest({ identifier, url, provider: { server, from } }) {
    // your function
    sendVerificationEmail({ url, identifier, theme: "black" });
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [google, Nodemailer(nodemailerProvider)],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  /*
  callbacks: {
    async session({ session, token }) {
      // Add user ID or any additional info to the session if needed
      session.user.id = token.sub;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }

      return token;
    },
  },*/
});
