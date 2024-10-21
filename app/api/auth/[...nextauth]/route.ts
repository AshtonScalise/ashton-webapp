import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import supabase from "@/supabase/supabaseClient";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        // Check if the user already exists in the Supabase database
        const { data: existingUser, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", user.email!)
          .limit(1) // Use limit instead of single to prevent multiple rows error
          .maybeSingle(); // maybeSingle() won't throw an error if no rows are returned

        if (error) {
          console.error("Error checking existing user:", error);
          return false;
        }

        if (!existingUser) {
          // Create a new user if they do not exist
          const { error: createError } = await supabase.from("users").insert([
            {
              email: user.email!,
              name: user.name,
              image: user.image,
              email_verified: new Date(),
            },
          ]);

          if (createError) {
            console.error("Error creating user:", createError);
            return false;
          }
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (!session.user) return session;
      if (!session.user.email) return session;
      session.user.email = token.sub;
      return session;
    },
  },
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
