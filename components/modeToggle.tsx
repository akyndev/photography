"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const ModeToggle = () => {

    const { setTheme } = useTheme()

  return (
		<div>
			<button onClick={() => setTheme("dark")}>dark</button>
			<button onClick={() => setTheme("light")}>light</button>
		</div>
	)
}

export default ModeToggle