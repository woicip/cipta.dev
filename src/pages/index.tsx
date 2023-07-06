import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// components
import Navigation from "../components/Navigation/Navigation";
import Project from "@/components/Projects/Project";
import Footer from "@/components/Navigation/Footer";

// assets
import ctaIcon from '@/assets/icons/cta.svg'
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'

import next from '@/assets/techs/next-black.svg'
import redux from '@/assets/techs/redux.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'

export default function Index(){
    return (
        <motion.main 
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full">
            <Head>
                <title>Cipta</title>
                <meta name="description" content="Passionate Web Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Cipta" />
                <meta property="og:url" content="https://cipta.dev" />
                <meta property="og:description" content="Passionate Web Developer" />
                <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
            </Head>
            
            <AnimatePresence>
                <Navigation />
                
                <main className="mt-[100px]">
                    <div className="py-[200px] px-[450px] flex items-start justify-between">
                        <h1 className="text-[40px]">Passionate Full Stack <br/>Designer.</h1>

                        <div>
                            <p className="font-light text-[16px] leading-normal">
                                Halo, I'm Gunawan Cipta. Full Stack Designer <br/>
                                who like to code, design & building products. <br/>
                                Based in Indonesia.
                            </p>
                            <div className="mt-[20px] flex items-center">
                                <Image src={ctaIcon} alt="icon" />
                                <span className="ml-[10px] font-normal">Let's Talk</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-[300px] pb-[100px] grid grid-cols-2 gap-5">
                        <Project name="Rabfire" sub="Social media platform, 2023." work="Front End Development" link="/rabfire" techs={[next, redux, tailwind]} thumbnail={rabfireThumbnail} />
                        <Project name="ASCORP" sub="Company Profile, 2022." work="Front End Development" link="/ascorp" techs={[next, tailwind]} thumbnail={ascorpThumbnail} />
                    </div>

                    <div className="py-[150px] px-[300px] flex flex-col items-center justify-center">
                        <h1 className="text-[40px] font-normal text-center">Unlock your potential with<br/> diverse services</h1>
                        <div className="mt-[70px] grid grid-cols-3 gap-5">
                            <div className="p-[40px] rounded-[30px] border border-[#E4E4E4] bg-gradient-to-b from-[#f3f3f3] to-transparent">
                                <h1 className="font-normal text-[22px]">User Interface & <br/> User Experience Design</h1>
                                <p className="mt-[100px] font-light text-[16px] text-[#9E9E9E]">Figma, Whimsical, Notion etc.</p>
                            </div>

                            <div className="p-[40px] rounded-[30px] border border-[#E4E4E4] bg-gradient-to-b from-[#f3f3f3] to-transparent">
                                <h1 className="font-normal text-[22px]">Front End<br/> Development</h1>
                                <p className="mt-[100px] font-light text-[16px] text-[#9E9E9E]">React, Vue, Redux, Tailwind CSS etc.</p>
                            </div>

                            <div className="p-[40px] rounded-[30px] border border-[#E4E4E4] bg-gradient-to-b from-[#f3f3f3] to-transparent">
                                <h1 className="font-normal text-[22px]">Back End<br/> Development</h1>
                                <p className="mt-[100px] font-light text-[16px] text-[#9E9E9E]">Node, Express, Mongo, GraphQL etc.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full mt-[100px] py-[150px] flex flex-col items-center justify-center rounded-t-[100px] bg-gradient-to-b from-[#F0F0F0] to-transparent">
                        <h1 className="text-[40px] text-center">Ready to take <br/> your ideas into reality ?</h1>
                        <div className="mt-[50px] grid grid-cols-2 gap-4">
                            <motion.button whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}} className="px-[40px] py-[15px] rounded-full bg-[#333333] text-white">Discuss Project</motion.button>
                            <button className="px-[30px] py-[15px] rounded-full bg-[#ECECEC] text-[#333333]">Write Email</button>
                        </div>
                    </div>

                    <Footer />
                </main>
             </AnimatePresence>
        </motion.main>
    )
}