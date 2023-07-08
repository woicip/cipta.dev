import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// components
import CallToAction from "@/components/Navigation/CallToAction"
import Footer from "@/components/Navigation/Footer"
import Goto from "@/components/Navigation/GoTo"

// styles
import HeadlineContainer from "@/styles/HeadlineContainer"

// assets
import arrow from '@/assets/icons/arrow.svg'
import wallpaper from '@/assets/projects/wallpaper.jpg'
import aiGenerated from '@/assets/projects/ai-generated.jpg'
import spotify from '@/assets/projects/spotify.svg'

export default function About(props: any){
    return (
        <motion.main
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Head>
                <title>About</title>
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
                    <div className={HeadlineContainer}>
                        <div>
                            <h1 className="text-[40px] laptopS:text-[34px]">About<br/>Cipta.dev</h1>
                            <p className="mt-[40px] w-[450px] tabletL:w-full text-[16px] leading-loose font-light">
                            I'm Gunawan Cipta, Full Stack Web Designer based in Indonesia. With 2+ years of experience, I specialize in JavaScript and frameworks, delivering efficient, scalable code.
                            <br/><br/>
                            Currently developing <Goto href="https://jualdesign.com">jualdesign.com</Goto> and <Goto href="https://ngetopup.com">ngetopup.com</Goto>
                            Let's collaborate and bring your vision to life!
                            </p>
                        </div>

                        <div>
                            <div className="tabletL:mt-[70px] grid grid-cols-2 gap-10">
                                <p className="font-light">EST. <br/>2021</p>
                                <p className="font-light">2+ Years <br/> Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-[100px] px-[450px] laptopM:pt-[50px] laptopM:py-[150px] laptopM:px-[100px] laptopS:px-[50px] laptopS:py-[100px] tabletM:px-[30px] mobileL:px-[20px] flex flex-col items-center justify-center">
                        <h1 className="text-[40px]">What I'm doing.</h1>

                        <div className="w-full mt-[50px] grid grid-cols-3 gap-5 laptop:flex laptop:flex-wrap laptop:items-center laptop:justify-center">
                            <div className="tabletM:w-full h-[300px] p-[30px] border rounded-[40px] flex flex-col items-start justify-between bg-gradient-to-b from-[#fafafa] to-transparent">
                                <div>
                                    <p className="font-light italic mb-[10px] text-black/40">01</p>
                                    <h1 className="font-light text-[30px] laptopM:text-[26px]">User Interface & <br/> Experience Design</h1>
                                </div>

                                <p className="font-light text-[#868686]">Figma, Whimsical, Notion etc.</p>
                            </div>

                            <div className="tabletM:w-full h-[300px] p-[30px] border rounded-[40px] flex flex-col items-start justify-between bg-gradient-to-b from-[#fafafa] to-transparent">
                                <div>
                                    <p className="font-light italic mb-[10px] text-black/40">02</p>
                                    <h1 className="font-light text-[30px] laptopM:text-[26px]">Front End<br/> Development</h1>
                                </div>

                                <p className="font-light text-[#868686]">React, Redux, Tailwind CSS etc.</p>
                            </div>

                            <div className="tabletM:w-full h-[300px] p-[30px] border rounded-[40px] flex flex-col items-start justify-between bg-gradient-to-b from-[#fafafa] to-transparent"> 
                                <div>
                                    <p className="font-light italic mb-[10px] text-black/40">03</p>
                                    <h1 className="font-light text-[30px] laptopM:text-[26px]">Back End<br/> Development</h1>
                                </div>

                                <p className="font-light text-[#868686]">Node.js, Express, SQL etc.</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-[300px] py-[100px] tabletM:py-[50px] laptopM:px-[100px] laptopS:px-[150px] laptop:px-[50px] tabletM:px-[30px] tabletL:py-[100px] mobileL:px-[20px] grid grid-cols-3 gap-5 tabletL:grid-cols-1 tabletL:gap-0">
                        <div className="w-full h-[500px] laptopM:h-[400px] col-span-2 rounded-3xl overflow-hidden relative">
                            <div className="py-[15px] px-[20px] bg-white/20 backdrop-blur-xl absolute rounded-[15px] bottom-4 left-4">
                                <p className="text-white text-[15px]">Desktop Wallpaper</p>
                            </div>
                            <Image src={wallpaper} alt="wallpaper" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-full h-[500px] tabletL:mt-[20px] laptopM:h-[400px] rounded-3xl overflow-hidden relative">
                            <div className="py-[15px] px-[20px] bg-white/20 backdrop-blur-xl absolute rounded-[15px] bottom-4 left-4">
                                <p className="text-white text-[15px]">AI Generated</p>
                            </div>
                            <Image src={aiGenerated} alt="wallpaper" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="py-[10px] flex flex-col items-center justify-center">
                        <p className="laptop:px-[50px] tabletM:px-[30px] leading-loose font-light">
                            My Full Name is Gunawan Cipta. Based in Indonesia, working as <br className="tabletM:hidden" />
                            Freelance Full Stack Web Designer.<br />
                            <br/>
                            Highly skilled and motivated web developer with 2+ years of <br className="tabletM:hidden" />
                            experience in full-stack web development. Proficient in multiple <br className="tabletM:hidden" />
                            JavaScript technologies and frameworks, with a strong focus on <br className="tabletM:hidden" />
                            delivering efficient, scalable, and high-quality code.<br />
                            <br/>
                            Currently me and my friends are running & developing <br className="tabletM:hidden" />
                            jualdesign.com & ngetopup.com <br className="tabletM:hidden" />
                        </p>

                        <motion.div>
                            <Link href="https://open.spotify.com/playlist/5YuCKQrZmAhVj2DCI08zUQ?si=1756f7e761dd425c" target="_blank" className="w-[500px] tabletM:w-[90vw] laptopM:w-[400px] mt-[100px] mb-[100px] py-[15px] px-[20px] flex items-center rounded-full bg-[#333333]">
                                <Image src={spotify} alt="spotify" />
                                <div className="ml-[20px] text-white">
                                    <p className="text-[14px] font-light">My Playlist</p>
                                    <h1 className="text-[18px]">Renaissance</h1>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    <CallToAction />
                    <Footer />
                </div>
            </AnimatePresence>

        </motion.main>
    )
}