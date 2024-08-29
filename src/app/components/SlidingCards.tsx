"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const pics = [
  { src: '/pic.jpeg', title: 'pic' },
  { src: '/pic2.jpeg', title: 'pic2' },
  { src: '/pic.jpeg', title: 'pic' },
  { src: '/pic2.jpeg', title: 'pic2' },
  { src: '/pic.jpeg', title: 'pic' },
  { src: '/pic2.jpeg', title: 'pic' },
  { src: '/pic.jpeg', title: 'pic' },
  { src: '/pic2.jpeg', title: 'pic2' },
  { src: '/pic.jpeg', title: 'pic' },
  { src: '/pic2.jpeg', title: 'pic2' },
  { src: '/pic.jpeg', title: 'pic' },
  { src: '/pic2.jpeg', title: 'pic' },
  
];


const SlidingCards = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="companies-line-group" className="flex flex-col max-w-7xl mx-auto  gap-4 font-myfont">
      {/* Line 1 */}
      <div className="overflow-x-hidden">
        <div
          id="line1"
          className={`flex w-max gap-4  ${
            scrollDirection === 'down' ? 'animate-slide-left' : 'animate-slide-right'
          }`}
        >  {[...pics, ...pics].map((item, i) => (
          <Card key={i} imgSrc={item.src}  />
        ))}
        </div>
      </div>

      {/* Line 2 */}
      <div className="overflow-x-hidden">
        <div
          id="line2"
          className={`flex w-max gap-4  ${
            scrollDirection === 'down' ? 'animate-slide-right' : 'animate-slide-left'
          }`}
        >
          {[...pics, ...pics].map((item, i) => (
            <Card key={i} imgSrc={item.src}  />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  imgSrc: string;
  title: string;
}

// Card component for rendering each card
const Card: React.FC<CardProps> = ({ imgSrc }) => {
  return (
    <div className="flex flex-col min-h-24 min-w-24 bg-white justify-center items-center rounded-xl border bottom-0.5 border-yellow-300 md:min-h-32 md:min-w-32">
      <Image
        src={imgSrc}
        alt={"img"}
        width={64}
        height={64}
        className="h-12 w-12 md:h-16 md:w-16"
      />
      
    </div>
  );
};

export default SlidingCards;
