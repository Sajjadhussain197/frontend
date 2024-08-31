import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SlidingCards from "./components/SlidingCards";
import { HoverEffect } from "./components/ui/CardHoverEffect";
import { HoverGrid } from "./components/HoverGrid";
import ApplicationCenters from "./components/ApplicationCenters";
import Footer from "./components/Footer";

export default function Home() {
  return (
        <main className="overflow-x-hidden">
          <NavBar/>
          <Hero/>
          <SlidingCards />
          <ApplicationCenters/>
          <HoverGrid />
          <Footer/>
        </main>
  );
}
