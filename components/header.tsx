"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React, { useRef, useState } from "react"
import { motion, stagger, useMotionValueEvent, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"
import logo from "/public/classic-logo.png"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowUpRight, Menu } from "lucide-react"
import MobileNav from "./mobile-nav"

export const nav = [
	"home",
	"services",
	"gallery",
	"pricing",
	"about",
	"contact",
]

const Header = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { scrollY } = useScroll()
	const [navScrolled, setNavScrolled] = useState(false)
	const active = useSelectedLayoutSegment()
	const [navIsOpen, setNavIsOpen] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		const navHeight = ref.current?.getBoundingClientRect().height
		if (ref.current && navHeight) {
			if (latest > navHeight) {
				setNavScrolled(true)
			} else {
				setNavScrolled(false)
			}
		}
	})

	return (
		<header className="fixed left-0 right-0 top-0 z-[100]">
			<motion.div
				className={cn("text-white transition-all duration-300 py-4", {
					"shadow bg-white/50  backdrop-blur-xl text-black": navScrolled,
				})}
				ref={ref}>
				<nav className="">
					<div className="container md:px-8">
						<div className="flex items-center justify-between h-max border-gray-300">
							<Link href={"/"}>
								<Image
									src={logo}
									alt="logo"
									width={400}
									height={400}
									className="w-16 md:w-20 h-auto"
								/>
							</Link>
							<div>
								<ul className="hidden lg:flex items-center space-x-8">
									{nav.map((n, i) => (
										<li
											key={i}
											className={cn("py-1 capitalize tracking-wider text-sm", {
												"border-b border-gray-400": active === n,
												"first:border-b first:border-gray-400": active === null,
											})}>
											<Link href={!(i === 0) ? `/${n}` : "/"}>{n}</Link>
										</li>
									))}
								</ul>
								<div className="flex lg:hidden">
									<Menu onClick={() => setNavIsOpen(true)} />
								</div>
								<MobileNav
									isOpen={navIsOpen}
									setNavIsOpen={setNavIsOpen}
									navScrolled={navScrolled}
								/>
							</div>

							<div className="lg:flex hidden">
								<Link href={"/auth/signin"}>
									<Button
										className={cn(
											"rounded-full border border-blue-700 bg-blue-700 w-32",
											{ "": navScrolled },
										)}>
										Login
										<ArrowUpRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</motion.div>
		</header>
	)
}

export default Header
