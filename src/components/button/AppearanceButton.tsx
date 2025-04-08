"use client";

import classNames from "classnames";
import { motion } from "motion/react";

export type TAppearanceButton = {
  appearance: string;
  onClick: () => void;
};

export function AppearanceButton(props: TAppearanceButton) {
  const btnStyle = classNames(
    "w-[70px] h-[40px] px-[10px] rounded-full flex items-center cursor-pointer transition-all",
    props.appearance === "dark" ? "justify-end bg-[#353535]" : "justify-start bg-[#222222]"
  );

  const indicatorStyle = classNames(
    "w-[25px] h-[25px] rounded-full transition-all",
    props.appearance === "dark" ? "bg-[#CEF62F]" : "bg-[#FFFFFF]"
  );

  const onBtnClick = () => {
    props.onClick();
  };

  return (
    <button onClick={onBtnClick} className={btnStyle}>
      <motion.div
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        <div className={indicatorStyle}></div>
      </motion.div>
    </button>
  );
}
