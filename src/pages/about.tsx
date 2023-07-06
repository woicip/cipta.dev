import Head from "next/head"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// components
import CallToAction from "@/components/Navigation/CallToAction"
import Footer from "@/components/Navigation/Footer"

// assets
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
                    <div className="py-[200px] px-[450px] laptopM:py-[150px] laptopM:px-[200px] flex items-start justify-between">
                        <div>
                            <h1 className="text-[40px]">About<br/>Cipta.dev</h1>
                            <div className="mt-[70px] grid grid-cols-2 gap-10">
                                <p className="font-light">EST. <br/>2021</p>
                                <p className="font-light">2+ Years <br/> Experience</p>
                            </div>
                        </div>

                        <div>
                            <p className="w-[400px] text-[16px] leading-loose font-light">
                                My fullname is Gunawan Cipta. Based in Indonesia.
                                I do love working as a Full Stack Web Designer.
                                <br/><br/>
                                Highly skilled and motivated web developer with
                                2+ years of experience in full-stack web development.
                                Proficient in multiple JavaScript technologies and frameworks,
                                with a strong focus on delivering efficient, scalable, and
                                high-quality code.
                                <br/><br/>
                                Currently me and my friends are running & developing
                                jualdesign.com & ngetopup.com
                            </p>
                        </div>
                    </div>

                    <div className="pt-[20px] py-[80px] px-[450px] laptopM:px-[200px] flex items-start justify-between">
                        <div>
                            <p className="font-light italic mb-[20px]">01</p>
                            <h1 className="font-light text-[30px]">User Interface & <br/> Experience Design</h1>

                            <p className="mt-[60px] font-light text-[#868686]">Figma, Whimsical, Notion etc.</p>
                        </div>

                        <div>
                            <p className="font-light italic mb-[20px]">02</p>
                            <h1 className="font-light text-[30px]">Front End<br/> Development</h1>

                            <p className="mt-[60px] font-light text-[#868686]">React, Redux, Tailwind CSS etc.</p>
                        </div>

                        <div>
                            <p className="font-light italic mb-[20px]">03</p>
                            <h1 className="font-light text-[30px]">Back End<br/> Development</h1>

                            <p className="mt-[60px] font-light text-[#868686]">Node.js, Express, SQL etc.</p>
                        </div>
                    </div>

                    <div className="px-[300px] py-[100px] laptopM:px-[200px] grid grid-cols-3 gap-5">
                        <div className="h-[500px] laptopM:h-[400px] col-span-2 rounded-3xl overflow-hidden relative">
                            <div className="py-[15px] px-[20px] bg-white/20 backdrop-blur-xl absolute rounded-[15px] bottom-4 left-4">
                                <p className="text-white text-[15px]">Desktop Wallpaper</p>
                            </div>
                            <Image src={wallpaper} alt="wallpaper" className="w-full h-full" />
                        </div>
                        <div className="h-[500px] laptopM:h-[400px] rounded-3xl overflow-hidden relative">
                            <div className="py-[15px] px-[20px] bg-white/20 backdrop-blur-xl absolute rounded-[15px] bottom-4 left-4">
                                <p className="text-white text-[15px]">AI Generated</p>
                            </div>
                            <Image src={aiGenerated} alt="wallpaper" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="py-[10px] flex flex-col items-center justify-center">
                        <p className="leading-loose font-light">
                            My Full Name is Gunawan Cipta. Based in Indonesia, working as <br/>
                            Freelance Full Stack Web Designer.<br/>
                            <br/>
                            Highly skilled and motivated web developer with 2+ years of <br/>
                            experience in full-stack web development. Proficient in multiple <br/>
                            JavaScript technologies and frameworks, with a strong focus on <br/>
                            delivering efficient, scalable, and high-quality code.<br/>
                            <br/>
                            Currently me and my friends are running & developing <br/>
                            jualdesign.com & ngetopup.com <br/>
                        </p>

                        <div className="w-[500px] mt-[100px] mb-[100px] py-[15px] px-[20px] flex items-center rounded-full bg-[#F3F3F3]">
                            <Image src={spotify} alt="spotify" />
                            <div className="ml-[20px]">
                                <p className="text-[14px] font-light">My Playlist</p>
                                <h1 className="text-[18px]">Renaissance</h1>
                            </div>
                        </div>
                    </div>

                    <CallToAction />
                    <Footer />
                </div>
            </AnimatePresence>

        </motion.main>
    )
}