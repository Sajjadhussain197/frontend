"use client";
import Image from "next/image";
const extendPicsArray = (array, times) => {
  let extendedArray = [];
  for (let i = 0; i < times; i++) {
    extendedArray = [...extendedArray, ...array];
  }
  return extendedArray;
};

const pics = [
  { src: '/pic1.jpeg', title: 'pic1' },
  { src: '/pic2.jpeg', title: 'pic2' },
  { src: '/pic1.jpeg', title: 'pic1' },
  { src: '/pic2.jpeg', title: 'pic2' },
  { src: '/pic1.jpeg', title: 'pic1' },
  { src: '/pic2.jpeg', title: 'pic2' },
];

const extendedPics = extendPicsArray(pics, 10);

const SlidingCards = () => {
  return (
    <div id="companies-line-group" className="flex flex-col gap-4 font-myfont">
      {/* Line 1 */}
      <div className="overflow-x-hidden">
        <div id="line1" className="flex w-max gap-4 animate-slideRight">
          {pics.map((item, i) => (
            <Card key={i} imgSrc={item.src} title={item.title} />
          ))}
        </div>
      </div>

      {/* Line 2 */}
      <div className="overflow-x-hidden">
        <div id="line2" className="flex w-max gap-4 animate-slideLeft">
          {pics.map((item, i) => (
            <Card key={i} imgSrc={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Card component for rendering each card
const Card = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col min-h-24 min-w-24 bg-white justify-center items-center rounded-xl border border-yellow-400 md:min-h-32 md:min-w-32">
      <Image
        src={imgSrc}
        alt={title}
        width={64}
        height={64}
        className="h-12 w-12 md:h-16 md:w-16"
      />
      <span className="font-semibold text-[12px] md:text-[16px] font-myfont">
        {title}
      </span>
    </div>
  );
};

export default SlidingCards;
