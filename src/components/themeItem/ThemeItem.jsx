"use client"

import Image from 'next/image'
import React from 'react'

const ThemeItem = ({color, img, changeColor}) => {
  return (
    <Image 
        src={img} 
        alt="color" 
        width={"auto"}
        height={"auto"}
        onClick={() => changeColor(color)}
    />
  )
}

export default ThemeItem