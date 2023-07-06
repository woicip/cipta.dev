import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// components
import Project from "@/components/Projects/Project";
import Footer from "@/components/Navigation/Footer";
import CallToAction from "@/components/Navigation/CallToAction";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                <main className="mt-[100px]">
                    <div className="py-[200px] px-[450px] laptopM:py-[150px] laptopM:px-[200px] flex items-start justify-between">
                        <h1 className="text-[40px]">Passionate Full Stack <br/>Designer.</h1>

                        <div>
                            <p className="font-light text-[16px] leading-normal">
                                Halo, I'm Gunawan Cipta. Full Stack Designer <br/>
                                who like to code, design & building products. <br/>
                                Based in Indonesia.
                            </p>
                            <motion.button 
                                whileTap={{ scale: 0.8 }}
                                transition={{ duration: 0.1, type: "spring" }} 
                                className="w-fit mt-[20px] py-[7px] px-[10px] flex items-center rounded-xl hover:bg-[#f0f0f0] transition-all cursor-pointer"
                                onClick={() => window.location.href = "#ready?"}>
                                <Image src={ctaIcon} alt="icon" />
                                <span className="ml-[10px] font-normal">Let's Talk</span>
                            </motion.button>
                        </div>
                    </div>

                    <div className="px-[300px] pb-[100px] laptopM:px-[100px] grid grid-cols-2 gap-5">
                        <Project name="Rabfire" sub="Social media platform, 2023." work="Front End Development" link="/works/rabfire" techs={[next, redux, tailwind]} thumbnail={rabfireThumbnail} layoutId="rabfire" />
                        <Project name="ASCORP" sub="Company Profile, 2022." work="Front End Development" link="/works/ascorp" techs={[next, tailwind]} thumbnail={ascorpThumbnail} layoutId="ascorp" />
                    </div>

                    <div className="py-[150px] px-[300px] laptopM:px-[100px] flex flex-col items-center justify-center">
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

                    <CallToAction />
                    <Footer />
                </main>
             </AnimatePresence>
        </motion.main>
    )
}