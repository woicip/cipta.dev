import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { m, motion, AnimatePresence } from 'framer-motion'

// assets
import ctaIcon from '@/assets/icons/cta.svg'
import next from '@/assets/techs/next-black.svg'
import tailwind from '@/assets/techs/tailwindcss.svg'
import imagynationThumbnail from '@/assets/projects/imagynation/thumbnail.webp'
import imagynation1 from '@/assets/projects/imagynation/imagynation-1.webp'
import imagynation2 from '@/assets/projects/imagynation/imagynation-2.webp'

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
        <AnimatePresence >
            <m.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full">
                <Head>
                    <title>IMAGYNATION API</title>
                    <meta name="description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="IMAGYNATION API" />
                    <meta property="og:url" content="https://cipta.dev" />
                    <meta property="og:description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
                </Head>

                <WorksContainer>
                    <h1 className="text-[40px]">IMAGYNATION.</h1>
                    <p className="mt-[15px] font-light text-[16px] leading-loose">
                        Accelerate UI prototyping, offering developers <br className="tabletM:hidden" /> the essential dummy data they crave.
                    </p>

                    <DetailContainer>
                        <div className="h-full">
                            <p className="font-light text-[15px]">Type</p>
                            <p className="mt-[5px] tabletM:text-[15px]">REST API</p>
                        </div>

                        <div className="h-full">
                            <p className="font-light text-[15px]">What I did</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Fullstack Development</p>
                        </div>

                        <div>
                            <p className="font-light text-[15px]">Timeline</p>
                            <p className="mt-[5px] tabletM:text-[15px]">Nov 2022 ~ Present</p>
                        </div>

                        <m.div className="text-left py-[10px] px-[13px] tabletL:px-0 hover:bg-[#f3f3f3] tabletL:hover:bg-transparent rounded-2xl transition-all">
                            <Link href="https://imagynation.vercel.app" target="_blank">
                                <p className="font-light text-[15px]">WWW</p>
                                <div className="mt-[5px] flex items-center overflow-auto">
                                    <Image src={ctaIcon} alt="ctaIcon" className="w-[16px]" />
                                    <p className="ml-[6px] tabletM:text-[15px] break-words">imagynation.vercel.app</p>
                                </div>
                            </Link>
                        </m.div>
                    </DetailContainer>

                    <ImageHighlight layoutId="imagynation">
                        <m.div className="py-[15px] px-[20px] mobileL:px-[15px] mobileL:py-[10px] rounded-full absolute top-[20px] left-[20px] mobileL:top-[15px] mobileL:left-[15px] z-10 flex items-center bg-white/30 backdrop-blur-lg border border-white/20">
                            <Image src={next} alt="icon" className="w-[20px] mr-[20px]" />
                            <Image src={tailwind} alt="icon" className="w-[20px]" />
                        </m.div>

                        <Image src={imagynationThumbnail} alt="thumbnail" />
                    </ImageHighlight>

                    <HeadlineContainer>
                        <h1 className="text-[30px] leading-relaxed">
                            Are you a developer striving to streamline your UI <br className="tabletL:hidden" /> prototyping process?
                        </h1>

                        <p className="tabletL:mt-[30px] font-light leading-loose text-[18px]">
                            Introducing IMAGYNATION: The Tool for Developers to Elevate their UI Prototyping Process
                            {/* passion meets friendship! Join our Japanese <br className="tabletM:hidden" /> 
                            hobbyist community based in Depok, West Java. */}
                        </p>
                    </HeadlineContainer>

                    <SecondaryImages>
                        <Image src={imagynation1} alt="imagynation" className="h-[85%] tabletM:h-full object-cover rounded-[30px] tabletL:rounded-[30px]" />
                        <Image src={imagynation2} alt="imagynation" className="h-[85%] tabletM:h-full object-cover rounded-[30px] tabletL:rounded-[30px]" />
                    </SecondaryImages>

                    <HeadlineContainer>
                        <h1 className="sticky top-[80px] tabletL:static text-[30px] leading-relaxed">
                            The Development <br/>
                            Process.
                        </h1>

                        <p className="w-[400px] laptop:w-full tabletL:mt-[30px] text-[16px] font-normal leading-loose">
                            I&apos;m developing and maintaining IMAGYNATION using Next.js, Tailwind
                            CSS and Next.js Serverless Function
                            <br/><br/>
                            At IMAGYNATION, I understand that every second counts in the fast-paced world of software development. That's why I've created a cutting-edge tool that allows developers to seamlessly connect their user interfaces to the API endpoint, simplifying the way UI prototypes are created.
                            <br/><br/>
                            {/* Crafting together the UX & UI blueprint with D'Anicom core members, ensuring a seamless transition from design to code. 
                            The design took minimalist and clean approaches to give the best experience when browsing the website
                            <br/><br/>
                            Powered by Next.js, my coding tech stack ensures optimal 
                            SEO performance, making it an excellent choice for websites 
                            that prioritize search engine visibility. */}
                        </p>
                    </HeadlineContainer>

                </WorksContainer>

                <CallToAction />
                <Footer />
            </m.section>
        </AnimatePresence>
    )
}