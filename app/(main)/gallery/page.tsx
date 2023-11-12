import Gallery from "@/components/gallery"
import React from "react"

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

const Page = () => {
	return (
		<main className="">
			<div className="h-16 md:h-20 w-full bg-black/50 mb-10"></div>
			<section className="container lg:px-8">
				<Gallery gallery={gallery} />
			</section>
		</main>
	)
}

export default Page
