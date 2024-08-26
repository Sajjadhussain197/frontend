"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isService, setIsService] = useState(false)
    const [isHamburger, setIsHamburger] = useState(false)

    const openModal = () => {
        console.log('enter')
        console.log(isOpen)
        setIsOpen((prev) => !prev)
        console.log(isOpen)
    }


    return (

        <nav className=''>
            <div className="  msm:h-40 h-20 text-black bg-white w-full flex msm:flex-col flex-row items-center  msm:mx-auto px-4 msm:px-6">
                <div className="relative msm:w-[78%] w-full flex msm:flex-col flex-row items-center justify-between ">
                    <div className="msm:w-full  w-1/2 msm:h-30 h-20 flex justify-between items-center py-2 px-2">
                        <Image src="/crown.svg" alt="My Icon" width={60} height={60}
                            className='rounded-full bg-black' />
                        <div className="hidden msm:flex msm:justify-between  msm:w-2/3">
                            <span className='text-lg font-bold'>+92 313 123456 666 ( UAN ) +92 51 123456 111 ( UAN )</span>
                            <span className='text-lg font-bold'>virtualsoft@gmail.com info@virtualsoft.com</span>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-0.5 hidden w-full msm:block '></div>


                    <div className="msm:w-full w-2/3  msm:h-30 h-20 flex flex-col msm:flex-row justify-between px-24 py-1 items-center">
                        <ul className='hidden msm:flex text-black cursor-pointer font-bold text-sm gap-10'>
                            <li>Home</li>
                            <li className='flex relative gap-1 items-center'
                                onClick={() => {
                                    setIsService(false)
                                    setIsOpen((prev) => !prev)
                                    
                                }}>
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <ul className={`${isOpen ? 'block' : 'hidden'} flex absolute  top-8 left-0 flex-col w-[240px] bg-white py-4 px-2 z-[50]   rounded-lg `}>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>About ceo <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>History</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>Virtual</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'> Team</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>

                                </ul>

                            </li>
                            <li className='relative flex gap-1 items-center'
                                onClick={() => {
                                    setIsOpen(false)
                                    setIsService(!isService)
                                    }}>
                                Service
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <div className={`${isService ? 'block' : 'hidden'} flex absolute  top-8 -left-60 gap-x-80 min-w-full bg-white py-4 px-2 z-[50] h-[300px]  rounded-lg `}
                                >
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                </div>
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
                    <button className=' msm:hidden block  h-8  w-6 text-xl font-bold text-gray-800'
                        onClick={() => {
                            setIsHamburger(!isHamburger)
                        }}>
                       {isHamburger ? (
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                         className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                       ) :( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>)}
                       
                       


                    </button>
                    <ul className={`${isHamburger ? 'block': 'hidden'} bg-white px-8  py-10 flex flex-col w-screen text-black cursor-pointer font-bold text-sm gap-8 absolute 
                    top-[72px] -left-4 z-[1000] h-screen `}>
                            <li>Home</li>
                            <li className='flex relative gap-1 items-center'
                                onClick={() => {
                                    console.log(isOpen)
                                    setIsOpen((prev) => !prev)
                                    console.log(isOpen)
                                }}>
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <ul className={`${isOpen ? 'block' : 'hidden'} flex absolute  top-8 left-0 flex-col w-[240px] bg-white py-4 px-2 z-[50]   rounded-lg `}>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>About ceo <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>History</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>Virtual</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'> Team</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>
                                    <li className='hover:bg-[#D69A00] hover:rounded-lg py-2 px-2 flex justify-between'>Company History <span className='bg-white rounded-full px-1 items-center text-yellow-600'>ceo</span></li>

                                </ul>

                            </li>
                            <li className='relative flex gap-1 items-center'
                                onClick={() => setIsService(!isService)}>
                                Service
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <div className={`${isService ? 'block' : 'hidden'} flex absolute  top-8 -left-60 gap-x-80 min-w-full bg-white py-4 px-2 z-[50] h-[300px]  rounded-lg `}
                                >
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                    <div >
                                        <h1>heading</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad hic quaerat unde eligendi,

                                        </p>

                                    </div>
                                </div>
                            </li>
                            <li>Gallery</li>
                            <li>Appointment</li>
                            <li>Contact</li>
                    </ul>
                </div>


            </div>


        </nav>

    )
}

export default NavBar
