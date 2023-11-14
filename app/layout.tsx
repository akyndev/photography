import React from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { HomeMetadata } from "@/lib/seo"
import { poppins } from "./font"



export const metadata: Metadata = HomeMetadata

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn("bg-background text-foreground", poppins.className)}>
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
