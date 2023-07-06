import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'

// assets
import ctaIcon from '@/assets/icons/cta.svg'
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'
import ascorpSquare1 from '@/assets/projects/ascorp/ascorp-square-1.svg'
import ascorpSquare2 from '@/assets/projects/ascorp/ascorp-square-2.svg'
import next from '@/assets/techs/next-black.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'

// components
import CallToAction from "@/components/Navigation/CallToAction"
import Footer from "@/components/Navigation/Footer"

export default function Ascorp(props: any){
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full">
            <Head>
                <title>ASCORP</title>
                <meta name="description" content="Passionate Web Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Cipta" />
                <meta property="og:url" content="https://cipta.dev" />
                <meta property="og:description" content="Passionate Web Developer" />
                <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
            </Head>

            <AnimatePresence>

                <section className="mt-[50px] laptopM:mt-[50px]">
                    <div className="py-[200px] px-[450px] laptopM:py-[150px] laptopM:px-[200px] flex flex-col items-start justify-between">
                        <h1 className="text-[40px]">ASCORP.</h1>
                        <p className="mt-[15px] font-light text-[16px] leading-relaxed">
                            We are creative agency that provides you with services <br/>
                            such as music production, event organizer, artist management <br/>
                            and multimedia.
                        </p>

                        <div className="w-full mt-[130px] flex items-center justify-between">
                            <div>
                                <p className="font-light text-[15px]">Client</p>
                                <p className="mt-[5px]">ASCORP</p>
                            </div>

                            <div>
                                <p className="font-light text-[15px]">What I did</p>
                                <p className="mt-[5px]">Frontend Development</p>
                            </div>

                            <div>
                                <p className="font-light text-[15px]">Timeline</p>
                                <p className="mt-[5px]">Dec 2022 - Jun 2023</p>
                            </div>

                            <motion.div className="text-left py-[10px] px-[13px] hover:bg-[#f3f3f3] rounded-2xl transition-all">
                                <Link href="https://andhikasurya.com" target="_blank">
                                    <p className="font-light text-[15px]">WWW</p>
                                    <div className="mt-[5px] flex items-center">
                                        <Image src={ctaIcon} alt="ctaIcon" className="w-[16px]" />
                                        <p className="ml-[6px]">andhikasurya.com</p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="mt-[100px]">
                            <motion.div layoutId="ascorp" className="h-[700px] laptopM:h-[600px] rounded-[50px] overflow-hidden relative">
                                <motion.div className="py-[15px] px-[20px] rounded-[50px] absolute top-[30px] left-[30px] z-10 flex items-center bg-white/30 backdrop-blur-lg border border-white/20">
                                    <Image src={next} alt="icon" className="w-[20px] mr-[20px]" />
                                    <Image src={tailwind} alt="icon" className="w-[20px]" />
                                </motion.div>

                                <Image src={ascorpThumbnail} alt="thumbnail" />
                            </motion.div>
                        </div>

                        <div className="w-full py-[130px] px-[70px] flex items-start justify-between">
                            <h1 className="text-[30px] leading-relaxed">
                                Swift, top-notch <br/>
                                services for a seamless <br/>
                                user experience.
                            </h1>

                            <p className="font-light leading-loose text-[18px]">
                                We are a dynamic creative agency offering <br/>
                                a wide range of services including music <br/>
                                production, event coordination, artist <br/>
                                management, and multimedia solutions.
                            </p>
                        </div>

                        <div className="mt-[120px] grid grid-cols-2 gap-5">
                            <Image src={ascorpSquare1} alt="square" />
                            <Image src={ascorpSquare2} alt="square" />
                        </div>

                        <div className="w-full pt-[130px] px-[70px] flex items-start justify-between">
                            <h1 className="text-[30px] leading-relaxed">
                                Development <br/>
                                Process.
                            </h1>

                            <p className="w-[400px] text-[16px] font-light leading-loose">
                                I’m developing and maintaining this project with Next.js, Tailwind
                                CSS and Express.js
                                <br/><br/>
                                Crafting the UX & UI blueprint with precision and stunning 
                                imagery, ensuring a seamless transition from design to code. 
                                Inspired by the captivating Dark Theme of Indodax Mobile App, 
                                our color palette revolves around a delightful shade of blue.
                                <br/><br/>
                                Powered by Next.js, my coding tech stack ensures optimal 
                                SEO performance, making it an excellent choice for websites 
                                that prioritize search engine visibility.
                            </p>
                        </div>
                    </div>
                </section>

                <CallToAction />
                <Footer />
            </AnimatePresence>
        </motion.section>
    )
}