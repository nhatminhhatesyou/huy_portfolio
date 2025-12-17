"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsGithub } from "react-icons/bs"
import { LuLink } from "react-icons/lu";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "TikTok",
        title: "Global Realty VN (@globalrealtyvietnam)",
        role: [
            "Content Creator / Video Producer / Brand Communication"      
        ],
        objectives: [
            "Build a TikTok channel providing accessible information about the Australian real estate market for Vietnamese audiences in Melbourne and Vietnam.",
            "Increase brand awareness for Global Realty VN.",
            "Create short, educational, easy-to-understand, and engaging content."
            ],
        responsibilities: [
            "Ideated weekly content and topic directions across various real estate categories (apartments, townhouses, investment, etc.).",
            "Produced end-to-end videos: scriptwriting, filming, editing, color grading, and optimizing the opening hook.",
            "Managed posting schedule, hashtag strategy, TikTok insights tracking, and performance optimization.",
            "Collaborated with the sales team to produce videos aligned with trending projects and viewer demand.",
        ],
        results: [
            "Grew the channel from 0 to 1.1K followers in the early phase.",
            "Achieved a total of 5.4K likes across the channel.",
            "Multiple videos reached 10K–15K views (top video: 15K views).",
            "Average performance: 1,000–4,000 views per video, depending on topic.",
            "Improved Video Completion Rate (VTR) through hook and caption optimization.",
            "Increased organic leads via TikTok inbox for the sales team"
            ],
        highlights: [
                    {
                        title: "Should You Invest in Melbourne Real Estate? → 11.3k views",
                        url: "https://www.tiktok.com/@globalrealtyvietnam/video/7427783689586724104?is_from_webapp=1&sender_device=pc&web_id=7580803846848955911",
                    },
                    {
                        title: "Balut in Melbourne? → 15k views",
                        url: "https://www.tiktok.com/@globalrealtyvietnam/video/7434849732276653330?is_from_webapp=1&sender_device=pc&web_id=7580803846848955911",
                    },
                    {
                        title: "New Project Introductions: Aspire → 12K+ views",
                        url: "https://www.tiktok.com/@globalrealtyvietnam/video/7438178920031096072?is_from_webapp=1&sender_device=pc&web_id=7580803846848955911",
                    },
                    {
                        title: "New Project Introductions: West Side Place → 12K+ views",
                        url: "https://www.tiktok.com/@globalrealtyvietnam/video/7440772623337868552?is_from_webapp=1&sender_device=pc&web_id=7580803846848955911",
                    },
                    {
                        title: "Australian Real Estate Basics for Beginners → >1K views/video",
                        url: "https://www.tiktok.com/@globalrealtyvietnam/video/7430387796436700434?is_from_webapp=1&sender_device=pc&web_id=7580803846848955911",
                    },
                    ],
        stack: [
            // { name: "Capcut" },
        ],
        image: '/assets/work/globalrealty.png',
        live: 'https://www.tiktok.com/@globalrealtyvietnam',
        // github: '',
    },
    {
        num: "02",
        category: "Youtube",
        title: "Minh An Computer – Product & Gaming Gear",
        role: [
            "Content Creator / Video Producer"      
        ],
        objectives: [
            "Produced short-form videos and product introduction content for Minh An Computer, focusing on gaming gear, PC accessories, and tech products."
            ],
        responsibilities: [
            "Created short videos and promotional clips to showcase new gaming gear and tech products.",
            "Scripted, filmed, and edited product intro videos optimized for social platforms.",
            "Ensured visual consistency and engaging storytelling to highlight key product features.",
        ],
        results: [
            "Delivered multiple high-engagement short videos for product launches.",
            "Improved visibility and awareness of new gaming gear among target audiences.",
            ],
        highlights: [
                    {
                        title: "Góc máy Noel tại Minh An Computer có gì?",
                        url: "https://youtube.com/shorts/phL9rHVY-xc?si=6qzWklAJgGUirsYJ",
                    },
                    {
                        title: "Săn sale 12-12 tại Minh An và cái kết :))",
                        url: "https://www.youtube.com/shorts/_Ymx7d95YSg",
                    },
                    ],
        stack: [
            // { name: "Capcut" },
        ],
        image: '/assets/work/minhancomp.png',
        live: 'https://www.youtube.com/@MinhAnComputer',
        // github: '',
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-3"
        >
            <div className="container mx-auto">
                <div className="flex flex-col ">
                    <div className="w-full  flex flex-col  order-2 ">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num*/}
                            <div className="flex justify-center mb-2">
                                <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                            </div>
                            {/* project category */}
                            <div className="flex justify-center mb-2">
                                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.category} project
                                </h2>
                            </div>
                            {/* project title */}
                            <div className="flex justify-center mb-2">
                                <h2 className="text-[32px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                                    "{project.title}"
                                </h2>
                            </div>
                            {/* project role */}
                            <div className="text-white/60">
                                <p className="font-semibold text-white">Role</p>
                                <ul className="list-disc list-inside ml-2 space-y-1">
                                    {project.role}
                                </ul>
                            </div>
                            {/* project objectives */}
                            <div className="text-white/60">
                                <p className="font-semibold text-white">Objectives</p>
                                <ul className="list-disc list-inside ml-2 space-y-1">
                                    {project.objectives.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* project responsibilities */}
                            <div className="text-white/60">
                                <p className="font-semibold text-white">Responsibilities</p>
                                <ul className="list-disc list-inside ml-2 space-y-1">
                                    {project.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* project results */}
                            <div className="text-white/60">
                                <p className="font-semibold text-white">Results</p>
                                <ul className="list-disc list-inside ml-2 space-y-1">
                                    {project.results.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* project highlights */}
                                <div className="text-white/60">
                                <p className="font-semibold text-white">Highlights</p>

                                <ul className="list-disc pl-5 space-y-4 mt-2">
                                    {project.highlights.map((h, index) => (
                                    <li key={index}>
                                        
                                        <div className="text-white/80">
                                        <Link
                                        href={h.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-accent hover:text-primary transition-colors"
                                        >
                                        <LuLink className="text-base" />
                                        
                                        </Link>
                                            <span className="font-medium">“{h.title}”</span>
                                        </div>

                                        
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            {/* stack */}
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* link project button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip >
                                            <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <LuLink className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Link project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                {/* <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full ">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className=" mb-12 gap-2"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[480px] relative group flex justify-center items-center ">
                                            {/* overlay */}
                                            <div
                                                className="absolute top-0 bottom-0 w-full h-full z-10"
                                            >

                                            </div>
                                            {/* image */}
                                            <div className="relative h-full w-full bg-white/20 rounded-2xl overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-contain rounded-2xl"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between "
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}

export default Work