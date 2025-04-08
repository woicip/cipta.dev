"use client";
import { AppearanceContext } from "@/context/appearance.context";
import classNames from "classnames";
import { motion } from "motion/react";
import { useContext, useMemo } from "react";

export function FocusPoint(){
  const appearance = useContext(AppearanceContext)

  const passionateStyle = useMemo(() => {
    return classNames("w-full text-[50px] mobileL:text-3xl leading-tight font-bold relative left-0 transition-all", appearance.mode === 'light' ? 'text-[#191919]' : 'text-white')
  }, [appearance.mode]) 

  return (
    <div className="w-full flex flex-col gap-[0px] items-center justify-center">
      <motion.h1 layoutId="passionatedev" className={passionateStyle}>
        Passionate Developer
      </motion.h1>
      
      <motion.h1 className="w-full text-[#B8B8B8] text-[50px] mobileL:text-3xl leading-tight font-semibold text-right relative left-[50px] tablet:left-0">
        Design when needed
      </motion.h1>
    </div>
  )
}