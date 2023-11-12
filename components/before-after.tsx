"use client"
import { cn } from "@/lib/utils"
import { ChevronsLeftRight } from "lucide-react"
import Image from "next/image"
import React, { TouchEvent, useRef, useState } from "react"

type Props = {
	before: string
	after: string
  edited?: string,
  className?: string
}

const BeforeAfter = ({ before, after, edited, className  }: Props) => {
	const [show, setShow] = useState(0.5)
	const ref = useRef<HTMLDivElement | null>(null)

	const slide = (xPosition: number) => {
		const container = ref.current?.getBoundingClientRect()
		setShow(() => {
			if (
				ref.current &&
				container &&
				container.left &&
				container?.width &&
				xPosition < container.left
			) {
				return 0
			} else if (
				ref.current &&
				container &&
				container.left &&
				container?.width &&
				xPosition > container.right
			) {
				return 1
			} else {
				if (ref.current && container && container.left && container?.width) {
					return (xPosition - container.left) / container.width
				} else {
					return 0.5
				}
			}
		})
	}

	const handleMouseDown = () => {
		window.onmousemove = handleMouseMove
		window.onmouseup = handleMouseUp
	}

	const handleMouseMove = (e: MouseEvent) => {
		slide(e.clientX)
	}

	const handleMouseUp = () => {
		window.onmousemove = null
		window.onmouseup = null
	}

	const handleTouchMove = (e: TouchEvent) => {
		slide(e.touches.item(0).clientX)
	}

	return (
		<div className={cn("w-full", className)}>
			<div className="relative w-full select-none group" ref={ref}>
				<Image
					src={after}
					width={480}
					height={480}
					alt="edited"
					className="w-full lg:w-full h-auto poiner-events-none"
				/>
				{edited ? (
					<Image
						src={edited}
						width={480}
						height={480}
						alt="edited"
						className="w-full lg:w-full h-auto poiner-events-none absolute top-0 bottom-0 left-right-0 z-10 opacity-0 group-hover:opacity-100"
					/>
				) : null}
				<Image
					style={{
						clipPath: `polygon(0 0, ${show * 100}% 0, ${
							show * 100
						}% 100%, 0 100%`,
					}}
					src={before}
					width={480}
					height={480}
					alt="edited"
					className="w-full lg:w-full h-auto absolute inset-0 fill-teal-700 poiner-events-none"
				/>
				<div
					style={{ left: `${show * 100}%` }}
					className="absolute inset-y-0 z-50">
					<div className="relative h-full transition-all duration-300 group-hover:opacity-100 lg:opacity-0">
						<div className="absolute inset-y-0 bg-white w-0.5 -ml-px "></div>
						<div
							style={{ touchAction: "none" }}
							onMouseDown={handleMouseDown}
							onTouchMove={handleTouchMove}
							className="rounded-full flex items-center justify-center cursor-grab  h-12 w-12 -ml-6 bg-white top-1/2 -translate-y-50 -mt-6 absolute">
							<ChevronsLeftRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BeforeAfter
