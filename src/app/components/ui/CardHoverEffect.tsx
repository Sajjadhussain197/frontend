"use client"
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Define the cn function (commonly used with tailwind-merge)
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getRowItems = (rowIndex: number) => {
    const startIndex = rowIndex * 3;
    return items.slice(startIndex, startIndex + 3);
  };

  return (
    <div className={cn("space-y-8", className)}>
      {[0, 1, 2].map((rowIndex) => (
        <AnimatedRow key={rowIndex}>
          <div className="grid grid-cols-1 msm:grid-cols-3 ">
            {getRowItems(rowIndex).map((item, idx) => (
              <Link
                href={item?.link}
                key={item?.link}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(rowIndex * 3 + idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === rowIndex * 3 + idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-300 to-yellow-500 block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Link>
            ))}
          </div>
        </AnimatedRow>
      ))}
    </div>
  );
};

const AnimatedRow = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const rowRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);
  
  useEffect(() => {
    hasMounted.current = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (hasMounted.current) {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } });
          } else {
            controls.start({ opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeIn" } });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
   <div className="h-full w-full pt-1 bg-yellow-600 rounded-2xl">
     <div
      className={cn(
        "rounded-xl h-full w-full p-4 overflow-hidden bg-white border border-yellow-200 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <AnimatedCardContent>{children}</AnimatedCardContent>
    </div>
   </div>
  );
};

const AnimatedCardContent = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (hasMounted.current) {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeIn",
          },
        },
      }}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </motion.div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// import { cn } from "@/app/lib/utils";
// import { AnimatePresence, motion, useAnimation } from "framer-motion";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     title: string;
//     description: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const getRowItems = (rowIndex: number) => {
//     const startIndex = rowIndex * 3;
//     return items.slice(startIndex, startIndex + 3);
//   };

//   return (
//     <div className={cn("space-y-8", className)}>
//       {[0, 1, 2].map((rowIndex) => (
//         <AnimatedRow key={rowIndex}>
//           <div className="grid grid-cols-1 msm:grid-cols-3">
//             {getRowItems(rowIndex).map((item, idx) => (
//               <Link
//                 href={item?.link}
//                 key={item?.link}
//                 className="relative group block p-2 h-full w-full"
//                 onMouseEnter={() => setHoveredIndex(rowIndex * 3 + idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <AnimatePresence>
//                   {hoveredIndex === rowIndex * 3 + idx && (
//                     <motion.span
//                       className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-300 to-yellow-500 block rounded-3xl"
//                       layoutId="hoverBackground"
//                       initial={{ opacity: 0 }}
//                       animate={{
//                         opacity: 1,
//                         transition: { duration: 0.15 },
//                       }}
//                       exit={{
//                         opacity: 0,
//                         transition: { duration: 0.15, delay: 0.2 },
//                       }}
//                     />
//                   )}
//                 </AnimatePresence>
//                 <Card>
//                   <CardTitle>{item.title}</CardTitle>
//                   <CardDescription>{item.description}</CardDescription>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </AnimatedRow>
//       ))}
//     </div>
//   );
// };

// const AnimatedRow = ({ children }: { children: React.ReactNode }) => {
//   const controls = useAnimation();
//   const rowRef = useRef<HTMLDivElement>(null);
//   const hasMounted = useRef(false);
//   useEffect(() => {
//      hasMounted.current = true;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (hasMounted.current) {
//         if (entry.isIntersecting) {
//           controls.start({ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } });
//         } else {
//           controls.start({ opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeIn" } });
//         }
//       }
//       },
//       { threshold: 0.1 }
//     );

//     if (rowRef.current) {
//       observer.observe(rowRef.current);
//     }

//     return () => {
//       if (rowRef.current) {
//         observer.unobserve(rowRef.current);
//       }
//     };
//   }, [controls]);

//   return (
//     <motion.div
//       ref={rowRef}
//       initial={{ opacity: 0, x: -50 }}
//       animate={controls}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//    <div className="h-full w-full pt-1 bg-yellow-600 rounded-2xl">
//      <div
//       className={cn(
//         "rounded-xl h-full w-full p-4 overflow-hidden bg-white border border-yellow-200 dark:border-white/[0.2]  group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-2">{children}</div>
//       </div>
//     </div>
//    </div>
//   );
// };

// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };

// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };