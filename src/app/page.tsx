import Image from "next/image";
import { DownloadIcon, GithubIcon, TwitterIcon } from "lucide-react";
import { PropsWithChildren } from "react";

// Assets
import ciptaLogo from "@/assets/cipta-emblem-black.webp";
import Link from "next/link";

function Button(props: PropsWithChildren) {
  return (
    <button
      type="button"
      className="py-[11px] px-[15px] flex items-center gap-[10px] bg-[#EAEAEA] font-medium text-[#333] rounded-[16px] cursor-pointer hover:bg-[#333] hover:text-white transition-all"
    >
      {props.children}
    </button>
  );
}

export default function Home() {
  return (
    <main className="w-screen h-screen tabletL:px-[20px] py-[60px] tablet:pt-[40px] flex flex-col items-center justify-between">
      <div>
        <Image
          src={ciptaLogo}
          alt="logo"
          className="w-[20px] h-[20px] text-black"
        />
      </div>

      <div className="tablet:w-full flex flex-col items-center justify-center gap-[20px] tablet:gap-[10px]">
        <div className="w-fit py-[4px] px-[10px] text-[15px] tabletM:text-[12px] rounded-full bg-[#CEF62F] font-semibold">
          Design is Underway
        </div>

        <div className="w-full flex flex-col gap-[0px] items-center justify-center">
          <h1 className="w-full text-[#191919] text-[50px] mobileL:text-3xl leading-tight font-bold relative left-0">
            Full Stack Developer
          </h1>
          <h1 className="w-full text-[#B8B8B8] text-[50px] mobileL:text-3xl leading-tight font-semibold text-right relative left-[50px] tablet:left-0">
            UI/UX Designer
          </h1>
        </div>
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
      </div>
    </main>
  );
}
