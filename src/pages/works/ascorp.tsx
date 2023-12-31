import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { m, motion, AnimatePresence } from 'framer-motion'

// assets
import ctaIcon from '@/assets/icons/cta.svg'
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'
import ascorpSquare1 from '@/assets/projects/ascorp/ascorp-square-1.svg'
import ascorpSquare2 from '@/assets/projects/ascorp/ascorp-square-2.svg'
import next from '@/assets/techs/next-black.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'
import redux from '@/assets/techs/redux.svg'
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'

// components
import CallToAction from "@/components/Navigation/CallToAction"
import Footer from "@/components/Navigation/Footer"
import WorksContainer from "@/components/Works/WorksContainer"
import DetailContainer from "@/components/Works/DetailContainer"
import ImageHighlight from "@/components/Works/ImageHighlight"
import SecondaryImages from "@/components/Works/SecondaryImages"
import HeadlineContainer from "@/components/Works/HeadlineContainer"
import Project from "@/components/Projects/Project"

export default function Ascorp(props: any){
    return (
        <AnimatePresence>
            <m.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full">
                <Head>
                    <title>ASCORP</title>
                    <meta name="description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="ASCORP" />
                    <meta property="og:url" content="https://cipta.dev" />
                    <meta property="og:description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
                </Head>

                <WorksContainer>
                    <h1 className="text-[40px]">ASCORP.</h1>
                    <p className="mt-[15px] font-light text-[16px] leading-relaxed">
                        We are creative agency that provides you with services <br className="tabletM:hidden" />
                        such as music production, event organizer, artist management <br className="tabletM:hidden" />
                        and multimedia.
                    </p>

                    <DetailContainer>
                        <div className="h-full">
                            <p className="font-light text-[15px]">Client</p>
                            <p className="mt-[5px] tabletM:text-[15px]">ASCORP</p>
                        </div>

                        <div className="h-full">
                            <p className="font-light text-[15px]">What I did</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Frontend Development</p>
                        </div>

                        <div>
                            <p className="font-light text-[15px]">Timeline</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Dec 2022 ~ Jan 2023</p>
                        </div>

                        <m.div className="text-left py-[10px] px-[13px] tabletL:px-0 hover:bg-[#f3f3f3] tabletL:hover:bg-transparent rounded-2xl transition-all">
                            <Link href="https://andhikasurya.com" target="_blank">
                                <p className="font-light text-[15px]">WWW</p>
                                <div className="mt-[5px] flex items-center">
                                    <Image src={ctaIcon} alt="ctaIcon" className="w-[16px]" />
                                    <p className="ml-[6px] tabletM:text-[15px]">andhikasurya.com</p>
                                </div>
                            </Link>
                        </m.div>
                    </DetailContainer>

                    <ImageHighlight layoutId="ascorp">
                        <m.div className="py-[15px] px-[20px] mobileL:px-[15px] mobileL:py-[10px] rounded-full absolute top-[20px] left-[20px] mobileL:top-[15px] mobileL:left-[15px] z-10 flex items-center bg-white/30 backdrop-blur-lg border border-white/20">
                            <Image src={next} alt="icon" className="w-[20px] mr-[20px]" />
                            <Image src={tailwind} alt="icon" className="w-[20px]" />
                        </m.div>

                        <Image src={ascorpThumbnail} alt="thumbnail" />
                    </ImageHighlight>

                    <HeadlineContainer>
                        <h1 className="text-[30px] leading-relaxed">
                            Swift, top-notch <br className="tabletM:hidden" />
                            services for a seamless <br className="tabletM:hidden" />
                            user experience.
                        </h1>

                        <p className="tabletL:mt-[30px] font-light leading-loose text-[18px]">
                            We are a dynamic creative agency offering <br className="tabletM:hidden" />
                            a wide range of services including music <br className="tabletM:hidden"/>
                            production, event coordination, artist <br className="tabletM:hidden"/>
                            management, and multimedia solutions.
                        </p>
                    </HeadlineContainer>

                    <SecondaryImages>
                        <Image src={ascorpSquare1} alt="square" />
                        <Image src={ascorpSquare2} alt="square" />
                    </SecondaryImages>

                    <HeadlineContainer>
                        <h1 className="sticky top-[80px] tabletL:static text-[30px] leading-relaxed">
                            The Development <br/>
                            Process.
                        </h1>

                        <p className="w-[400px] laptop:w-full tabletL:mt-[30px] text-[16px] font-normal leading-loose">
                            I&apos;m developing and maintaining this project with Next.js, Tailwind
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
                    </HeadlineContainer>

                </WorksContainer>

                <CallToAction />
                <Footer />
            </m.section>
        </AnimatePresence>
    )
}