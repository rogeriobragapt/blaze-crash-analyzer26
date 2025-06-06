import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Importa de src/lib/authOptions.ts

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
