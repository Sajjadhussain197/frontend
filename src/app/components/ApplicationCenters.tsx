import React from 'react'

const ApplicationCenters = () => {
    return (
        <div className='flex flex-col mx-auto max-w-7xl msm:flex-row items-center py-2'>
            <div id="left" className="flex flex-col gap-4 w-1/3 bg-white text-black">
                <h1 className='text-4xl font-bold '>We Have Authorized Embassy Visa Application Centre</h1>
                <hr className='bg-yellow-600 h-1  max-w-[70%]' />
                <h2>Go beyond your imagination</h2>
                <div id="buttons" className='flex gap-2'>
                    <span className='p-2 bg-slate-400 rounded-lg '>left</span>
                    <span className='p-2 bg-slate-400 rounded-lg '>right</span>

                </div>
            </div>
            <div id="right" className="flex w-2/3 mt-5">
                <div className="relative w-full max-w-[330px] h-[450px]   rounded-xl shadow-lg">
                    <img className="w-full h-full object-fit rounded-lg" src="/cardpic.jpeg" alt="Vietnam landscape" />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-lg px-3 py-1">Visa Application Centre</span>
                    <div className="absolute  -bottom-14 left-0 right-0 p-4 max-w-xs mx-auto">
                        <div className=" relative bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-lg p-4">

                            <h2 className="text-lg font-bold">VIETNAM VISA</h2>
                            <p className="text-sm">Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to...</p>
                            <div className="absolute -top-6 -right-2 bg-white rounded-full p-2 shadow-lg">
                            <img src="/luxembourg.jpeg" className='rounded-full h-14 w-14' alt="Vietnam Flag" />
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationCenters
