import Image  from "next/image"
import Link from "next/link"
import classNames from "classnames"
import { motion } from "framer-motion"

export default function Project(props: any){

    const { name, sub, work, link, techs, thumbnail, layoutId } = props

    return (
        <motion.div transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }} layoutId={layoutId}>
            <Link href={link} className="relative cursor-pointer">
                <motion.div className="py-[15px] px-[20px] mobileL:px-[15px] mobileL:py-[10px] rounded-[15px] absolute top-[20px] left-[20px] mobileL:top-[15px] mobileL:left-[15px] z-10 flex items-center bg-white/30 backdrop-blur-lg border border-white/20">
                    { techs.map((tech: any, index: number) => {
                        const className = classNames(`w-[20px] ${index+1 === techs.length ? "" : "mr-[20px] mobileL:mr-[15px]"}`)
                        return <Image src={tech} key={index} alt="icon" className={className} />
                    }) }
                </motion.div>

                <motion.div className="h-[450px] laptopM:h-[400px] laptopL:h-[400px] laptopS:h-[350px] screen-1170px:h-[390px] laptop:h-[550px] tabletL:h-[450px] tabletM:h-[300px] mobileL:h-[250px] rounded-[30px] mobileL:rounded-[25px] overflow-hidden bg-[#D9D9D9]">
                    <motion.div 
                        whileHover={{ scale: 1.8 }}
                        transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >   
                        <Image src={thumbnail} alt="rabfire" className="w-full h-full mobileL:scale-[1.1]" />
                    </motion.div>
                </motion.div>

                <div className="py-[20px] px-[20px] laptopS:px-0 mobileL:py-[15px] mobileL:px-[20px] flex items-start justify-between">
                    <div>
                        <h1>{name}</h1>
                        <p className="text-[#868686] font-light mobileL:text-[14px]">{sub}</p>
                    </div>

                    <p className="text-[14px] font-light mobileL:hidden">{work}</p>
                </div>
            </Link>
        </motion.div>
    )
}