import Image from 'next/image'
import Link from 'next/link'
import logoBlack from '@/assets/icons/cipta-logo-black.svg'

// services
import useLocalTime from '@/services/useLocalTime'

export default function Footer(props: any){

    const localTime = useLocalTime() as any

    return (
        <div className="mt-[100px] py-[100px] px-[400px] laptopM:px-[100px]">
            <div className="flex items-start justify-between">
                <div>
                    <Image src={logoBlack} alt="logo" />
                    <p className="mt-[15px] text-[15px] text-[#8A8A8A]">Passionate Full Stack <br/> Designer</p>
                </div>

                <div className="grid grid-cols-3 gap-[60px]">
                    <div>
                        <h1 className="text-black font-medium mb-[20px]">Contact</h1>
                        <Link href="https://wa.me/6285782210951?text=%22Hello! I'm here to saying hi 🖐%22" target='_blank' className="mb-[5px] text-[15px] font-light text-[#8A8A8A] block hover:underline transition-all">WhatsApp</Link>
                        <Link href="imessage://woicipta@gmail.com" target='_blank' className="mb-[5px] text-[15px] font-light text-[#8A8A8A] block hover:underline transition-all">iMessage</Link>
                        <Link href="https://t.me/travisfr" target='_blank' className="mb-[5px] text-[15px] font-light text-[#8A8A8A] block hover:underline transition-all">Telegram</Link>
                    </div>

                    <div>
                        <h1 className="text-black font-medium mb-[20px]">Social</h1>
                        <Link href="https://linkedin.com/in/gunawan-cipta-22a25621a" target='_blank' className="mb-[5px] block hover:underline transition-all text-[15px] font-light text-[#8A8A8A]">LinkedIn</Link>
                        <Link href="https://threads.net/woicip" target='_blank' className="mb-[5px] block hover:underline transition-all text-[15px] font-light text-[#8A8A8A]">Threads</Link>
                        <Link href="https://twitter.com/woicipta" target='_blank' className="mb-[5px] block hover:underline transition-all text-[15px] font-light text-[#8A8A8A]">Twitter</Link>
                        <Link href="https://github.com/woicip" target='_blank' className="mb-[5px] block hover:underline transition-all text-[15px] font-light text-[#8A8A8A]">GitHub</Link>
                    </div>

                    <div>
                        <h1 className="text-black font-medium mb-[20px]">Pages</h1>
                        <Link href="/timeline" className="mb-[5px] text-[15px] font-light text-[#8A8A8A] block hover:underline">Timeline</Link>
                        <Link href="/works" className="mb-[5px] text-[15px] font-light text-[#8A8A8A] block hover:underline">Works</Link>
                        <Link href="/about" className="mb-[5px] text-[15px] font-light text-[#8A8A8A] block hover:underline">About</Link>
                    </div>
                </div>
            </div>

            <div className="mt-[150px] flex items-center justify-between">
                <p className="text-[13px] text-[#8A8A8A]">Copyright © cipta.dev <br/>2022 - 2023</p>
                <p className="text-[13px] text-[#8A8A8A]">Part of <br/><Link href="https://kamideveloper.com" target='_blank' className="hover:underline transition-all">kamideveloper.com</Link></p>
                <p className="text-[13px] text-[#8A8A8A]">Local time {localTime.data?.utc_offset} <br/>{new Date(localTime.data?.unixtime * 1000).getHours().toString().padStart(2, '0')}.{new Date(localTime.data?.unixtime * 1000).getMinutes().toString().padStart(2, '0')} WIB</p>
            </div>
        </div>
    )

}