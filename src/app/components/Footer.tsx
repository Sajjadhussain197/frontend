import React from 'react'

const Footer = () => {
  return (
    <footer className='h-auto w-full bg-black p-10 justify-center '>
      <div className="flex flex-col  justify-center mx-auto container gap-6">
        <div className="flex flex-col bg-red w-full">
          <h1 className='text-yellow-500 text-lg font-semibold'>Crown International Travels (Pvt) Ltd</h1>
        </div>
        <div className='flex flex-col msm:flex-row h-auto msm:h-80 max-w-7xl gap-3 '>
          <div className='h-full w-full msm:w-1/3 bg-yellow-400 hover:bg-yellow-600 text-black rounded-lg flex flex-col gap-3 p-3'>
            <h1 className=' text-lg font-semibold'>Rawalpindi Head Office</h1>
            <p className='text-sm font-light'>Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan</p>
            <h1 className=' text-lg font-semibold'>Phone Number</h1>
            <p className='flex flex-col'>
             <span> +92 12 111 123 111 </span>
             <span> +92 12 111 123 111 </span>
             <span> +92 12 111 123 111 </span>
             </p>
            <h1 className=' text-lg font-semibold'>Location</h1>
            <a href="#">abc.com</a>
          </div>
          <div className='h-full w-full msm:w-1/3 bg-yellow-400 hover:bg-yellow-600 text-black rounded-lg flex flex-col gap-3 p-3'>
            <h1 className=' text-lg font-semibold'>Rawalpindi Head Office</h1>
            <p className='text-sm font-light'>Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan</p>
            <h1 className=' text-lg font-semibold'>Phone Number</h1>
            <p className='flex flex-col'>
             <span> +92 12 111 123 111 </span>
             <span> +92 12 111 123 111 </span>
             <span> +92 12 111 123 111 </span>
             </p>
            <h1 className=' text-lg font-semibold'>Location</h1>
            <a href="#">abc.com</a>
          </div>
          <div className='h-full msm:w-1/2 gap-4 text-yellow-400 msm:ml-10 flex flex-col msm:flex-row  msm:gap-10'>
            <div className="flex flex-col msm:w-1/2 w-full  msm:pl-16 text-start gap-3">
              <h1 className=' text-lg font-bold text-yellow-500'>We offer</h1>
              <span className='whit'>Our Company</span>

              <span>Our team</span>
            </div>
            <div className="flex flex-col w-full msm:1/2 gap-3 msm:pl-20">
              <h1 className=' text-lg font-bold text-yellow-500'>About us</h1>
              <span>Our Ceo</span>
              <span>Our Company</span>
              <span>Our team</span>
              <span>Our team</span>
            </div>
          </div>
        </div>
        <hr
          className="w-full h-[3px] bg-none border-0"
          style={{
            backgroundImage: "linear-gradient(to right, black, white, black)",
          }}
        />

        <div className='flex gap-2 justify-between text-yellow-500 flex-col msm:flex-row'>
          <div className='flex'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            </div>
          <div>
            <span>© 2022. Copyright. All rights reserved.</span>
     
            </div>
          <div className=' flex text-white gap-3  justify-center '>
          <span className='h-8 w-8 rounded-full bg-white flex items-center justify-center'>
            <img src="/fb.svg" alt="icon" /></span>
          <span className='h-8 w-8 bg-gradient-to-br from-gradient-purple to-gradient-pink shadow-lg group text-white rounded-full p-1'>
            <img src="/insta.svg" alt="icon" /></span>
          <span className='h-8 w-8 bg-white group hover:bg-black shadow-lg rounded-full p-1 hover:text-white'>
            <img src="/x.svg" alt="icon" /></span>
          <span className='h-8 w-8 bg-white group hover:bg-blue-800 shadow-lg rounded-full p-1 items-center jus"'>
            <img src="/linkdin.svg" alt="icon" /></span>
           
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
