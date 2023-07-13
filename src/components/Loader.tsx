import Head from "next/head"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// assets
import ascorpThumbnail from '@/assets/projects/ascorp/ascorp-thumbnail.webp'
import rabfireThumbnail from '@/assets/projects/rabfire/rabfire-thumbnail.webp'
import wallpaper from '@/assets/projects/wallpaper.jpg'
import aiGenerated from '@/assets/projects/ai-generated.jpg'
import logo from '@/assets/icons/cipta-logo-black.svg'

export default function Loader(props: any){

    const { setLoader } = props;

    const variants = {
        show: {
            transition: {
                staggerChildren: 0.4
            }
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: "easeInOut",
                duration: 1.5
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: 200
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: [0.04, 0.62, 0.23, 0.98] }
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: "easeInOut",
                duration: 1.5
            }
        }
    }

    return (
        <AnimatePresence>
            <Head>
                <title>Cipta</title>
                <meta name="description" content="A person who like to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Cipta" />
                <meta property="og:url" content="https://cipta.dev" />
                <meta property="og:description" content="A person who like to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
            </Head>

            <motion.div initial="hidden" animate="show" exit="exit" variants={variants} 
                onAnimationComplete={() => setLoader(false)} 
                className="fixed w-screen h-screen bg-white top-0 z-[100] flex items-center justify-center">
                <motion.div variants={item} className="z-[90] absolute">
                    <Image src={logo} alt="logo" />
                    <motion.h1 layoutId="headline" className="mt-[20px] text-[35px] tabletL:text-[30px]">Passionate Full Stack <br/> Designer.</motion.h1>
                </motion.div>

                <motion.div layoutId="ascorp" variants={item} className="absolute left-[70px] top-[-20px] laptopL:left-[60px] laptopL:top-[70px] laptopM:top-[-10px] laptopM:left-[-60px] laptopS:top-[-80px] tabletL:top-[-30px] mobileL:top-[-90px] mobileL:left-[-250px] mobileS:left-[-250px]">
                    <Image src={ascorpThumbnail} alt="img" className="w-[430px]  rounded-[10px]" />
                </motion.div>

                <motion.div layoutId="rabfire" variants={item} className="absolute right-[70px] bottom-[-20px] laptopM:bottom-[-30px] laptopM:right-[50px] laptopS:right-[-10px] tabletL:bottom-[50px] tabletL:right-[-60px] tabletX:right-[-100px] mobileL:bottom-[-50px] mobileL:right-[-200px]">
                    <Image src={rabfireThumbnail} alt="img" className="w-[400px]  rounded-[10px]" />
                </motion.div>

                <motion.div variants={item} className="absolute top-[-40px] right-[-10px] laptopL:top-[-90px] laptopM:right-[-100px] laptopM:top-[-250px] laptopS:right-[-250px] mobileL:right-[-430px] mobileS:right-[-500px]">
                    <Image src={wallpaper} alt="img" className="w-[600px]  rounded-[10px]" />
                </motion.div>

                <motion.div variants={item} className="absolute bottom-[-200px] left-[180px] laptopM:left-[100px] laptopM:bottom-[-320px] laptopS:left-[-80px] tabletL:bottom-[-250px] mobileL:left-[-380px] mobileS:left-[-420px]">
                    <Image src={aiGenerated} alt="img" className="w-[500px]  rounded-[10px]" />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}