import Image from 'next/image'
import React from 'react'

const Gallery = ({ gallery }: { gallery: string[] }) => {
  return (
		<>
			<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 relative [&>div:not(:first-child)]:mt-4">
				{gallery.map((s, i) => (
					<div key={i} className="overflow-hidden w-full group relative">
						<Image
							src={s}
							alt="img"
							// fill
							width={400}
							height={400}
							sizes="(max-width: 768px) 100vw, 700px"
							className="w-full group-hover:scale-125 transition-all h-auto duration-300"
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default Gallery