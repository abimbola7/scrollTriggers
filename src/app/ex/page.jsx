"use client"

import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "../(components)/ex1.css"


gsap.registerPlugin(ScrollTrigger)


const ImagesScroll = () => {
  // let currentSection;
  const container = useRef()
  useGSAP(()=>{
    gsap.defaults({
      duration : .3,
      overwrite : "auto"
    })
    let sections = gsap.utils.toArray("section"),
        currentSection = sections[0]
    console.log(`${(sections.length * 100)}%`)
    
    gsap.set(container.current, {
      height : `${(sections.length * 100)}%`
    });

    const setSection = (section) => {
      if (section !== currentSection) {
        gsap.to(currentSection, { scale : .8, autoAlpha : 0 });
        gsap.to(section, { scale : 1, autoAlpha : 1 });
        currentSection = section;
      }
    };

    sections.forEach((section, i)=>{
      console.log("jhbsfuibi")
      ScrollTrigger.create({
        // trigger : section,
        // use dynamic scroll positions based on the window height (offset by half  to make it feel natural
        start : () => (i - .5) * innerHeight,
        end : () => (i + .5) * innerHeight,
        onToggle : self => {
          console.log(self)
          self.isActive && setSection(section)
        }
      })
    })


    ScrollTrigger.create({
      start: 1,
      end: () => ScrollTrigger.maxScroll(window) - 1,
      onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: self => self.scroll(2)
    }).scroll(2);
  }, {
    scope : container
  })




  return (
    <div className='' ref={container}>
      <section className="first panel flex items-center justify-center flex-col h-full w-full bg-blue-500 blue fixed ">
        <h1>Looped &quot;Scrolling&quot; Section Transitions</h1>
        <div className="scroll-down">Scroll up or down<div className="arrow"></div></div>
      </section>
      <section className="panel fixed top-0 left-0 flex items-center justify-center flex-col h-full w-full red bg-red-500">
        <h1>Hey look, another section</h1>
      </section>
      <section className="panel fixed top-0 left-0 flex items-center justify-center flex-col h-full w-full orange bg-orange-500">
        <h1>These sections just keep coming</h1>
      </section>
      <section className="panel fixed top-0 left-0 flex items-center justify-center flex-col h-full w-full purple bg-purple-500">
        <h1>Nice transitions though</h1>
      </section>
      <section className="panel fixed top-0 left-0 flex items-center justify-center flex-col h-full w-full green bg-green-500">
        <h1>How about we go back to the start after this?</h1>
      </section>
    </div>
  )
}

export default ImagesScroll
