import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

export default function MobileNavigation(props: any){

    const { setOpenMenu } = props

    const router = useRouter()

    const variants = {
        visible: { 
            opacity: 1,
            transition: {
                // when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        hidden: { 
            opacity: 0,
            transition: {
                // when: "afterChildren"
            }
        },
    }

    const item = {
        visible: { 
            opacity: 1, 
            y: 0,
        },
        hidden: { 
            opacity: 0, 
            y: 200 
        },
    }

    const menus = [
        <Link href="/" className="item">
            <motion.div layout className="w-full h-full p-[15px] px-[30px] border-t flex items-center">
                { router.pathname === '/' ? <motion.div layoutId="ring" className="w-[5px] h-[5px] mr-[25px] bg-black rounded-full"></motion.div> : null }
                <motion.div layout>
                    <h1 className="text-[17px]">Home</h1>
                    <p className="text-[14px] text-black/30">Full Stack Designer</p>
                </motion.div>

            </motion.div>
        </Link>,
        
    ]

    return (
        <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            exit={{ y: 500 }}
            transition={{ duration: 0.4, type: "easeInOut", ease: [0.04, 0.62, 0.23, 0.98] }}
            className="hidden w-full h-fit py-[30px] bg-white rounded-t-[40px] fixed bottom-0 z-30 tabletM:block">

            <div className="px-[30px] flex items-center justify-between">
                <div className="flex items-start">
                    <h1 className="text-[24px] font-medium">Menu</h1>
                    <p className="ml-[15px] mt-[10px] text-[11px] text-[#b8b8b8]">{router.pathname}</p>
                </div>
                <button className="text-[14px] text-black rounded-full" onClick={() => setOpenMenu(false)}>Close</button>
            </div>

            <motion.div initial="hidden" animate="visible" className="w-full h-[80%] mt-[20px] grid grid-cols-1">
                <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.4, delay: 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}>
                    <Link href="/" className="item">
                        <motion.div className="w-full h-full p-[15px] px-[30px] border-t flex items-center">
                            { router.pathname === '/' ? <motion.div layoutId="ring" className="w-[5px] h-[5px] mr-[25px] bg-black rounded-full"></motion.div> : null }
                            <motion.div layout>
                                <h1 className="text-[17px]">Home</h1>
                                <p className="text-[14px] text-black/30">Full Stack Designer</p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </motion.div>
                
                <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.4, delay: 0.15, ease: [0.04, 0.62, 0.23, 0.98] }}>
                    <Link href="/timeline" className="item">
                        <motion.div className="w-full h-full p-[15px] px-[30px] border-t flex items-center">
                            { router.pathname === '/timeline' ? <motion.div layoutId="ring" className="w-[5px] h-[5px] mr-[25px] bg-black rounded-full"></motion.div> : null }
                            <motion.div layout>
                                <h1 className="text-[17px]">Timeline</h1>
                                <p className="text-[14px] text-black/30">3 Years, 7 Threads</p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </motion.div>

                <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.4, delay: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}>
                    <Link href="/works" className="item">
                        <motion.div className="w-full h-full p-[15px] px-[30px] border-t flex items-center">
                            { router.pathname === '/works' ? <motion.div layoutId="ring" className="w-[5px] h-[5px] mr-[25px] bg-black rounded-full"></motion.div> : null }
                            <motion.div layout>
                                <h1 className="text-[17px]">Works</h1>
                                <p className="text-[14px] text-black/30">2 Works</p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </motion.div>

                <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.4, delay: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}>
                    <Link href="/about" className="item">
                        <motion.div className="w-full h-full p-[15px] px-[30px] border-t border-b flex items-center">
                            { router.pathname === '/about' ? <motion.div layoutId="ring" className="w-[5px] h-[5px] mr-[25px] bg-black rounded-full"></motion.div> : null }
                            <motion.div layout>
                                <h1 className="text-[17px]">About</h1>
                                <p className="text-[14px] text-black/30">The story of my life</p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}