import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SlidingCards from "./components/SlidingCards";
import { HoverEffect } from "./components/ui/CardHoverEffect";
import { HoverGrid } from "./components/HoverGrid";
import ApplicationCenters from "./components/ApplicationCenters";

export default function Home() {
  return (
        <main>
          <NavBar/>
          <Hero/>
          <SlidingCards />
          <ApplicationCenters/>
          <HoverGrid />

      <div className="mt-96 bg-red"> hello</div>
        </main>
  );
}
