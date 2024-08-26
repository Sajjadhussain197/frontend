"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export const DropBox = () => {
    return (
        <>
            <div className="h-300 w-60 bg-white border rounded-md">
                hello
            </div>
        </>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => [
        setIsOpen(true)

    ]

    return (

        <nav>
            <div className="relative msm:h-40 h-20 text-black bg-white w-full flex msm:flex-col flex-row items-center  msm:mx-auto px-4 msm:px-6">
                <div className="msm:w-[78%] w-full flex msm:flex-col flex-row items-center justify-between ">
                    <div className="msm:w-full  w-1/2 msm:h-30 h-20 flex justify-between items-center py-2 px-2">
                        <Image src="/crown.svg" alt="My Icon" width={60} height={60}
                            className='rounded-full bg-black' />
                        <div className="hidden msm:flex msm:justify-between  msm:w-2/3">
                            <span className='text-lg font-bold'>+92 313 123456 666 ( UAN ) +92 51 123456 111 ( UAN )</span>
                            <span className='text-lg font-bold'>virtualsoft@gmail.com info@virtualsoft.com</span>
                        </div>
                    </div>

                    {/* <hr className='h-1 bg-gray-400 hidden msm:block' /> */}
                    <div className='bg-gray-200 h-0.5 hidden w-full msm:block '></div>


                    <div className="msm:w-full w-2/3  msm:h-30 h-20 flex flex-col msm:flex-row justify-between px-24 py-1 items-center">
                        <ul className='hidden msm:flex text-black cursor-pointer font-bold text-sm gap-10'>
                            <li>Home</li>
                            <li className='flex gap-1 items-center' onClick={() => setIsOpen(!isOpen)}>
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </li>
                            <li className='flex gap-1 items-center' onClick={() => setIsOpen(!isOpen)}>
                                Service
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </li>
                            <li>Gallery</li>
                            <li>Appointment</li>
                            <li>Contact</li>
                        </ul>
                        <div className='flex items-center gap-4 mt-4 msm:mt-0'>
                            <div id="search" className="text-gray-700  hover:text-white font-bold hover:bg-black rounded-lg h-11 w-11 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <button className='bg-black h-11 w-40 px-10 py-2 text-yellow-400 text-lg font-semibold rounded-lg'>
                                Track
                            </button>
                        </div>
                    </div>
                    <button className=' msm:hidden block  h-8  w-6 text-xl font-bold text-gray-800' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>
                </div>
            </div>

        </nav>
    )
}

export default NavBar
