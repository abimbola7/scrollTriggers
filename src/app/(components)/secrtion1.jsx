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
    const el = document.querySelector(".text-1");
    const bounds = el.getBoundingClientRect();
  
    const scaleX = window.innerWidth / bounds.width;
    const scaleY = window.innerHeight / bounds.height;
    const requiredScale = Math.max(scaleX, scaleY) * 100; // *2 to fully push it off-screen
    let split = SplitText.create(".split", {
      type : "words, chars",
    })
    let split1 = SplitText.create(".split1", {
      type : "words, chars",
    })

    timeline.current = gsap.timeline({})
    .from(split.chars, {
      opacity : 0,
      duration : 1,
      y : 100,
      autoAlpha : 1,
      stagger : .05
    })
    .to(el, {
      scale: requiredScale,
      duration: 3,
      ease: "power2.inOut"
    })
    // .to(".text-1", {
    //   delay : .5,
    //   scale : 70,
    //   transformOrigin : "center",
    //   duration : 2,
    //   ease : "power4.in "
    // })
    // .from(".split1", {
    //   opacity : 0,
    //   scale : .5,
    //   transformOrigin : "center",
    //   duration : 1
    // }, "+=0")
    // .to(".split1", {
    //   delay : .5,
    //   scale : 500,
    //   transformOrigin : "center",
    //   duration : 2.5,
    //   ease : "power4"
    //   // ease : "none"
    // }, "+=0.5")

    // console.log(split)
  })
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center text-black overflow-hidden'>
      <div className='w-full max-w-[300px] text-5xl text-1'>
        <p className='text-left split overflow-hidden font-medium'>Oladosu</p>
        <p className='text-right split overflow-hidden font-medium'>Abimbola</p>
      </div>
      {/* <div className='absolute text-center flex items-center justify-center top-0 left-0 border w-full h-screen'>
        <p className='text-4xl font-medium split1'>A Creative Frontend Developer</p>
      </div> */}
    </div>
  )
}

export default Section1
