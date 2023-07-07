import Link from "next/link"

export default function Goto(props: any){

    const { href } = props

    return (
        <Link href={href} target="_blank" className="p-[5px] px-[10px] underline pb-[3px] hover:bg-black hover:text-white rounded-md hover:no-underline transition-all">{props.children}</Link>
    )
}