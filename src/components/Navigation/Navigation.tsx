import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// assets
import logo from '@/assets/icons/cipta-logo-black.svg'
import { useState } from 'react';
import { useRouter } from 'next/router';

function Menu(props: any){

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <motion.ul 
            layout 
            style={{ textUnderlineOffset: isOpen ? "1px" : "" }} 
            className='inline-block'
            onClick={() => setIsOpen(true)}>
            <Link href="/" className="text-[14px] mr-[70px]">{props.children}</Link>
        </motion.ul>
    )
}

export default function Navigation(props: any){

    const router = useRouter()

    return (
        <div className="w-full py-[30px] px-[300px] laptopM:px-[100px] flex items-center justify-between bg-gradient-to-b from-white to-transparent fixed top-0 z-[100]">
            <Link href="/">
                <Image src={logo} alt="logo" />
            </Link>

            <motion.div className="flex items-center">
                <div className="w-fit block mr-[70px]">
                    <Link href="/" className="w-full text-[14px]">Home</Link>
                    { router.pathname === '/' ? <motion.div layoutId='underline' className="w-full h-[1px] bg-[#333333]"></motion.div> : <div className="h-[1px] bg-transparent"></div> }
                </div>

                <div className="w-fit block mr-[70px]">
                    <Link href="/timeline" className="text-[14px]">Timeline</Link>  
                    { router.pathname === '/timeline' ? <motion.div layoutId='underline' className="w-full h-[1px] bg-[#333333]"></motion.div> : <div className="h-[1px] bg-transparent"></div> }
                </div>

                <div className="w-fit block mr-[70px]">
                    <Link href="/works" className="text-[14px]">Works</Link>
                    { router.pathname === '/works' ? <motion.div layoutId='underline' className="w-full h-[1px] bg-[#333333]"></motion.div> : <div className="h-[1px] bg-transparent"></div> }
                </div>

                <div className='w-fit block'>
                    <Link href="/about" className="text-[14px]">About</Link>
                    { router.pathname === '/about' ? <motion.div layoutId='underline' className="w-full h-[1px] bg-[#333333]"></motion.div> : <div className="h-[1px] bg-transparent"></div> }
                </div>
            </motion.div>
        </div>
    )
}