import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SlidingCards from "./components/SlidingCards";

export default function Home() {
  return (
        <main>
          <NavBar/>
          <Hero/>
          <SlidingCards />
      <div className="mt-96 bg-red"> hello</div>
        </main>
  );
}
