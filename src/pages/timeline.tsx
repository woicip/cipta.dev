import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { m, motion, AnimatePresence } from "framer-motion"

// components
import Footer from "@/components/Navigation/Footer"
import CallToAction from "@/components/Navigation/CallToAction"

// styles
import HeadlineContainer from "@/styles/HeadlineContainer"

// assets
import ciptaMeta from '@/assets/cipta-meta.png'
import githubMark from '@/assets/icons/github-mark.svg'
import designupdate from '@/assets/timeline/designupdate.png'

function Separate(){
    return (
        <div className="px-[50px] tabletM:px-[20px]">
            <div className="w-[2px] h-[100px] bg-[#F1F1F1]"></div>
        </div>
    )
}

function YearSeparator({ year }: { year: number }){
    return (
        <div className="py-[15px] px-[30px] bg-[#F1F1F1] rounded-[15px] border border-[#E6E6E6]">
            <p className="font-light text-[14px] text-[#A0A0A0]">YEAR</p>
            <h1 className="text-[22px]">{year}</h1>
        </div>
    )
}

function Thread(props: any){

    const { day, date, title } = props;

    return (
        <div className="h-full px-[50px] tabletM:pr-0 tabletM:px-[20px] grid grid-cols-[40px_1fr] gap-5 laptopM:gap-2 tabletM:gap-0">
            <div className="h-full relative">
                <div className="w-[10px] h-[10px] bg-[#555555] absolute rounded-full top-[20px] left-[-4px] tabletL:top-[5px]"></div>
                <div className="w-[2px] h-full bg-[#F1F1F1]"></div>
            </div>

            <div className="grid grid-cols-[140px_1fr] tabletL:grid-cols-1 gap-5 laptopM:gap-2">
                <p className="text-[14px] text-[#797979]">{day} <br className="tabletL:hidden" /> {date}</p>
                <div className="w-full pb-[150px] tabletL:mt-[10px]">
                    <h1 className="text-[20px]">{title}</h1>
                    <p className="w-[500px] laptopS:w-full mt-[30px] tabletL:mt-[15px] text-[#767676] text-[15px] leading-loose">{props.children}</p>
                </div>
            </div>
        </div>
    )
}

function End(){
    return (
        <div className="h-full px-[50px] tabletM:px-[20px] grid grid-cols-[40px_1fr] gap-5">
            <div className="h-full relative">
                <div className="px-[20px] py-[12px] bg-[#F1F1F1] absolute rounded-full left-[-45px] tabletM:left-[-30px] whitespace-nowrap">
                    <p className="text-[14px]">The end</p>
                </div>
                <div className="w-[2px] h-[300px] border border-dashed"></div>
            </div>
        </div>
    )
}

export default function Timeline(props: any){
    return (
        <AnimatePresence>
            <m.main
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Head>
                    <title>Timeline</title>
                    <meta name="description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Timeline" />
                    <meta property="og:url" content="https://cipta.dev" />
                    <meta property="og:description" content="Developer who love to code, design & building digital product. Specialize in Typescript, Next.js, Tailwind CSS & Node.js" />
                    <meta property="og:image" content="https://cipta.dev/cipta-meta.png" />
                </Head>

                <div className="mt-[100px]">
                    <div className={HeadlineContainer}>
                        <div>
                            <h1 className="text-[40px] laptopS:text-[34px]">What you do in life,<br className="tabletM:hidden"/> echoes in eternity.</h1>
                            <p className="mt-[20px] tabletM:mt-[10px] text-[13px] italic font-light text-[#A3A3A3]">- Marcus Aurelius</p>
                        </div>

                        <div className="mt-[20px]">
                            <p className="font-light text-[16px] leading-normal">
                                A place where you can see what I'm <br/>
                                working on and my random life updates.
                            </p>
                        </div>
                    </div>

                    <div className="px-[450px] laptopM:px-[200px] screen-1170px:px-[300px] laptopS:px-[150px] laptop:px-[50px] tabletL:flex-col tabletM:px-[30px] tabletL:py-[100px] mobileL:px-[20px]">
                        <YearSeparator year={2023} />
                        <Separate />
                        <Thread day="Friday" date="July 14, 2023" title="Cipta.dev Website Update 2.0 🎉">
                            In January 17th, 2023 … Portfolio website 1.0 was released! It was a simple web portfolio where just displaying important information but after I discovering in my website I found that the website is lack of “text content” and “user experience”. 
                            <br/><br/>
                            The website has no consistency between projects contents, no Home menu, about page has lack of story, the image of the project is not relevant to the project, lack of story telling and social media contacts.
                            <br/><br/>
                            That&apos;s why I was thinking about to start again from beginning and craft my web portfolio to be has well-written content, has context between component and improving user experience.
                            <br/><br/>
                            And here you go. Website Update 2.0 🎉

                            <div className="h-fit w-fit border mt-[30px] rounded-[20px] tabletM:rounded-[15px] overflow-hidden">
                                <Image src={designupdate} alt="thumbnail" />
                            </div>
                        </Thread>

                        <Thread day="Tuesday" date="February 07, 2023" title="Frontend Developer @Rabfire">
                            At this day I was joined to Rabfire team as a Frontend Developer who have responsibility to create User Interface from the design given by team and collaborating with the Backend team to integrate with REST API given. Powered with Next, Redux and Tailwind CSS to built the project.
                        </Thread>

                        <Thread day="Saturday" date="January 07, 2023" title="Totallin (Planning & Thoughts)">
                            So, I have several problem these days where I need some app/tools that can track my income & Outcome so I can evaluate my financial.
                            <br/><br/>
                            I'm thinking about to make mobile app where I can input my income & outcome and then the app will generate whether I am a money spender or I am a money saver.
                        </Thread>

                        <Thread day="Tuesday" date="January 03, 2023" title="Specky.site (Planning & Thoughts)">
                            Wanna show off your PC specs ? Or you just wanna write a PC specs and then give it to a PC seller ?
                            <br/> <br/>
                            Today I'm thinking about this mini project because it'll be fun tho!
                        </Thread>
                        
                        <YearSeparator year={2022} />
                        <Separate />
                        <Thread day="Saturday" date="December 20, 2022" title="Frontend Developer & Designer @ASCORP">
                            At this time I got cool project which is to make a design of a company profile and developing a company profile website for Entertainment agency named ASCORP.
                        </Thread>

                        <Thread day="Saturday" date="November 12, 2022" title="IMAGYNATION">
                            IMAGYNATION is a REST API for developer to test their UI Prototype, UI Testing or even any other use case using IMAGYNATION API.
                            <br/><br/>
                            The REST API providing developers with some dummies data like user data, posts data, blogs data etc. How about the docs ? You can visit the web, I'm still working on it but the API itself is ready to use.
                            <br/><br/>
                            My current problem now is finding a free hosting to host my SQL database and host the API.

                            Contribution are open.

                            <Link href="https://github.com/woicip/imagynation-api" className="tabletL:w-full w-fit overflow-auto mt-[30px] py-[15px] px-[20px] rounded-2xl text-[#333] border flex items-center justify-start">
                                <Image src={githubMark} alt="icon" className="w-[20px] mr-[20px]" />
                                Imagynation API
                            </Link>
                            
                            <Link href="https://github.com/woicip/imagynation-docs" className="tabletL:w-full w-fit overflow-auto mt-[20px] py-[15px] px-[20px] rounded-2xl text-[#333] border flex items-center justify-start">
                                <Image src={githubMark} alt="icon" className="w-[20px] mr-[20px]" />
                                Imagynation Docs
                            </Link>
                        </Thread>

                        <Thread day="Monday" date="July 11, 2022" title="Dev Quiz with Bun.js">
                            So the context is at that time Bun JS is launched to public but still not stable yet. A lot of people saying that Bun JS is blazingly fast, said people on Twitter.
                            <br/><br/>
                            Personally ... I love Bun ❤ because I don't need to wait "Starting the development server ..." anymore when I want to run the React project using Bun. It just took 1 ms to start the development server!
                            <br/><br/>
                            So with that knowledge, I was started to build Dev Quiz using React and made the API using Bun to handling the HTTP Request & Response.
                        </Thread>

                        <Thread day="Sunday" date="July 10, 2022" title="SquarePass (Archived)">
                            Well... basically a web app to store your account information
                            <br/><br/>
                            This is good for you to keep important credentials like Email, Password, Secret Key but you don't have a platform to keep your credentials ?
                            <br/><br/>
                            My current problem now is finding a free hosting to host my SQL database and host the API.
                        </Thread>

                        <YearSeparator year={2021} />
                        <Separate />

                        <Thread day="Thursday" date="October 20, 2022" title="Livefy (Archived)">
                            Do you ever feel like you have forgotten something in the past ? But you can't remember what is going on in the past right ?
                            <br/><br/>
                            So I made this web app to keep track of what you doing in a day.
                            <br/><br/>
                            Don't worry I'm not gonna collect of your data on the app because I also gonna use this web app for my daily life to keep track of what I'm doing in a day.
                        </Thread>

                        <End />
                    </div>
                </div>

                <CallToAction />
                <Footer />

            </m.main>
        </AnimatePresence>
    )
}