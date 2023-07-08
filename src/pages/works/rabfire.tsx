import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'

// assets
import ctaIcon from '@/assets/icons/cta.svg'
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'
import rabfireSquare1 from '@/assets/projects/rabfire/rabfire-square-1.svg'
import rabfireSquare2 from '@/assets/projects/rabfire/rabfire-square-2.svg'
import next from '@/assets/techs/next-black.svg'
import redux from '@/assets/techs/redux.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'

// components
import CallToAction from "@/components/Navigation/CallToAction"
import Footer from "@/components/Navigation/Footer"
import WorksContainer from "@/components/Works/WorksContainer"
import DetailContainer from "@/components/Works/DetailContainer"
import ImageHighlight from "@/components/Works/ImageHighlight"
import SecondaryImages from "@/components/Works/SecondaryImages"
import HeadlineContainer from "@/components/Works/HeadlineContainer"

export default function Rabfire(props: any){
    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full">
                <Head>
                    <title>Rabfire</title>
                    <meta name="description" content="Passionate Web Developer" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Cipta" />
                    <meta property="og:url" content="https://cipta.dev" />
                    <meta property="og:description" content="Passionate Web Developer" />
                    <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
                </Head>

                <WorksContainer>
                    <h1 className="text-[40px]">Rabfire.</h1>
                    <p className="mt-[15px] font-light text-[16px] leading-relaxed">
                        Rabfire is an application or platform that is used to express <br className="tabletM:hidden"/>
                        oneself and perform various forms of interaction with other <br className="tabletM:hidden"/>
                        people.
                    </p>

                    <DetailContainer>
                        <div className="h-full">
                            <p className="font-light text-[15px]">Client</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Rabfire</p>
                        </div>

                        <div className="h-full">
                            <p className="font-light text-[15px]">What I did</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Frontend Development</p>
                        </div>

                        <div>
                            <p className="font-light text-[15px]">Timeline</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Feb - Jun 2023</p>
                        </div>

                        <motion.div className="text-left py-[10px] px-[13px] hover:bg-[#f3f3f3] rounded-2xl transition-all overflow-hidden">
                            <Link href="https://social.rabfire.com" target="_blank">
                                <p className="font-light text-[15px]">WWW</p>
                                <div className="mt-[5px] flex items-center">
                                    <Image src={ctaIcon} alt="ctaIcon" className="w-[16px]" />
                                    <p className="ml-[6px] tabletM:text-[15px]">social.rabfire.com</p>
                                </div>
                            </Link>
                        </motion.div>
                    </DetailContainer>

                    <ImageHighlight layoutId="rabfire">
                        <motion.div className="py-[15px] px-[20px] rounded-[50px] absolute top-[30px] left-[30px] tabletL:top-[15px] tabletL:left-[15px] z-10 flex items-center bg-white/30 backdrop-blur-lg border border-white/20">
                            <Image src={next} alt="icon" className="w-[20px] mr-[20px]" />
                            <Image src={redux} alt="icon" className="w-[20px] mr-[20px]" />
                            <Image src={tailwind} alt="icon" className="w-[20px]" />
                        </motion.div>

                        <Image src={rabfireThumbnail} alt="thumbnail" />
                    </ImageHighlight>

                    <HeadlineContainer>
                        <h1 className="text-[30px] leading-relaxed">
                            Unleash your creativity, <br className="tabletM:hidden" />
                            connect and engage.
                        </h1>

                        <p className="tabletL:mt-[30px] font-light leading-loose text-[18px]">
                            Rabfire is a versatile tool or platform designed <br className="tabletM:hidden" />
                            for self-expression and facilitating diverse <br className="tabletM:hidden" />
                            forms of social engagement.
                        </p>
                    </HeadlineContainer>

                    <SecondaryImages>
                        <Image src={rabfireSquare1} alt="rabfire-1" className="tabletL:rounded-[30px]" />
                        <Image src={rabfireSquare2} alt="rabfire-2" className="tabletL:rounded-[30px]" />
                    </SecondaryImages>

                    <HeadlineContainer>
                        <h1 className="text-[30px] leading-relaxed">
                            Development <br/>
                            Process.
                        </h1>

                        <p className="w-[400px] tabletL:w-full tabletL:mt-[30px] text-[16px] font-normal leading-loose">
                            I’m developing and maintaining this project with Next.js, Redux, 
                            Tailwind CSS, PM2, Node.js etc.
                            <br/><br/>
                            At first, I made a design framework for the web from existing designs 
                            in Figma. After all the components I have created in Next.js I proceed 
                            to the REST API integration process that has been provided by the 
                            Backend team so that the Frontend can communicate with the 
                            Backend application.
                            <br/><br/>
                            It was really fun to work with some new technologies that I’m never 
                            been using it and started to using it.
                        </p>
                    </HeadlineContainer>
                </WorksContainer>

                <CallToAction />
                <Footer />
            </motion.section>
        </AnimatePresence>
    )
}