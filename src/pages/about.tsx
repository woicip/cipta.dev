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
import me from '@/assets/me.jpg'

export default function About(props: any){

    const dt = new Date()
    const birthDate = new Date('2003-05-31')
    const timeDiff = dt.getTime() - birthDate.getTime()
    const millisecondsPerYear = 31557600000;
    const age = Math.floor(timeDiff / millisecondsPerYear)
    const firstExperience = 2021

    return (
        <AnimatePresence>
            <motion.main
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
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

                <div className="mt-[100px]">
                    <div className="py-[200px] px-[450px] laptopM:py-[150px] laptopM:px-[200px] laptopL:px-[250px] screen-1170px:px-[300px] laptopS:px-[150px] laptop:px-[50px] tabletL:flex-col tabletM:px-[30px] tabletL:py-[100px] mobileL:px-[20px] grid grid-cols-2 gap-[100px] laptopS:grid-cols-1 tabletL:pb-[0px]">
                        <div>
                            <h1 className="text-[40px] laptopS:text-[34px]">About<br/>Cipta.dev</h1>
                            <p className="mt-[40px] w-[450px] tabletL:w-full text-[16px] leading-loose tabletM:text-[15px]">
                            I'm Gunawan Cipta, Full Stack Designer based in Indonesia. With {dt.getFullYear() - firstExperience}+ years of experience, I specialize in JavaScript and frameworks, delivering efficient, scalable code.
                            <br/><br/>
                            Currently developing <Goto href="https://jualdesign.com">jualdesign.com</Goto> and <Goto href="https://ngetopup.com">ngetopup.com</Goto>
                            Let's collaborate and bring your vision to life!
                            </p>

                            <div className="mt-[40px] tabletL:mt-[70px] grid grid-cols-2 gap-10">
                                <p className="text-[#8A8A8A] text-[14px]">EST. <br/>2021</p>
                                <p className="text-[#8A8A8A] text-[14px]">{dt.getFullYear() - firstExperience}+ Years <br/> Experience</p>
                            </div>
                        </div>

                        <div className="h-[550px] laptopM:h-[500px] tabletL:h-fit rounded-[30px] overflow-hidden relative flex items-center justify-center">
                            <div className="py-[15px] px-[20px] bg-white/20 backdrop-blur-2xl absolute bottom-4 left-4 rounded-[15px] overflow-hidden z-10">
                                <p className="text-white text-[15px]">Gunawan Cipta.</p>
                            </div>
                            <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }} >
                                <Image src={me} alt="me" /> 
                            </motion.div>
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
                        <p className="w-[500px] tabletM:w-full laptop:px-[50px] tabletM:px-[30px] leading-loose tabletM:text-[15px]">
                            I was a self-taught <Goto href="https://instagram.com/sincetwomuch">Graphic Designer</Goto> who love to design many cool things and trying something new with an album cover, poster or even brutalism design. At that time it was the best thing that I ever did! Overtime, I was discovered another field in the design … It was UI & UX Design.
                            <br/><br/>
                            As time goes by I learned a lot of things in UI & UX Design and starting to creating website design and learned from it. It was great until I started to thinking about to turn my design to be Interactive so I can do something with it. That’s why I’m thinking about being a Web Developer.
                            <br/><br/>
                            At this time I started to building web apps like Lifevy, <Goto href="https://github.com/woicip/squarepass">SquarePass</Goto> and <Goto href="https://github.com/woicip/only-me">OnlyMe</Goto>. It’s really fun when you can make a digital product based on your ideas and thoughts. Till now.
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
            </motion.main>
        </AnimatePresence>
    )
}