import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SlidingCards from "./components/SlidingCards";
import ApplicationCenters from "./components/ApplicationCenters";
import Footer from "./components/Footer";
import { CanvasBackground } from "./components/CanvasBackground";

export default function Home() {
  return (
        <main className="overflow-x-hidden">
          <NavBar/>
          <Hero/>
          <SlidingCards />
          <ApplicationCenters/>
          <CanvasBackground/>
          <Footer/>
        </main>
  );
}
