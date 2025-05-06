"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(TextPlugin, SplitText)

const Section1 = () => {
  const { context, contextSafe } = useGSAP(() => {
    let split = SplitText.create(".split", {
      type : "words, chars",
    })

    gsap.from(split.chars, {
      duration : 1,
      y : 100,
      autoAlpha : 1,
      stagger : .05
    })

    console.log(split)
  })
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center text-black'>
      <div className='w-full max-w-[300px] text-5xl'>
        <p className='text-left split overflow-hidden font-medium'>Oladosu</p>
        <p className='text-right split overflow-hidden font-medium'>Abimbola</p>
      </div>
    </div>
  )
}

export default Section1
