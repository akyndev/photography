"use client"
import React, { useEffect } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "@/lib/schema"
import type { User } from "@/lib/types"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Github } from "lucide-react"

const Form = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: zodResolver(userSchema),
	})

	const router = useRouter()
	const { data: session, status } = useSession()



	const onSubmit = (data: User) => {
		signIn("credentials", {
			name: data.name,
			email: data.email,
			password: data.password,
			confirmPassword: data.confirmPassword,
		})
		reset()
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col  space-y-4 items-start py-8">
				<Input
					className="px-4 py-2 rounded-full w-72 border border-gray-300"
					{...register("name", { required: true })}
					type="text"
				/>
				<Input
					className="px-4 py-2 rounded-full w-72 border border-gray-300"
					{...register("email", { required: true })}
					type="text"
				/>
				{errors.email && (
					<p className="text-destructive">{errors.email.message}</p>
				)}
				<Input
					className="px-4 py-2 rounded-full w-72 border border-gray-300"
					{...register("password", { required: true })}
					type="password"
				/>
				{errors.password && (
					<p className="text-destructive">{errors.password.message}</p>
				)}
				<Input
					className="px-4 py-2 rounded-full w-72 border border-gray-300"
					{...register("confirmPassword", { required: true })}
					type="password"
				/>
				{errors.confirmPassword && (
					<p className="text-destructive">{errors.confirmPassword.message}</p>
				)}
				<input
					type="submit"
					value="Submit"
					className="w-72 py-2 bg-blue-700 text-white rounded-full cursor-pointer"
				/>
			</form>
			<p className="w-72 text-center">or login with</p>
			<button
				type="button"
				className="w-72 py-2 my-4 bg-gray-900 flex items-center justify-center space-x-4 text-white rounded-full cursor-pointer"
				onClick={() => signIn("github")}>
				<span className="p-2 bg-black rounded-full ">
					<Github />
				</span>
				<p>Github</p>
			</button>
		</>
	)
}

export default Form
