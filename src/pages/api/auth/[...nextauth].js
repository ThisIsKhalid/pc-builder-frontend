import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const userData = {
          name: profile.name,
          email: profile.email,
        };
        try {
          await axios.post(
            "http://localhost:5000/api/v1/users/create-user",
            userData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error) {
          console.error("Error sending user data to the backend:", error);
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "http://localhost:3000/signin",
  },
};
export default NextAuth(authOptions);
