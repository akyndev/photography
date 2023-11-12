import React from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { SessionProvider } from "@/providers/session-provider"
import { cn } from "@/lib/utils"

const inter = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "300", "500", "600", "100"],
})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn("bg-background text-foreground", inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<SessionProvider>
						{children}
					</SessionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
