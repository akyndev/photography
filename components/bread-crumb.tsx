"use client"
import Link from "next/link"
import {
	usePathname,
	useSelectedLayoutSegments,
	useSelectedLayoutSegment,
} from "next/navigation"
import React from "react"

const BreadCrum = () => {
	const segments = useSelectedLayoutSegments()
	const segment = useSelectedLayoutSegment()
  const path = usePathname()
  const seg: string[] = []
  
  for (let i = 1; i <= segments.length; i++){
    seg.push(segments.slice(0, i).join("/"))
  }

  console.log(path, segment)

	return (
		<div className="container flex items-center space-x-4">
			{segments.map((s, i) => (
				<Link href={`/${seg[i]}`} key={s}>
				{s} 
				</Link>
			))}
		</div>
	)
}

export default BreadCrum
