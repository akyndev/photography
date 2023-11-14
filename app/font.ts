import { Poppins, Rubik } from "next/font/google"

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "300", "500", "600", "100", "700", "800", "900"],
})

export const rubik = Rubik({
	subsets: ["latin"],
	weight: ["700", "400", "300", "500", "600", "800", "900"],
})
