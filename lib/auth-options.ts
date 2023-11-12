import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import { userSchema } from "./schema"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email" },
				password: { label: "Password" },
			},
			async authorize(credentials, req) {
				const user = userSchema.safeParse(credentials)

				if (!user.success) {
					return null
				}

				return {
					id: "1",
					email: user.data.email
				}
			},
		}),
		Github({
			clientId: process.env.AUTH_GITHUB_ID as string,
			clientSecret: process.env.AUTH_GITHUB_SECRET as string,
		}),
	],

	pages: {
		signIn: "/auth/signin",
		error: "/auth/error",
	},

	callbacks: {
		async redirect({ url, baseUrl }) {
			return baseUrl
		},
	},
}

export default authOptions
