"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(TextPlugin, SplitText)

const Section1 = () => {
  const timeline = React.useRef()
  const { context, contextSafe } = useGSAP(() => {
    let split = SplitText.create(".split", {
      type : "words, chars",
    })
    
    timeline.current = gsap.timeline({})
    .from(split.chars, {
      duration : 1,
      y : 100,
      autoAlpha : 1,
      stagger : .05
    }).to(".text-1", {
      delay : .5,
      scale : 70,
      transformOrigin : "center",
      duration : 2,
      ease : "power4.in "
    }
    )

    console.log(split)
  })
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center text-black'>
      <div className='w-full max-w-[300px] text-5xl text-1'>
        <p className='text-left split overflow-hidden font-medium'>Oladosu</p>
        <p className='text-right split overflow-hidden font-medium'>Abimbola</p>
      </div>
    </div>
  )
}

export default Section1
