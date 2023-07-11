import { motion } from "framer-motion"
import useDiscussStore from "@/store/useDiscussStore"

export default function CallToAction(props: any){

    const { openDiscuss } = useDiscussStore((state) => state)

    return (
        <div id="ready?" className="w-full h-full mt-[100px] mobileL:mt-[50px] py-[100px] mobileL:py-[90px] flex flex-col items-center justify-center rounded-t-[100px] bg-gradient-to-b from-[#F0F0F0] to-transparent tabletL:rounded-t-[50px]">
            <h1 className="text-[40px] mobileL:text-[28px] text-center tabletM:text-[30px] mobileS:text-[24px]">Ready to take <br/> your ideas into reality ?</h1>
            <div className="mt-[50px] mobileL:mt-[25px] tabletM:mt-[30px] grid grid-cols-2 gap-4 mobileL:gap-3 mobileM:gap-2">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    onClick={() => openDiscuss()}
                    className="px-[40px] py-[15px] mobileL:px-[30px] mobileM:px-[20px] mobileL:text-[14px] rounded-full bg-[#333333] text-white">
                        Discuss Project
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    onClick={() => window.location.href = "mailto:woicipta@gmail.com"}
                    className="px-[30px] py-[15px] mobileL:px-[30px] mobileM:px-[20px] mobileL:text-[14px] rounded-full bg-[#ECECEC] text-[#333333]">
                        Write Email
                </motion.button>
            </div>
        </div>
    )
}