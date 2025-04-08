"use client";

import { motion } from "motion/react";
import { FocusPoint } from "@/app/_focus-point";
import { AppearanceContext } from "@/context/appearance.context";
import { useState } from "react";
import { DownloadIcon, GithubIcon, TwitterIcon } from "lucide-react";
import classNames from "classnames";
import Link from "next/link";

// Assets
import { CiptaLogo } from "@/assets/icons/cipta-logo";

// Components
import { Button } from "../button/Button";
import { AppearanceButton } from "../button/AppearanceButton";

export function HomeContainer() {
  const [appearance, setAppearance] = useState<"light" | "dark">("light");

  const homeStyle = classNames(
    "w-screen h-screen tabletL:px-[20px] py-[60px] tablet:pt-[40px] flex flex-col items-center justify-between transition-all",
    appearance === "light" ? "bg-[#F4F4F5]" : "bg-[#222222]"
  );

  const logoStyle = classNames("transition-all", appearance === 'light' ? 'fill-black' : 'fill-white')

  return (
    <AppearanceContext.Provider value={{ mode: appearance }}>
      <motion.div className={homeStyle}>
        <div>
          <CiptaLogo className={logoStyle} />
        </div>

        <div className="tablet:w-full flex flex-col items-center justify-center gap-[20px] tablet:gap-[10px]">
          <div className="w-fit py-[4px] px-[10px] text-[15px] tabletM:text-[12px] rounded-full bg-[#CEF62F] font-semibold">
            Design is Underway
          </div>

          <FocusPoint />
        </div>

        <div className="flex items-center gap-[10px]">
          <Button>
            <DownloadIcon className="mobileL:w-[20px] h-[20px]" />
            <span className="mobileL:text-[15px] font-medium">Resume</span>
          </Button>
          <Link href="https://github.com/woicip" target="_blank">
            <Button>
              <GithubIcon className="mobileL:w-[20px] h-[20px]" />
            </Button>
          </Link>
          <Link href="https://x.com/voidcip" target="_blank">
            <Button>
              <TwitterIcon className="mobileL:w-[20px] h-[20px]" />
            </Button>
          </Link>

          <AppearanceButton
            appearance={appearance}
            onClick={() => {
              appearance === "dark"
                ? setAppearance("light")
                : setAppearance("dark");
            }}
          />
        </div>
      </motion.div>
    </AppearanceContext.Provider>
  );
}
