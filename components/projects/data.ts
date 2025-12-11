import { StaticImageData } from 'next/image'

import { IconTypes } from '@/components/icon/types'
import blenderIcon from '@/components/icons/blender.png'
import avatarImage from '@/components/img a/avatar.png'

type ProjectType = {
    link: string
    title: string
    icon?: IconTypes
    image?: StaticImageData
    description?: string
}

export const data: ProjectType[] = [
    {
        icon: 'startup',
        title: 'AYUSH Startup Registration Portal',
        link: '#',
        description:
            'Built a streamlined AYUSH startup registration portal with robust backend logic, schema design, routing, and role-based access. Implemented Express-based APIs, MongoDB integration and secure environment configuration. | Backend Developer | Smart India Hackathon 2024'
    },
    {
        icon: 'alumni',
        title: 'Alumni Portal',
        link: '#',
        description:
            'Developed an alumni connect portal enabling event updates, networking, donations, and project contributions to strengthen alumni–student engagement. Built using Core PHP, MySQL, HTML, CSS, and JavaScript. | Developer | Pillai College of Engineering, Hackathon 2024'
    },
    {
        image: blenderIcon,
        title: 'Isometric 3D Room Design',
        link: '#',
        description:
            'Created an isometric 3D room in Blender with detailed modeling, texturing, and lighting. Focused on realistic materials, scene composition, and high-quality rendering to showcase intermediate Blender skills.'
    },
    {
        icon: 'ai',
        title: 'Vehicle Mileage Prediction',
        link: '#',
        description:
            'Developed a vehicle mileage prediction model during an AI/ML internship using Python, Scikit-Learn, and Pandas. Built the full ML pipeline—from preprocessing to model training and evaluation—and achieved high prediction accuracy. | YBI Foundation | Python, Machine Learning'
    },
    {
        icon: 'shop',
        title: 'Computer Component Marketplace',
        link: 'https://pcsetup.netlify.app/',
        description:
            'Developed a full-stack e-commerce platform for browsing and purchasing PC hardware components. Implemented product filtering, sorting, secure checkout, and order management. Full-Stack E-Commerce Platform for PC Hardware'
    },
    {
        icon: 'agency',
        title: 'Core Agency',
        link: 'https://core123.netlify.app/',
        description:
            'Built a full-stack agency portfolio website with animated UI, service listings, project showcases, testimonials, and contact management for a professional digital presence. Full-Stack Agency Portfolio Website'
    },
    {
        icon: 'trees',
        title: 'Forest Rights Administration (FRA) Dashboard',
        link: 'https://hackathonfra.netlify.app',
        description:
            'Designed and built a digital dashboard for the Ministry of Tribal Affairs to streamline forest rights administration and monitoring. The platform improves rights management and strengthens oversight of tribal community resources. Ministry of Tribal Affairs'
    },
    {
        image: avatarImage,
        title: 'My Personal Interactive Developer Portfolio',
        link: '#',
        description:
            'Created a modern interactive portfolio with sleek UI, smooth animations, skill highlights, and project showcases, delivering a polished and responsive personal brand experience.'
    }
]
