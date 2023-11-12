import { z } from "zod"

export const userSchema = z
	.object({
		name: z.string(),
		email: z.string().email(),
		password: z
			.string()
			.min(10, { message: "Password must be atleast 10 char" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	})

export const envSchema = z.object({
	AUTH_GITHUB_ID: z.string(),
	AUTH_GITHUB_SECRET: z.string(),
})
