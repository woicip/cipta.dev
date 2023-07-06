import Image  from "next/image"
import Link from "next/link"
import classNames from "classnames"

export default function Project(props: any){

    const { name, sub, work, link, techs, thumbnail } = props

    return (
        <Link href={link} className="relative cursor-pointer">
            <div className="py-[15px] px-[20px] rounded-[15px] absolute top-[20px] left-[20px] flex items-center bg-white/30 backdrop-blur-lg border border-white/20">
                { techs.map((tech: any, index: number) => {
                    const className = classNames(`w-[20px] ${index+1 === techs.length ? "" : "mr-[20px]"}`)
                    return <Image src={tech} key={index} alt="icon" className={className} />
                }) }
            </div>

            <div className="h-[450px] rounded-[30px] overflow-hidden">
                <Image src={thumbnail} alt="rabfire" />
            </div>

            <div className="py-[20px] px-[20px] flex items-start justify-between">
                <div>
                    <h1>{name}</h1>
                    <p className="text-[#868686] font-light">{sub}</p>
                </div>

                <p className="text-[14px] font-light">{work}</p>
            </div>
        </Link>
    )
}