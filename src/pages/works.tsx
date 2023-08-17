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

import next from '@/assets/techs/next-black.svg'
import redux from '@/assets/techs/redux.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'

function WebsiteCatalog(){
    return (
        <m.div 
            initial={{ opacity: 0 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-[300px] pb-[100px] laptopM:px-[100px] screen-1170px:px-[300px] laptopS:px-[50px] laptop:px-[50px] grid grid-cols-2 gap-5 laptop:grid-cols-1 tabletL:py-[50px] tabletM:px-[30px] mobileL:px-[20px] mobileL:gap-[50px] tabletL:mt-[-100px]">
            <Project name="JFest Schedule API" sub="REST API, 2023." work="FullStack" link="/works/rabfire" techs={[next, redux, tailwind]} thumbnail={rabfireThumbnail} layoutId="" />
            <Project name="IMAGYNATION API" sub="REST API, 2022." work="Frontend" link="/works/ascorp" techs={[next, tailwind]} thumbnail={ascorpThumbnail} layoutId="" />
        </m.div>
    )
}

export default function Timeline(props: any){

    const [ type, setType ] = useState<'website' | 'apis' | 'opensource'>('website')

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
                        <m.div className="w-fit mobileL:w-full p-[10px] rounded-full bg-[#f7f7f7] grid grid-cols-2 gap-[10px] mobileL:gap-0">
                            <m.div className={`relative py-[10px] px-[15px] mobileL:px-[5px] text-center cursor-pointer mobileL:cursor-default text-[15px] text-black rounded-full z-50 mobileL:text-[14px]`} onClick={() => setType('website')}>
                                Website
                                { type === 'website' && <motion.button layout layoutId="type" className={`w-full absolute left-0 top-0 py-[10px] px-[15px] mobileL:px-[5px] text-transparent text-[15px] bg-black/5 rounded-full`} onClick={() => setType('website')}>Website</motion.button> }
                            </m.div>

                            <m.div className={`relative py-[10px] px-[15px] mobileL:px-[5px] text-center cursor-pointer mobileL:cursor-default text-[15px] text-black rounded-full z-10 mobileL:text-[14px]`} onClick={() => setType('apis')}>
                                APIs
                                { type === 'apis' && <motion.button layout layoutId="type" className={`w-full absolute right-0 top-0 py-[10px] px-[15px] mobileL:px-[5px] text-transparent text-[15px] bg-black/5 rounded-full`} onClick={() => setType('apis')}>APIs</motion.button> }
                            </m.div>

                            {/* <motion.div className={`relative py-[10px] px-[15px] mobileL:px-[5px] text-center cursor-pointer mobileL:cursor-default text-[15px] text-black rounded-full z-10 mobileL:text-[14px]`} onClick={() => setType('opensource')}>
                                Open Source
                                { type === 'opensource' && <motion.button layoutId="type" className={`w-full absolute right-0 top-0 py-[10px] px-[15px] mobileL:px-[5px] text-transparent text-[15px] bg-black/5 rounded-full`} onClick={() => setType('apis')}>APIs</motion.button> }
                            </motion.div> */}
                        </m.div>
                    </m.div>
                    
                    { type === 'website' && <WebsiteCatalog /> }
                    { type === 'apis' && <APIsCatalog /> }
                    
                </div>

                <CallToAction />
                <Footer />

            </m.main>
        </AnimatePresence>
    )
}