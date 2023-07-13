import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useDiscussStore from "@/store/useDiscussStore";

// assets
import whatsapp from '@/assets/social/whatsapp.svg'
import imessage from '@/assets/social/imessage.svg'
import telegram from '@/assets/social/telegram.svg'
import instagram from '@/assets/social/instagram.svg'

export default function DiscussProject(props: any){

    const { discuss, closeDiscuss } = useDiscussStore((state) => state)

    React.useEffect(() => {
        if(discuss){
          document.body.style.height = '100vh'
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.height = 'auto'
          document.body.style.overflow = 'auto'
        }
      }, [discuss])

    return (
        <AnimatePresence>
            { discuss && (
                    <>
                        <div className="bg-black/30 w-screen h-screen fixed top-0 z-20 transition-all"></div>
                        <motion.section
                            initial={{ y: 600, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 600, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="w-screen h-[80vh] tabletL:h-[500px] rounded-t-[100px] tabletL:rounded-t-[40px] flex flex-col items-center bg-white z-30 fixed bottom-0 overflow-y-scroll">
                                
                            <section className="w-[50%] laptopM:w-[60%] tabletL:w-[85%] py-[50px] tabletL:py-[30px] justify-center">
                                <div className="w-full flex items-start justify-between">
                                    <div>
                                        <p className="mb-[5px] text-[15px] text-[#b3b3b3]">Discuss Project</p>
                                        <h1 className="text-[24px]">Social media <br className="hidden tabletL:block" /> are open.</h1>
                                    </div>
                                    <button className="py-[10px] px-[20px] hover:bg-[#F4F4F4] text-[14px] text-[#454545] rounded-full transition-all" onClick={() => closeDiscuss()}>Close</button>
                                </div>

                                <div className="mt-[90px] tabletL:mt-[50px] grid grid-cols-2 gap-[20px]">
                                    <Link href="https://wa.me/6285930433283" className="py-[30px] tabletL:py-[20px] flex flex-col items-center justify-center border border-[#EAEAEA] rounded-[20px]">
                                        <Image src={whatsapp} alt="img" className="w-[80px] tabletM:w-[70px] mobileS:w-[60px]" />
                                        <p className="mt-[15px] text-[15px] text-[#333333]">WhatsApp</p>
                                    </Link>
                                    
                                    <Link href="imessage://woicipta@gmail.com" className="py-[30px] tabletL:py-[20px] flex flex-col items-center justify-center border border-[#EAEAEA] rounded-[20px]">
                                        <Image src={imessage} alt="img" className="w-[70px] tabletM:w-[60px] mobileS:w-[50px]" />
                                        <p className="mt-[15px] text-[15px] text-[#333333]">iMessage</p>
                                    </Link>

                                    <Link href="https://t.me/travisfr" className="py-[30px] tabletL:py-[20px] flex flex-col items-center justify-center border border-[#EAEAEA] rounded-[20px]">
                                        <Image src={telegram} alt="img" className="w-[70px] tabletM:w-[60px] mobileS:w-[50px]" />
                                        <p className="mt-[15px] text-[15px] text-[#333333]">Telegram</p>
                                    </Link>
                                    
                                    <Link href="https://instagram.com/woicip" className="py-[30px] tabletL:py-[20px] flex flex-col items-center justify-center border border-[#EAEAEA] rounded-[20px]">
                                        <Image src={instagram} alt="img" className="w-[70px] tabletM:w-[60px] mobileS:w-[50px]" />
                                        <p className="mt-[15px] text-[15px] text-[#333333]">Instagram</p>
                                    </Link>
                                </div>
                            </section>
                            
                        </motion.section>
                    </>
                )
            }
        </AnimatePresence>
    )
}