import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"

// components
import Project from "@/components/Projects/Project"
import Footer from "@/components/Navigation/Footer";
import CallToAction from "@/components/Navigation/CallToAction";

// styles
import HeadlineContainer from "@/styles/HeadlineContainer";

// assets
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'

import next from '@/assets/techs/next-black.svg'
import redux from '@/assets/techs/redux.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'

export default function Timeline(props: any){
    return (
        <AnimatePresence>
            <motion.main
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Head>
                    <title>Works</title>
                    <meta name="description" content="A person who like to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Works" />
                    <meta property="og:url" content="https://cipta.dev" />
                    <meta property="og:description" content="A person who like to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
                </Head>

                <div className="mt-[100px]">
                    <div className={HeadlineContainer}>
                        <div>
                            <h1 className="text-[40px] laptopS:text-[34px]">Code & Design<br/>Works.</h1>
                        </div>

                        <div className="tabletM:mt-[20px]">
                            <p className="font-light text-[16px] leading-normal">
                                I selected these works that might <br/>
                                relevant to audience of this web.
                            </p>
                        </div>
                    </div>

                    <div className="px-[300px] pb-[100px] laptopM:px-[100px] screen-1170px:px-[300px] laptopS:px-[50px] laptop:px-[50px] grid grid-cols-2 gap-5 laptop:grid-cols-1 tabletL:py-[50px] tabletM:px-[30px] mobileL:px-[20px] mobileL:gap-[50px]">
                        <Project name="Rabfire" sub="Social media platform, 2023." work="Frontend" link="/works/rabfire" techs={[next, redux, tailwind]} thumbnail={rabfireThumbnail} layoutId="rabfire" />
                        <Project name="ASCORP" sub="Company Profile, 2022." work="Frontend" link="/works/ascorp" techs={[next, tailwind]} thumbnail={ascorpThumbnail} layoutId="ascorp" />
                    </div>
                </div>

                <CallToAction />
                <Footer />

            </motion.main>
        </AnimatePresence>
    )
}