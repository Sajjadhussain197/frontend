"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cards = [
  {
    id: 1,
    title: "MALAYSIA VISA",
    content: "Malaysia is a vibrant and diverse country located in Southeast Asia, known for...",
    image: "/cardpic.jpeg",
    flag: "/luxembourg.jpeg"
  },
  {
    id: 2,
    title: "VIETNAM VISA",
    content: "Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to t...",
    image: "/cardpic.jpeg",
    flag: "/luxembourg.jpeg"
  },
  {
    id: 3,
    title: "INDONESIA VISA",
    content: "Indonesia is a vast archipelago nation located in Southeast Asia, comprised of t...",
    image: "/cardpic.jpeg",
    flag: "/luxembourg.jpeg"
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="w-full max-w-7xl mx-auto  py-8 mt-20 flex justify-center ">
      <div className="flex flex-col msm:flex-row msm:items-center gap-2 ">
        <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0 flex flex-col gap-2 pl-2 ">
          <h2 className="text-lg msm:text-3xl font-bold mb-4">We Have Authorized Embassy Visa Application Centre</h2>
          <hr className="w-2/3 bg-yellow-500 h-0.5"/>
          <p className="text-sm msm:text-lg font-semibold  ">Go beyond your imagination</p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="hover:bg-yellow-500 bg-gray-200 h-[44px] w-[44px]"
            >
              <ChevronLeft className="h-10 w-10 text-yellow-500 hover:text-white " />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next slide"
              className="hover:bg-yellow-500 bg-gray-200 h-[44px] w-[44px]"
            >
              <ChevronRight  className="h-10 w-10 text-yellow-500 hover:text-white " />
            </Button>
          </div>
        </div>
        <div className="lg:w-2/3  overflow-hidden p-6 h-[500px]">
          <div className="relative ">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              
            >
              {cards.map((card) => (
               
                <div key={card.id} className="w-fit flex-shrink-0 px-2 " 
                >
                  <div className="relative border  w-full max-w-[281px] h-[384px] rounded-xl shadow-lg mx-auto
                  "
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <img className="w-full h-full object-cover rounded-lg" src={card.image} alt={`${card.title} landscape`} />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-lg px-3 py-1">Visa Application Centre</span>
                    <div className="absolute -bottom-14 left-0 right-0 p-4 max-w-xs mx-auto">
                      <div className="relative bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-lg p-2">
                        <h2 className="text-lg font-bold">{card.title}</h2>
                        <p className="text-sm">{card.content}</p>
                        <div className="absolute -top-6 -right-2 bg-white rounded-full p-2 shadow-lg">
                          <img src={card.flag} className="rounded-full h-14 w-14" alt={`${card.title.split(' ')[0]} Flag`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




// import React from 'react'

// const ApplicationCenters = () => {
//     return (
//         <div className='flex flex-col mx-auto max-w-7xl msm:flex-row items-center py-2'>
//             <div id="left" className="flex flex-col gap-4 w-1/3 bg-white text-black">
//                 <h1 className='text-4xl font-bold '>We Have Authorized Embassy Visa Application Centre</h1>
//                 <hr className='bg-yellow-600 h-1  max-w-[70%]' />
//                 <h2>Go beyond your imagination</h2>
//                 <div id="buttons" className='flex gap-2'>
//                     <span className='p-2 bg-slate-400 rounded-lg '>left</span>
//                     <span className='p-2 bg-slate-400 rounded-lg '>right</span>

//                 </div>
//             </div>
//             <div id="right" className="flex w-2/3 mt-5">
//                 <div className="relative w-full max-w-[330px] h-[450px]   rounded-xl shadow-lg">
//                     <img className="w-full h-full object-fit rounded-lg" src="/cardpic.jpeg" alt="Vietnam landscape" />
//                     <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-lg px-3 py-1">Visa Application Centre</span>
//                     <div className="absolute  -bottom-14 left-0 right-0 p-4 max-w-xs mx-auto">
//                         <div className=" relative bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-lg p-4">

//                             <h2 className="text-lg font-bold">VIETNAM VISA</h2>
//                             <p className="text-sm">Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to...</p>
//                             <div className="absolute -top-6 -right-2 bg-white rounded-full p-2 shadow-lg">
//                             <img src="/luxembourg.jpeg" className='rounded-full h-14 w-14' alt="Vietnam Flag" />
//                         </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ApplicationCenters
