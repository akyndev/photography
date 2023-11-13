import React from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { HomeMetadata } from "@/lib/seo"

const inter = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "300", "500", "600", "100"],
})

export const metadata: Metadata = HomeMetadata

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
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
