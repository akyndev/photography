"use client"
import BeforeAfter from "@/components/before-after"
import Gallery from "@/components/gallery"
import { Button } from "@/components/ui/button"
import { Camera, Check, CheckCircle, Pause, Play, Slash } from "lucide-react"
import Link from "next/link"
import React, { useRef, useState } from "react"
import { rubik } from "../font"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const gallery = [
	"https://images.unsplash.com/photo-1624634564754-e45be6d06159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1699669888768-871c5f7cad86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1624634564754-e45be6d06159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1699669888768-871c5f7cad86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1661420158227-90b00582462f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1624634564754-e45be6d06159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1624634564754-e45be6d06159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1697477565917-fa40026f842d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1699669888768-871c5f7cad86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function Home() {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(videoRef.current?.paused)

	return (
		<main className="w-full relative space-y-40">
			<section className="relative h-screen max-h-[1000px] w-full">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-20"></div>
				<video
					autoPlay
					loop
					controls={false}
					ref={videoRef}
					playsInline
					className="object-cover  w-full h-full ">
					<source src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4" />
				</video>
				<div className="absolute bottom-8 z-40 right-8 left-0">
					<div className="container flex items-end justify-end">
						<Button
							className="rounded-sm px-4 transition-all duration-300 hover:bg-white hover:text-black font-semibold tracking-widest"
							onClick={() => {
								if (videoRef.current && videoRef.current.paused) {
									videoRef.current.play()
									setIsPlaying(true)
								} else {
									videoRef.current?.pause()
									setIsPlaying(false)
								}
							}}>
							{!isPlaying ? (
								<Play className="lg:mr-2 h-4 w-4" />
							) : (
								<Pause className="lg:mr-2 h-4 w-4" />
							)}
							<span className="hidden lg:block">
								{!isPlaying ? "Play" : "Pause"} Video
							</span>
						</Button>
					</div>
				</div>
				<div className="absolute text-white bottom-32 left-0 right-0 z-40">
					<div className="container">
						<div className="w-full lg:w-6/12 lg:ml-1 -mr-12">
							<h1 className="text-4xl  xl:text-5xl mb-6">
								Capture the Moments <br /> That Matter.
							</h1>
							<p className="font-light text-md xl:text-base">
								Welcome classic&apos;s Photography, where every frame tells a
								story. Embrace the beauty of life&apos;s fleeting moments
								through the lens of our passion. From breathtaking landscapes to
								intimate portraits, we specialize in preserving memories that
								last a lifetime. Let us paint your narrative through the art of
								photography. Explore our gallery and let the images speak for
								themselves.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="container lg:px-8 my-20">
				<div className="flex flex-col lg:flex-row items-start space-y-16 lg:space-y-0 lg:space-x-16 lg:px-8 px-0">
					<BeforeAfter
						before="http://wedding-retouching.com/UserFiles/wedding-editing(3)(1).jpg"
						after="http://wedding-retouching.com/UserFiles/wedding-editing(4)(1).jpg"
						edited="http://wedding-retouching.com/UserFiles/wedding-editing(2)(1).png"
						className="lg:w-9/12 w-full sm:w-10/12"
					/>
					<div className="w-full">
						<h1 className="text-2xl font-bold mb-8">Lorem ipsum</h1>
						<ul className="space-y-10 lg:w-11/12">
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Seamless Quality and Convenience
									</h2>
									<p>
										Experience the convenience of professional wedding photo
										editing. From initial examples to the final touches,
										we&apos;re dedicated to exceeding your expectations with our
										streamlined service.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Effortless Wedding Photo Enhancement
									</h2>
									<p>
										Transforming your wedding photos is simpler than ever with
										our user-friendly process. Choose your retouching package,
										consult with our experts, and witness the magic unfold.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Effortless Wedding Photo Enhancement
									</h2>
									<p>
										Transforming your wedding photos is simpler than ever with
										our user-friendly process. Choose your retouching package,
										consult with our experts, and witness the magic unfold.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Easy Steps to Stunning Edits
									</h2>
									<p>
										Register, upload, and await your beautifully enhanced
										wedding photos. Our support team is on standby for any
										assistance you may need.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div className="container lg:px-8">
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
						<li className="space-y-4 ">
							<div className="p-6 bg-blue-600 rounded-md w-max">
								<Camera color="white" />
							</div>
							<Separator />
							<div>
								<h3 className="font-semibold text-xl">Take a shoot</h3>
								<p className="lg:text-sm text-base my-2">
									Get snap by anyone with your mobile phone or by a photographer
								</p>
							</div>
						</li>
						<li className="space-y-4 ">
							<div className="p-6 bg-blue-600 rounded-md w-max">
								<Camera color="white" />
							</div>
							<Separator />
							<div>
								<h3 className="font-semibold text-xl">Take a shoot</h3>
								<p className="lg:text-sm text-base my-2">
									Get snap by anyone with your mobile phone or by a photographer
								</p>
							</div>
						</li>
						<li className="space-y-4 ">
							<div className="p-6 bg-blue-600 rounded-md w-max">
								<Camera color="white" />
							</div>
							<Separator />
							<div>
								<h3 className="font-semibold text-xl">Take a shoot</h3>
								<p className="lg:text-sm text-base my-2">
									Get snap by anyone with your mobile phone or by a photographer
								</p>
							</div>
						</li>
						<li className="space-y-4 ">
							<div className="p-6 bg-blue-600 rounded-md w-max">
								<Camera color="white" />
							</div>
							<Separator />
							<div>
								<h3 className="font-semibold text-xl">Take a shoot</h3>
								<p className="lg:text-sm text-base my-2">
									Get snap by anyone with your mobile phone or by a photographer
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className="container lg:px-8 my-20">
				<div className="flex flex-col lg:flex-row-reverse items-start space-y-16 lg:space-y-0 lg:space-x-16 lg:px-8 px-0">
					<BeforeAfter
						before="http://wedding-retouching.com/UserFiles/wedding-editing(3)(1).jpg"
						after="http://wedding-retouching.com/UserFiles/wedding-editing(4)(1).jpg"
						edited="http://wedding-retouching.com/UserFiles/wedding-editing(2)(1).png"
						className="lg:w-9/12 w-full sm:w-10/12"
					/>
					<div className="w-full">
						<h1 className="text-2xl font-bold mb-8">Lorem ipsum</h1>
						<ul className="space-y-10 lg:w-11/12">
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Seamless Quality and Convenience
									</h2>
									<p>
										Experience the convenience of professional wedding photo
										editing. From initial examples to the final touches,
										we&apos;re dedicated to exceeding your expectations with our
										streamlined service.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Effortless Wedding Photo Enhancement
									</h2>
									<p>
										Transforming your wedding photos is simpler than ever with
										our user-friendly process. Choose your retouching package,
										consult with our experts, and witness the magic unfold.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Effortless Wedding Photo Enhancement
									</h2>
									<p>
										Transforming your wedding photos is simpler than ever with
										our user-friendly process. Choose your retouching package,
										consult with our experts, and witness the magic unfold.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<CheckCircle color="green" className="h-8 w-8" />
								<div className="flex-1">
									<h2 className="font-semibold text-lg  mb-3">
										Easy Steps to Stunning Edits
									</h2>
									<p>
										Register, upload, and await your beautifully enhanced
										wedding photos. Our support team is on standby for any
										assistance you may need.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="container lg:px-8 space-y-16">
				<div>
					<h1 className="text-4xl lg:text-5xl font-bold">
						Some of our recent <br /> edited shoot
					</h1>
					<p className="my-6 max-w-[700px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
						excepturi magni magnam molestias repellat repellendus modi
						temporibus fugiat ratione molestiae! Commodi in explicabo maiores,
						alias sint quasi optio cum repellendus?
					</p>
				</div>
				<Gallery gallery={gallery} />
				<div className="w-full flex ">
					<Link
						className="justify-self-center mx-auto w-full sm:w-72"
						href={"/gallery"}>
						<Button className="w-full py-4 ">See More</Button>
					</Link>
				</div>
			</section>
			<section
				className={cn("bg-blue-50 py-20 overflow-hidden", rubik.className)}>
				<div className="container relative  lg:px-8">
					<div className="grid grid-cols-1 lg:text-sm md:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-300 rounded-3xl overflow-hidden border border-gray-300">
						<div className="p-6 space-y-8">
							<h4 className="font-semibold">Free</h4>
							<p className="">
								Lorem ipsum dolor, amet consectetur adipisicing elit. Quaerat
								fuga architecto nam magnam quia neque natus perspiciatis
							</p>
							<h1 className="text-2xl lg:text-3xl font-bold flex items-center">
								$20
								<Slash
									className="ml-1 -mr-1 -rotate-12 text-muted-foreground"
									strokeWidth={4}
								/>
								<span className="text-muted-foreground">pic</span>
							</h1>
							<Button className="w-full">Order now</Button>
							<ul className=" font-bold space-y-3">
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
							</ul>
						</div>
						<div className="p-6 space-y-8">
							<h4 className="font-semibold">Free</h4>
							<p className="">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Quaerat fuga architecto nam magnam quia neque natus perspiciatis
							</p>
							<h1 className="text-2xl lg:text-3xl font-bold flex items-center">
								$20
								<Slash
									className="ml-1 -mr-1 -rotate-12 text-muted-foreground"
									strokeWidth={4}
								/>
								<span className="text-muted-foreground">pic</span>
							</h1>
							<Button className="w-full">Order now</Button>
							<ul className=" font-bold space-y-3">
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
							</ul>
						</div>
						<div className="p-6 space-y-8">
							<h4 className="font-semibold">Free</h4>
							<p className="">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Quaerat fuga architecto nam magnam quia neque natus perspiciatis
							</p>
							<h1 className="text-2xl lg:text-3xl font-bold flex items-center">
								$20
								<Slash
									className="ml-1 -mr-1 -rotate-12 text-muted-foreground"
									strokeWidth={4}
								/>
								<span className="text-muted-foreground">pic</span>
							</h1>
							<Button className="w-full">Order now</Button>
							<ul className=" font-bold space-y-3">
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
							</ul>
						</div>

						<div className="p-6 space-y-8">
							<h4 className="font-semibold">Free</h4>
							<p className="">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Quaerat fuga architecto nam magnam quia neque natus perspiciatis
							</p>
							<h1 className="text-2xl lg:text-3xl font-bold flex items-center">
								$20
								<Slash
									className="ml-1 -mr-1 -rotate-12 text-muted-foreground"
									strokeWidth={4}
								/>
								<span className="text-muted-foreground">pic</span>
							</h1>
							<Button className="w-full">Order now</Button>
							<ul className=" font-bold space-y-3">
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="blue" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
								<li className="flex space-x-4">
									<Check color="gray" size={20} />
									<h6>Background removal</h6>
								</li>
							</ul>
						</div>
					</div>
					<div className="absolute bg-blue-400 blur-[72px] top-0 left-32 w-24 h-24" />
					<div className="absolute bg-blue-400 blur-[72px] bottom-0 left-72 w-24 h-24" />
					<div className="absolute bg-blue-400 blur-[72px] top-32 right-96 w-24 h-24" />
					<div className="absolute bg-blue-400 blur-[72px] -bottom-32 right-32 w-24 h-24" />
				</div>
			</section>
		</main>
	)
}
