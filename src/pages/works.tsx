import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"

// components
import Project from "@/components/Projects/Project"
import Footer from "@/components/Navigation/Footer";
import CallToAction from "@/components/Navigation/CallToAction";

// assets
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'

import next from '@/assets/techs/next-black.svg'
import redux from '@/assets/techs/redux.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'

export default function Timeline(props: any){
    return (
        <motion.main
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Head>
                <title>Works</title>
                <meta name="description" content="Passionate Web Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Cipta" />
                <meta property="og:url" content="https://cipta.dev" />
                <meta property="og:description" content="Passionate Web Developer" />
                <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
            </Head>

            <AnimatePresence>
                <div className="mt-[100px]">
                    <div className="py-[200px] px-[450px] laptopM:py-[150px] laptopM:px-[200px] flex items-center justify-between">
                        <div>
                            <h1 className="text-[40px]">Code & Design<br/>Works.</h1>
                        </div>

                        <div>
                            <p className="font-light text-[16px] leading-normal">
                                I selected these works that might <br/>
                                relevant to audience of this web.
                            </p>
                        </div>
                    </div>

                    <div className="px-[300px] pb-[100px] laptopM:px-[100px] grid grid-cols-2 gap-5">
                        <Project name="Rabfire" sub="Social media platform, 2023." work="Frontend" link="/works/rabfire" techs={[next, redux, tailwind]} thumbnail={rabfireThumbnail} layoutId="rabfire" />
                        <Project name="ASCORP" sub="Company Profile, 2022." work="Frontend" link="/works/ascorp" techs={[next, tailwind]} thumbnail={ascorpThumbnail} layoutId="ascorp" />
                    </div>
                </div>

                <CallToAction />
                <Footer />
            </AnimatePresence>

        </motion.main>
    )
}