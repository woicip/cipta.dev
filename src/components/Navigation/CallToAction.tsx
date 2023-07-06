import { motion } from "framer-motion"

export default function CallToAction(props: any){
    return (
        <div id="ready?" className="w-full h-full mt-[100px] py-[150px] flex flex-col items-center justify-center rounded-t-[100px] bg-gradient-to-b from-[#F0F0F0] to-transparent">
            <h1 className="text-[40px] text-center">Ready to take <br/> your ideas into reality ?</h1>
            <div className="mt-[50px] grid grid-cols-2 gap-4">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="px-[40px] py-[15px] rounded-full bg-[#333333] text-white">
                        Discuss Project
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="px-[30px] py-[15px] rounded-full bg-[#ECECEC] text-[#333333]">
                        Write Email
                </motion.button>
            </div>
        </div>
    )
}