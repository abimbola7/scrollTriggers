"use client"
import ImagesScroll from "./(components)/imagesScroll";
import Section1 from "./(components)/secrtion1";
import React from "react";

export default function Home() {
  const [ sect1, setSect1]  = React.useState(false)
  return (
    <div className="overflow-x-hidden relative bg-red-500 min-h-screen">
      {
        !sect1 && <Section1 
        sect1={sect1}
        setSect1={setSect1}
        />
      }

      <ImagesScroll />
    </div>
  );
}
