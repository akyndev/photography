"use client"
import BeforeAfter from "@/components/before-after"
import Gallery from "@/components/gallery"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"
import Link from "next/link"
import React, { useRef, useState } from "react"

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
		<main className="w-full relative">
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
						<div className="w-full lg:w-6/12 lg:ml-12">
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
				<div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-16">
					<BeforeAfter
						before="http://wedding-retouching.com/UserFiles/wedding-editing(3)(1).jpg"
						after="http://wedding-retouching.com/UserFiles/wedding-editing(4)(1).jpg"
						edited="http://wedding-retouching.com/UserFiles/wedding-editing(2)(1).png"
						className="lg:w-7/12 w-full sm:w-10/12"
					/>
					<div className="w-full">
						<p>
							If you or your colleagues still think that placing an order for
							wedding photo editing is a complicated task, we can prove
							opposite! Due to comfortable usability of our website and friendly
							customer support (find online help at the bottom chat window), you
							will have no problems concerning your photo editing orders.
							Everything you see on our website is done for customers` comfort.
							So, just try to make your first order and realize how simple it
							is.
							<br />
							s photo - Before - Example of wedding photography editing s photo
							- After - Example of wedding photography editing
							<br />
							Firstly, choose what package of professional photo retouching
							services you need. Please look at this wedding photo editing
							example. That is a task of primary importance as the biggest part
							of success depends exactly on it. You should be carefully
							consulted by our photo retouchers who will advise you important
							things about wedding photography edit. <br /> The next step is
							registration. It is necessary for us to get some information about
							would-be client who is interested in photo retouching services and
							for you to track and review your order. <br /> Uploading wedding
							photos is surely the next important step. You should be aware of
							some features and limitations. For instance, you will face
							difficulties if you plan to upload shots for image retouching that
							are bigger than 50 mb. In this case the most rational decision
							will be to ask a photo retouchers or a manager in the online
							support chat. Our specialists are always open for communication.{" "}
							<br /> And finally, wait for wedding photo editing results. As
							soon as your photos are ready you can download them and view work
							of our photography retouchers team. If you have remarks, feel free
							to discuss them with our managers and we will fix all of the
							mistakes.
						</p>
					</div>
				</div>
			</section>
			<section className="container lg:px-8">
					<Gallery gallery={gallery} />
				<div className="w-full flex my-16">
					<Link
						className="justify-self-center mx-auto w-full sm:w-72"
						href={"/gallery"}>
						<Button className="w-full py-4 ">See More</Button>
					</Link>
				</div>
			</section>
		</main>
	)
}
