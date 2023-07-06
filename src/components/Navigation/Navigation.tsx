import Image from 'next/image';
import Link from 'next/link';

// assets
import logo from '@/assets/icons/cipta-logo-black.svg'

export default function Navigation(props: any){
    return (
        <div className="w-full py-[30px] px-[300px] flex items-center justify-between bg-gradient-to-b from-white to-transparent fixed top-0 z-[100]">
            <Image src={logo} alt="logo" />

            <div>
                <Link href="/timeline" className="text-[14px] mr-[70px]">Timeline</Link>
                <Link href="/works" className="text-[14px] mr-[70px]">Works</Link>
                <Link href="/about" className="text-[14px]">About</Link>
            </div>
        </div>
    )
}