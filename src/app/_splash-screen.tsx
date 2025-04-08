"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {
        isOpen && (
          <motion.div
            className="w-screen h-0 bg-white fixed left-0 bottom-0 z-50"
            initial={{ height: "100vh" }}
            animate={{
              transition: {
                duration: 1,
                delay: 2,
                ease: [0.48, 0.15, 0.25, 0.96],
              },
              height: "0vh",
            }}
            exit={{
              height: "0vh",
              transition: {
                duration: 1,
                ease: [0.48, 0.15, 0.25, 0.96]
              }
            }}
          >
            <div className="w-screen h-screen flex items-center justify-center">
              <div className="w-fit flex flex-col gap-[0px] items-center justify-center">
                <motion.h1
                  initial={{ translateY: "100px", opacity: 0 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: {
                      ease: [0.48, 0.15, 0.25, 0.96],
                      duration: .5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: "100px",
                    transition: {
                      ease: [0.48, 0.15, 0.25, 0.96],
                    }
                  }}
                  className="w-full text-[#191919] text-[50px] mobileL:text-3xl leading-tight font-bold relative left-0"
                >
                  Passionate Developer
                </motion.h1>
      
                <motion.h1 
                  initial={{ translateY: "100px", opacity: 0 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: {
                      delay: .3,
                      ease: [0.48, 0.15, 0.25, 0.96],
                      duration: .5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: "150px",
                    transition: {
                      ease: [0.48, 0.15, 0.25, 0.96],
                    }
                  }}
                  className="w-full text-[#B8B8B8] text-[50px] mobileL:text-3xl leading-tight font-semibold text-right relative left-[50px] tablet:left-0"
                >
                  UI/UX Designer
                </motion.h1>
              </div>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
}
