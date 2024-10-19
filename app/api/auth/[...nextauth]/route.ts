import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define the NextAuth configuration directly
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

// Export NextAuth for the GET and POST methods
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
