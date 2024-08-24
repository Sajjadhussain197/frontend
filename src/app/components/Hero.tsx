"use client";
import React, { useState, useEffect } from 'react';

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
        <section className="text-gray-600 body-font">
            <div className="flex px-2 h-[700px] flex-col items-center msm:w-full">
                <div className="relative w-full h-full">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`slide-${index}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-5000 ${
                                currentImage === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                    {/* Gradient Overlay */}
                    <div className="absolute  inset-0  bg-gradient-to-b from-transparent to-white opacity-300"></div>

                    <div className="absolute inset-0 flex flex-col justify-center left-60 items-start text-black">
                        <h1 className={`text-4xl translate translate-y-0  duration-3000 font-bold duration-3000 ${showText[0] ? 'opacity-100' : 'opacity-0'}`}>
                           Lorem ipsum dolor
                            
                        </h1>
                        <h2 className={`text-2xl transition-opacity duration-2000 ${showText[1] ? 'opacity-100' : 'opacity-0'}`}>
                        sit amet consectetur adipisicing elit. Libero molestias quod,
                        </h2>
                        <h3 className={`text-xl transition-opacity duration-2000 ${showText[2] ? 'opacity-100' : 'opacity-0'}`}>
                        a, ducimus laudantium minima voluptatum eum, provident perspiciatis non modi aspernatur molestiae
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
