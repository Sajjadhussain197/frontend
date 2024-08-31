'use client'

import { useEffect, useState, useRef } from 'react'

const Hero = () => {
    
    const images = ['/slid1.jpeg', '/slide2.jpeg', '/slid1.jpeg'];
    const [currentImage, setCurrentImage] = useState(0);
    const [showText, setShowText] = useState([false, false, false]);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setShowText([false, false, false]); // Reset text visibility
        }, 8000); // Adjusted to slow down the image change

        const textTimeouts = [
            setTimeout(() => setShowText([true, false, false]), 1000),
            setTimeout(() => setShowText([true, true, false]), 3000),
            setTimeout(() => setShowText([true, true, true]), 4000),
        ];

        return () => {
            clearInterval(imageInterval);
            textTimeouts.forEach(clearTimeout);
        };
    }, [currentImage]);

    return (
        <section className="text-gray-600 body-font relative z-10">
    <div className="flex  h-[700px] flex-col  items-center w-full">
        <div className="relative w-full h-full">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`slide-${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-40000 ${
                        currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0"></div>

            <div className="absolute flex flex-col justify-center msm:left-60 left-10   gap-4
            top-20 msm:top-10 items-start text-black z-10 msm:inset-0 w-[80%]">
               
                <h2 className={`msm:text-lg text-sm translate translate-y-0 msm:font-bold font-semibold duration-3000 ${showText[0] ? 'opacity-100' : 'opacity-0'}`}>
                   Lorem ipsum dolor
                </h2>
                <h1 className={`text-4xl transition-opacity duration-3000 ${showText[1] ? 'opacity-100' : 'opacity-0'}`}>
                Country Name
                </h1>
                <h3 className={`text-xl transition-opacity  duration-3000 ${showText[2] ? 'opacity-100' : 'opacity-0'}`}>
                a, ducimus laudantium minima voluptatum eum, provident 
                </h3>
            </div>
        </div>
    </div>
</section>

       
    );
};

export default Hero;
