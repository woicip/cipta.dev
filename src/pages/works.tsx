import Head from "next/head"
import { m, motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

// components
import Project from "@/components/Projects/Project"
import Footer from "@/components/Navigation/Footer";
import CallToAction from "@/components/Navigation/CallToAction";

// styles
import HeadlineContainer from "@/styles/HeadlineContainer";

// assets
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'
import danicomThumbnail from '@/assets/projects/danicom/thumbnail.webp'
import imagynationThumbnail from '@/assets/projects/imagynation/thumbnail.webp'

import next from '@/assets/techs/next-black.svg'
import redux from '@/assets/techs/redux.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'
import vercel from '@/assets/icons/vercel-icon-dark.svg'

function WebsiteCatalog(){
    return (
        <m.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-[300px] pb-[100px] laptopM:px-[100px] screen-1170px:px-[300px] laptopS:px-[50px] laptop:px-[50px] grid grid-cols-2 gap-5 laptop:grid-cols-1 tabletL:py-[50px] tabletM:px-[30px] mobileL:px-[20px] mobileL:gap-[50px] tabletL:mt-[-100px]">
            <Project name="Rabfire" sub="Social media platform, 2023." work="Frontend" link="/works/rabfire" techs={[next, redux, tailwind]} thumbnail={rabfireThumbnail} layoutId="rabfire" />
            <Project name="D'ANICOM" sub="Community Profile, 2023." work="Frontend" link="/works/danicom" techs={[next, tailwind]} thumbnail={danicomThumbnail} layoutId="danicom" />
            <Project name="ASCORP" sub="Company Profile, 2022." work="Frontend" link="/works/ascorp" techs={[next, tailwind]} thumbnail={ascorpThumbnail} layoutId="ascorp" />
        </m.div>
    )
}

function APIsCatalog(){
    return (
        <m.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-[300px] pb-[100px] laptopM:px-[100px] screen-1170px:px-[300px] laptopS:px-[50px] laptop:px-[50px] grid grid-cols-2 gap-5 laptop:grid-cols-1 tabletL:py-[50px] tabletM:px-[30px] mobileL:px-[20px] mobileL:gap-[50px] tabletL:mt-[-100px]">
            <Project name="IMAGYNATION API" sub="REST API, 2022." work="Fullstack" link="/works/imagynation" techs={[next, tailwind]} thumbnail={imagynationThumbnail} layoutId="imagynation" />
        </m.div>
    )
}

export default function Timeline(props: any){

    const [ type, setType ] = useState<'Website' | 'APIs' | 'Open Source'>('Website')

    const tabs = [ 'Website', 'APIs' ];

    return (
        <AnimatePresence>
            <m.main
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Head>
                    <title>Works</title>
                    <meta name="description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Works" />
                    <meta property="og:url" content="https://cipta.dev" />
                    <meta property="og:description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
                </Head>

                <div className="mt-[100px]">
                    <div className={HeadlineContainer}>
                        <div>
                            <h1 className="text-[40px] laptopS:text-[34px]">Curated<br/>Works.</h1>
                        </div>

                        <div className="tabletM:mt-[20px]">
                            <p className="font-light text-[16px] leading-normal">
                                I selected these works that might <br/>
                                relevant to audience of this web.
                            </p>
                        </div>
                    </div>

                    <m.div className="sticky top-[20px] mobileL:top-[70px] w-full mobileL:px-[20px] mb-[100px] mx-auto flex items-center justify-center z-[60]">
                        <m.div className="w-fit mobileL:w-full p-[10px] rounded-full bg-[#f7f7f7] grid grid-cols-2 items-center gap-[10px] mobileL:gap-0">
                            {
                                tabs.map((tab: string | any, index: number) => (
                                    <m.div key={index} className="relative py-[10px] px-[15px] mobileL:px-[5px] text-center cursor-pointer mobileL:cursor-default text-[15px] text-black rounded-full mobileL:text-[14px]" onClick={() => setType(tab)}>
                                        <motion.p className="z-50 relative" 
                                        animate={{ color: type === tab ? '#ffffff' : '#000000' }} 
                                        transition={{ duration: 0.35, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.1 }}>
                                            {tab}
                                        </motion.p>

                                        { type === tab && <motion.button 
                                            layoutId="type" 
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                            className="w-full absolute top-0 left-0 py-[10px] px-[15px] mobileL:px-[5px] text-transparent text-[15px] bg-[#3f3f3f] rounded-full">{tab}</motion.button> 
                                        }
                                    </m.div>
                                ))
                            }
                        </m.div>
                    </m.div>
                    
                    { type === 'Website' && <WebsiteCatalog /> }
                    { type === 'APIs' && <APIsCatalog /> }
                    
                </div>

                <CallToAction />
                <Footer />

            </m.main>
        </AnimatePresence>
    )
}