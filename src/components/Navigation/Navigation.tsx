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

    const { openMenu, setOpenMenu } = props;

    return (
        <div className="w-full py-[30px] px-[300px] laptopM:px-[100px] laptopL:px-[100px] screen-1670px:px-[200px] screen-1170px:px-[300px] laptopS:px-[50px] laptop:px-[50px] tabletM:px-[30px] mobileL:px-[20px] flex items-center justify-between bg-gradient-to-b from-white to-transparent fixed top-0 z-[10]">
            <Link href="/" className="">
                <Image src={logo} alt="logo" />
            </Link>

            <button className="hidden tabletM:block text-[14px]" onClick={() => setOpenMenu(!openMenu)}>Menu</button>

            <motion.div className="flex items-center tabletM:hidden">
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