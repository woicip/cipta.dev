import Link from "next/link"
import { motion } from "framer-motion"

export default function MobileNavigation(props: any){

    const { setOpenMenu } = props

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

    return (
        <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            exit={{ y: 500 }}
            transition={{ duration: 0.4, type: "easeInOut", ease: [0.04, 0.62, 0.23, 0.98] }}
            className="hidden w-full h-fit py-[30px] bg-white rounded-t-[40px] fixed bottom-0 z-30 tabletM:block">

            <div className="px-[30px] flex items-center justify-between">
                <h1 className="text-[24px] font-medium">Menu</h1>
                <button className="text-[14px] text-black rounded-full" onClick={() => setOpenMenu(false)}>Close</button>
            </div>

            <motion.div 
                initial="hidden"
                animate="visible" 
                variants={variants} className="w-full h-[80%] mt-[20px] grid grid-cols-1">
                <Link href="/" onClick={() => setOpenMenu(false)}>
                    <motion.div variants={item} className="w-full h-full p-[15px] px-[30px] border-t">
                        <h1 className="text-[17px]">Home</h1>
                        <p className="text-[14px] text-black/30">Full Stack Designer</p>
                    </motion.div>
                </Link>
                
                <Link href="/timeline" onClick={() => setOpenMenu(false)}>
                    <motion.div variants={item} className="w-full h-full p-[15px] px-[30px] border-t">
                        <h1 className="text-[17px]">Timeline</h1>
                        <p className="text-[14px] text-black/30">3 Years, 7 Threads</p>
                    </motion.div>
                </Link>

                <Link href="/works" onClick={() => setOpenMenu(false)}>
                    <motion.div variants={item} className="w-full h-full p-[15px] px-[30px] border-t">
                        <h1 className="text-[17px]">Works</h1>
                        <p className="text-[14px] text-black/30">2 Works</p>
                    </motion.div>
                </Link>

                <Link href="/about" onClick={() => setOpenMenu(false)}>
                    <motion.div variants={item} className="w-full h-full p-[15px] px-[30px] border-t border-b">
                        <h1 className="text-[17px]">About</h1>
                        <p className="text-[14px] text-black/30">The story of my life</p>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
    )
}