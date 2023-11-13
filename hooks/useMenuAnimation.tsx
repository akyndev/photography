"use client"
import React, { useEffect } from "react"
import { stagger, useAnimate } from "framer-motion"


const staggerMenuItems = stagger(0.1, { startDelay: .3 })

const useMenuAnimation = (isOpen: boolean) => {
	const [scope, animate] = useAnimate()

	useEffect(() => {
		if (scope.current) {
			animate(
				scope.current,
				isOpen ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 },
				{
					type: "spring",
					duration: .3,
					bounce: 0,
				},
			)
			 animate(
					"li",
					isOpen
						? { opacity: 1, scale: 1, filter: "blur(0px)" }
						: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
					{
						duration: 0.2,
						delay: isOpen ? staggerMenuItems : 0,
					},
			)
			
			animate(
				"button",
				isOpen ? { bottom: 20, opacity: 1 } : { bottom: -20, opacity: 0 },
				{
					type: "spring",
					duration: 0.3,
					bounce: 0,
					delay: .9,
				},
			)
		}
	}, [isOpen])

	return scope
}

export default useMenuAnimation
