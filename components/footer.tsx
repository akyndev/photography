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
		<footer className="bg-gray-50/50">
			<div className="container lg:px-8">
				<section className="grid grid-flow-col auto-cols-auto  gap-8 lg:gap-16 py-10 ">
					<div className="text-sm col-span-full md:col-span-2 lg:col-span-1">
						<h1 className="text-xl font-semibold mb-6">Get in touch</h1>
						<p className="mb-3 text-muted-foreground">
							8014 Edith Blvd NE, Albuquerque, New York, <br /> United States
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
							<div className="col-span-full md:col-span-2 lg:col-span-1">
								<ul>
									{nav.map((l, j) => (
										<li
											className="first:text-xl mb-3 first:mb-6 text-muted-foreground first:text-black first:font-semibold capitalize text-sm"
											key={j}>
											<Link href={"/"}>{l}</Link>
										</li>
									))}
								</ul>
							</div>
						</React.Fragment>
					))}
					<div className="col-span-full md:col-span-2 lg:col-span-1">
						<h1 className="text-xl font-semibold   mb-6">Our Newsletter</h1>
						<p className="text-sm mb-3  text-muted-foreground w-full sm:w-96">
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
				<section className="">
					<div className="border-t flex items-center flex-col justify-center space-y-6 lg:space-y-0 lg:flex-row lg:justify-between border-gray-300 py-8">
						<Link href={"/"}>
							<div className="flex items-center justify-center cursor-pointer">
								<Image src={logo} alt="logo" width={60} height={30} />
								<p className="font-semibold italic text-lg">Classic</p>
							</div>
						</Link>
						<div className="text-sm">
							<p>&copy; {new Date().getFullYear()}. All right reserved</p>
							<p className="flex items-center">
								Built by akyn made with{" "}
								<Heart className="ml-2" size={16} fill="red" color="red" />
							</p>
						</div>
						<div>
							<ul className="grid grid-cols-4 gap-4">
								<li className="rounded-full bg-black p-2">
									<Facebook fill="white" />
								</li>
								<li className="rounded-full bg-black p-2">
									<Youtube fill="white" />
								</li>
								<li className="rounded-full bg-black p-2">
									<Twitter fill="white" />
								</li>
								<li className="rounded-full bg-black p-2">
									<Instagram fill="white" />
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
