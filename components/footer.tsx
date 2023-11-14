import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { logo } from "@/lib"
import {
	Facebook,
	FacebookIcon,
	Heart,
	Instagram,
	Twitter,
	Youtube,
} from "lucide-react"

const footerNav = [
	[
		"services",
		"AI Solutions",
		"Digital Marketing",
		"App Development",
		"SEO Consultancy",
		"Web Design",
	],
	[
		"company",
		"AI Solutions",
		"Digital Marketing",
		"App Development",
		"SEO Consultancy",
		"Web Design",
	],
]

const Footer = () => {
	return (
		<footer className="bg-gray-100 pt-10 mt-40">
			<div className="container lg:px-8">
				<section className="grid lg:grid-flow-col auto-cols-auto gap-8  lg:gap-10 py-10 ">
					<div className="text-lg lg:text-base col-span-full lg:col-span-1">
						<h1 className="text-xl font-semibold mb-6">Get in touch</h1>
						<p className="mb-3 text-muted-foreground">
							8014 Edith Blvd NE, Albuquerque, <br />New York,  United States
						</p>
						<p className="mb-3  text-muted-foreground">
							<Link href={"tel:09022236997"}>09022246997</Link>
						</p>
						<p className=" text-muted-foreground">
							<Link href={"mailto:akinladeirede@gmail.com"}>
								akinladeirede@gmail.com
							</Link>
						</p>
					</div>
					{footerNav.map((nav, i) => (
						<React.Fragment key={i}>
							<div className="col-span-full lg:col-span-1">
								<ul>
									{nav.map((l, j) => (
										<li
											className="first:text-xl mb-3 first:mb-6 text-muted-foreground first:text-black first:font-semibold capitalize text-lg lg:text-base"
											key={j}>
											<Link href={"/"}>{l}</Link>
										</li>
									))}
								</ul>
							</div>
						</React.Fragment>
					))}
					<div className="col-span-full lg:col-span-1">
						<h1 className="text-xl font-semibold mb-6">Our Newsletter</h1>
						<p className="text-lg lg:text-base mb-3  text-muted-foreground w-full sm:w-96">
							Subscribe to our newsletter to get our news & discounts delivered
							to you.
						</p>
						<Input
							className="mb-3"
							type="email"
							placeholder="example@gmail.com"
						/>
						<Button className="w-full">Subcribe</Button>
					</div>
				</section>
				<section className="text-muted-foreground">
					<div className="border-t flex items-start lg:items-center justify-start flex-col space-y-6 lg:space-y-0 md:flex-row md:justify-between border-gray-300 py-8">
						<div className="flex items-start justify-between w-full ">
							<Link href={"/"}>
								<div className="flex items-center justify-center cursor-pointer">
									<Image src={logo} alt="logo" width={60} height={30} />
									<p className="font-semibold italic text-lg lg:text-base">
										Classic
									</p>
								</div>
							</Link>
							<div className="text-sm">
								<p>&copy; {new Date().getFullYear()}. All right reserved</p>
								<p className="flex items-center">
									Built by{" "}
									<Link href={"https://wp.akyn.dev"} target="_blank">
										<span className="underline px-1">akyn</span>
									</Link>{" "}
									made with
									<Heart className="ml-2" size={16} fill="red" color="red" />
								</p>
							</div>
						</div>
						<div className="w-full flex justify-end">
							<ul className="grid text-black grid-cols-4 gap-4 mx-auto lg:mx-0">
								<li className="rounded-full hover:bg-black/50 cursor-pointer w-max transition-all duration-300 p-2">
									<Facebook
										fill="white"
										className="lg:w-4 text-black/50  lg:h-4 w-6 h-6"
									/>
								</li>
								<li className="rounded-full hover:bg-black/50 cursor-pointer transition-all duration-300 p-2">
									<Youtube
										fill="white"
										className="lg:w-4  text-black/50 lg:h-4 w-6 h-6"
									/>
								</li>
								<li className="rounded-full hover:bg-black/50 cursor-pointer transition-all duration-300 p-2">
									<Twitter
										fill="white"
										className="lg:w-4 lg:h-4 text-black/50  w-6 h-6"
									/>
								</li>
								<li className="rounded-full hover:bg-black/50 cursor-pointer transition-all duration-300 p-2">
									<Instagram
										fill="white"
										className="lg:w-4 text-black/50 lg:h-4 w-6 h-6"
									/>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</footer>
	)
}

export default Footer
