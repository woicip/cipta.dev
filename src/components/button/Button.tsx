'use client'

import { PropsWithChildren, useContext, useMemo } from "react";
import { motion } from "motion/react"
import './Button.style.css'
import { AppearanceContext } from "@/context/appearance.context";
import classNames from "classnames";

export function Button(props: PropsWithChildren) {
  const appearance = useContext(AppearanceContext)

  const btnStyle = useMemo(() => {
    return classNames('py-[11px] px-[15px] flex items-center gap-[10px] font-medium rounded-[16px] cursor-pointer transition-all', appearance.mode === 'light' ? 'bg-[#FFF] text-[#333] hover:bg-[#333] hover:text-white' : 'bg-[#353535] text-[#DDDDDD] hover:bg-[#FFF] hover:text-[#333]')
  }, [appearance.mode])

  return (
    <motion.div
      whileHover={{ 
        scale: 1.2,
        transition: {
          duration: .01
        },
        zIndex: 100
      }}
      whileTap={{ 
        scale: 0.8,
        transition: {
          duration: .01
        }
      }}
      animate={{
        transition: {
          duration: .1
        }
      }}
      id="c-btn"
      unselectable="on"
      className={btnStyle}
    >
      {props.children}
    </motion.div>
  );
}