import React, { useRef } from 'react'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

import { IconTypes } from '@/components/icon/types'

import styles from './styles.module.sass'

const liveProjects: Array<{
    icon: IconTypes
    title: string
    link: string
    description: string
}> = [
    {
        icon: 'shop',
        title: 'Computer Component Marketplace',
        link: 'https://pcsetup.netlify.app/',
        description: 'Full-Stack E-Commerce Platform for PC Hardware'
    },
    {
        icon: 'agency',
        title: 'Core Agency',
        link: 'https://core123.netlify.app/',
        description: 'Full-Stack Agency Portfolio Website'
    },
    {
        icon: 'trees',
        title: 'Forest Rights Administration (FRA) Dashboard',
        link: 'https://hackathonfra.netlify.app',
        description: 'Ministry of Tribal Affairs'
    }
]

export const LiveProjects: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <motion.section
            ref={ref}
            className={styles.liveProjectsSection}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <h2 className={styles.liveProjectsTitle}>Live Projects</h2>
            <div className={styles.liveProjectsGrid}>
                {liveProjects.map((project) => (
                    <motion.div
                        key={project.link}
                        className={styles.liveProjectCard}
                        variants={itemVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            href={project.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.liveProjectLink}
                        >
                            <div className={styles.liveProjectContent}>
                                <h3 className={styles.liveProjectTitle}>{project.title}</h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default LiveProjects

