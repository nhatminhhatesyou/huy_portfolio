"use client"

import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeaftereffects, SiGoogleads } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { CapcutIcon } from "hugeicons-react";
import { FaMeta } from "react-icons/fa6";

import Image from "next/image"

//about data
const about = {
    title: "About me",
    description: "Hi, I’m Aaron Vu. I’m Vietnamese and currently open to job opportunities. With experience in finance and marketing, I bring a strong combination of analytical thinking and creative problem-solving to the work I do. I’m always excited to learn, collaborate, and contribute to teams where thoughtful strategy and creativity come together.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Aaron Vu",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+84) 963099235",
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ Years",
        },
        {
            fieldName: "Linkedin",
            fieldValue: "Quang Huy Vu",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Vietnamese",
        },
        {
            fieldName: "Email",
            fieldValue: "huy145632@gmail.com",
        },
        {
            fieldName: "Employment status",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Vietnamese",
        },
    ]
}
//experience data
const certifications = {
    icon: '',
    title: 'My certifications',
    description: 'Description',
    items: [
        {
            company: 'CFA Institute',
            title: 'CFA® Program - Completed Level 1',
            issue_date: '2023',
            image: '/assets/resume/cfa_badge.png'
        },
        {
            company: ' FHNW School of Business',
            title: 'Advanced Program in Banking and Finance',
            issue_date: '2023',
            image: '/'
        },
        {
            company: 'IDP',
            title: 'IELTS Academic - 7.0 Overall',
            issue_date: '2023',
            image: '/'
        },
    ],
}
//experience data
const experience = {
    icon: '',
    title: 'My experience',
    description: 'I have gained valuable experience in both finance and marketing alongside my academic studies. This combination has equipped me with a strong analytical mindset alongside creative and strategic skills.',
    items: [
        {
            company: 'Global Realty, Australia',
            position: 'Marketing Executive',
            duration: 'Oct 2024 - Feb 2025'
        },
        {
            company: 'Vietcombank, Vietnam',
            position: 'Credit risk Executive',
            duration: 'Jun 2022 - Aug 2022'
        },
        {
            company: 'Minh An Computer, Vietnam',
            position: 'Video Content Creator',
            duration: 'Oct 2021 - Jan 2022'
        },
    ]
}

//education data
const education = {
    icon: '',
    title: 'My education',
    description: 'I hold a Bachelor’s degree in .',
    items: [
        {
            institution: 'Foreign Trade University',
            degree: 'Bachelor of Banking and Finance - Advanced program',
            duration: '2019-2023'
        },
        {
            institution: 'The University of Melbourne',
            degree: 'Master of Management',
            duration: '2024-2026'
        },
    ]
}

//skills data
const skills = {
    title: "My skills",
    description: 'Description',
    skillList: [
        {
            icon: <SiAdobepremierepro />,
            name: "Adobe Premier",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Adobe Photoshop",
        },
        {
            icon: <SiAdobeaftereffects />,
            name: "Adobe After Effect",
        },
        {
            icon: <TbBrandOffice />,
            name: "Microshop Office",
        },
        {
            icon: <CapcutIcon
                size={48}
                strokeWidth={2}
            />,
            name: "Capcut",
        },
        {
            icon: <SiGoogleads />,
            name: "Google Ads",
        },
        {
            icon: <FaMeta />,
            name: "Meta Ads",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 px-3"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList
                        className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
                    >
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="certifications">Certifications</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-10 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* certifications */}
                        <TabsContent value="certifications" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certifications.description}</p>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {certifications.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.issue_date}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                    {/* cert photo */}
                                                    {/* <div className="relative h-[400px] lg:h-[200px] sm:h-[300px] md:h-[300px] w-full overflow-hidden rounded-2xl">
                                                        <Image
                                                            src={item.image}
                                                            fill
                                                            className="object-cover rounded-2xl"
                                                        />
                                                    </div> */}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[230px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent group-hover:text-7xl  transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume