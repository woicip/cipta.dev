import Image from "next/image";
import { DownloadIcon, GithubIcon, TwitterIcon } from "lucide-react";
import { PropsWithChildren } from "react";

// Assets
import ciptaLogo from "@/assets/cipta-emblem-black.webp"
import Link from "next/link";

function Button(props: PropsWithChildren){
  return (
    <button type="button" className="py-[11px] px-[15px] flex items-center gap-[10px] bg-[#EAEAEA] font-medium text-[#333] rounded-[16px] cursor-pointer hover:bg-[#333] hover:text-white transition-all">
      {props.children}
    </button>
  )
}

export default function Home() {
  return (
    <main className="w-screen h-screen py-[60px] flex flex-col items-center justify-between">
      <div>
        <Image src={ciptaLogo} alt="logo" className="w-[20px] h-[20px] text-black" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[20px]">
        <div className="w-fit py-[4px] px-[10px] rounded-full bg-[#CEF62F] font-medium">
          Design is Underway
        </div>

        <div className="flex flex-col gap-[0px] items-center justify-between">
          <h1 className="w-full text-[#191919] text-[50px] leading-tight font-bold text-left relative">Full Stack Developer</h1>
          <h1 className="w-full text-[#B8B8B8] text-[50px] leading-tight font-semibold text-right relative left-[50px]">UI/UX Designer</h1>
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        <Button>
          <DownloadIcon />
          Resume
        </Button>
        <Link href="https://github.com/woicip" target="_blank">
          <Button>
            <GithubIcon />
          </Button>
        </Link>
        <Link href="https://x.com/voidcip" target="_blank">
          <Button>
            <TwitterIcon />
          </Button>
        </Link>
      </div>
    </main>
  );
}
