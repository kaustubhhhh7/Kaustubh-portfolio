import { StaticImageData } from 'next/image'

import { Backend, CMS, DevOps, Frontend, SkillsType, Testing } from '@/data/skills'

import imageA from '@/components/EXP/A.png'
import imageB from '@/components/EXP/B.png'
import imageC from '@/components/EXP/C.png'
import imageD from '@/components/EXP/D.png'
import imageE from '@/components/EXP/E.png'

export type RoleSkillsType = {
    area: string
    stack: SkillsType[]
}

export type ExperienceType = {
    period: string[]
    role: string
    duties: string
    image?: string | StaticImageData
    skills?: RoleSkillsType[]
}

export const experience: ExperienceType[] = [
    {
        period: ['04/01/2025', '06/30/2025'],
        role: 'DevTech Intern',
        duties: 'Completed a successful internship at Quant Mutual Fund (Quant Money Managers Ltd.) as part of the DevTech team. Worked under the guidance of Mr. Nitesh Jadhav, contributing to impactful projects that strengthened technical expertise, problem-solving abilities, and collaborative skills. Gained valuable experience in a dynamic learning environment with mentorship and support from the entire Quant team.',
        image: imageD
    },
    {
        period: ['12/01/2024'],
        role: 'Smart India Hackathon 2024 - Top 5 Finalist',
        duties: 'Achieved Top 5 position in our problem segment at the SIH 2024 Grand Finale held at IIT Tirupati. Represented team TechWorkerrs with exceptional teamwork and dedication. Grateful for the guidance from mentors and this incredible learning experience that showcased our technical skills and innovative problem-solving approach.',
        image: imageB
    },
    {
        period: ['11/01/2024'],
        role: 'Internal Smart India Hackathon 2024 - First Prize Winner',
        duties: 'Secured First Prize at the Internal Smart India Hackathon 2024 held at Vidyalankar School of Information Technology with team TechWorkers. Created the Innovation Institute Portal through intense brainstorming, coding, and collaboration. Achieved success through hard work, dedication, and innovative thinking in a competitive environment.',
        image: imageC
    },
    {
        period: ['10/01/2024'],
        role: 'Research Paper Presentation Conference - Graphic Head',
        duties: 'Successfully organized and led the Research Paper Presentation Conference as Graphic Head for the CSI Student Branch. Brought together bright minds from various institutions, leading to engaging discussions and innovative ideas. Managed a dedicated team and volunteers, ensuring the event\'s success through collaboration and hard work.',
        image: imageA
    },
    {
        period: ['09/01/2024'],
        role: 'Automation EXPO 2024 - Student Participant',
        duties: 'Attended the 17th India International Trade Show at Bombay Exhibition Centre, Mumbai. Explored groundbreaking innovations from industry leaders including Yamaha, Taiwan Excellence, Finder, Epson, HIKROBOT, Beckhoff, Reer, Siemens, and Keyence. Gained insights into smart automation devices, IoT gateways, edge computing, data analytics, and industrial connectivity solutions.',
        image: imageE
    }
]
