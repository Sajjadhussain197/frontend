"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { div } from "three/webgpu";
import { HoverGrid } from "./HoverGrid";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasBackground() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center min-w-screen  dark:bg-black w-full gap-4">
        <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-screen w-full mx-auto p-4 relative h-auto ">
         
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [255, 255, 0],
                  [255, 255, 0],
                //   [232, 121, 249],
                ]}
                dotSize={2}
              />
            </div>
          </AnimatePresence>
          <div className="relative z-20">
          <HoverGrid />
           
          </div>
        </div>
      </div>
    </>
  );
}
