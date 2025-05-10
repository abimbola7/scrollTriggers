"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(TextPlugin, SplitText)

const Section1 = ({ sect1, setSect1 }) => {
  const containerRef = React.useRef();
  const [ mounted, setMounted ] = React.useState(false)
  const [ text1, setText1]  = React.useState(false)
  const [ text2, setText2]  = React.useState(false)
  
  const timeline = React.useRef()
  const { context, contextSafe } = useGSAP(() => {
    setMounted(true)
    if (mounted) {
      
      const el = document.querySelector(".text-1");
      const bounds = el.getBoundingClientRect();
    
      const scaleX = window.innerWidth / bounds.width;
      const scaleY = window.innerHeight / bounds.height;
      const requiredScale = Math.max(scaleX, scaleY) * 100; // *2 to fully push it off-screen
      console.log(requiredScale)
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
        delay: .7,
        scale: requiredScale,
        duration: 3,
        ease: "power2.inOut",
        onComplete : () => setText1(true)
      })
      .from(".split1", {
        opacity : 0,
        scale : .5,
        transformOrigin : "center",
        duration : 1
      }, "-=1.5")
      .to(".split1", {
        delay : .5,
        scale : 1000,
        transformOrigin : "center",
        duration : 5,
        ease: "power2.inOut",
        // ease : "none"
      }, "+=0.5")
      .to(".split1", {
        opacity : 0,
        duration : 1,
        ease: "power2.inOut",
        onComplete : () => setText2(true)
      }, "-=3.5")
      .to(".sect1", {
        opacity : 0,
        duration : 1,
        ease: "power2.inOut",
        onComplete : () => setSect1(true)
      }, "-=3.5")
    }

    // console.log(split)
  }, {
    dependencies : [mounted]
  })
  return (
        <div className='w-full h-screen fixed top-0 left-0 z-[10] bg-white sect1'>
          {
            mounted && (
            <div 
            ref={containerRef}
            className='w-full h-screen bg-white flex items-center justify-center text-black overflow-x-hidden'>
              {
                !text1 && (
                  <div className='w-full max-w-[300px] text-5xl text-1'>
                    <p className='text-left split overflow-hidden font-medium'>Oladosu</p>
                    <p className='text-right split overflow-hidden font-medium'>Abimbola</p>
                  </div>
                )
              }
              {
                !text2 && (
                  <div className='absolute text-center flex items-center justify-center top-0 left-0 border w-full h-screen'>
                    <p className='text-[5vw] sm:text-[4vw] md:text-[2.7vw] font-medium split1'>A Creative Frontend Developer</p>
                  </div>
                )
              }
            </div>
            )
          }
        </div>
  )
}

export default Section1
