"use client"
import { useState, useEffect } from "react"
import { useAnimate, stagger, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { nav } from "./header"
import { useSelectedLayoutSegment } from "next/navigation"
import logo from "/public/classic-logo.png"
import { Button } from "./ui/button"
import { ArrowUpRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import useMenuAnimation from "@/hooks/useMenuAnimation"

type MobileNavProps = {
	isOpen: boolean
	navScrolled: boolean
	setNavIsOpen: (state: boolean) => void
}

export default function MobileNav({
	isOpen,
	navScrolled,
	setNavIsOpen,
}: MobileNavProps) {
	const scope = useMenuAnimation(isOpen)
	const active = useSelectedLayoutSegment()

	return (
		<>
			{isOpen ? (
				<div
					ref={scope}
					className="fixed top-0 left-0 right-0 bg-white h-0 text-black overflow-hidden">
					<div className="py-4 px-4 flex flex-col justify-between relative h-full">
						<div className="flex items-center justify-between">
							<Link href={"/"}>
								<Image
									src={logo}
									alt="logo"
									width={400}
									height={400}
									className="w-16 h-auto"
								/>
							</Link>
							<X onClick={() => setNavIsOpen(false)} />
						</div>
						<ul className="flex-1 my-8 flex flex-col items-center space-y-6 text-lg">
							{nav.map((n, i) => (
								<li
									key={i}
									className={cn(
										"py-1 capitalize tracking-wider opacity-0 scale-0",
										{
											"border-b border-black": active === n,
											"first:border-b firsrt:border-black": active === null,
										},
									)}>
									<Link href={!(i === 0) ? `/${n}` : "/"}>{n}</Link>
								</li>
							))}
						</ul>
						<Button
							className={cn(
								"rounded-full absolute left-1/2 -translate-x-1/2 w-11/12 sm:w-7/12 -bottom-12 border border-blue-700 bg-blue-700 mobile opacity-0",
								{ "": navScrolled },
							)}>
							Login
							<ArrowUpRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			) : null}
		</>
	)
}
