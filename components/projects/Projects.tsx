import React, { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import PageTransition from '@/components/page-transition'

import { data } from './data'

import styles from './styles.module.sass'

const Projects: React.FC = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.1 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    }

    return (
        <section ref={containerRef} className={styles.projectsContainer}>
            <PageTransition>
                <motion.div
                    className={styles.projectsGrid}
                    variants={containerVariants}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {data?.map((item) => (
                        <motion.div
                            key={`project-${item.link}`}
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className={`${styles.projectCard} ${item.link !== '#' ? styles.liveProjectCard : ''}`}
                        >
                            <motion.div
                                className={styles.iconWrapper}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.link !== '#' ? (
                                    <Link
                                        href={item.link}
                                        title={item.title}
                                        target={'_blank'}
                                    >
                                        <div className={styles.iconContainer}>
                                            {item.icon ? (
                                                <Icon name={item.icon} />
                                            ) : item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={64}
                                                    height={64}
                                                    className={styles.projectIconImage}
                                                />
                                            ) : null}
                                        </div>
                                    </Link>
                                ) : (
                                    <div className={styles.iconContainer}>
                                        {item.icon ? (
                                            <Icon name={item.icon} />
                                        ) : item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={64}
                                                height={64}
                                                className={styles.projectIconImage}
                                            />
                                        ) : null}
                                    </div>
                                )}
                            </motion.div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.projectTitle}>{item.title}</h3>
                                
                                {item?.description && (
                                    <p className={styles.projectDescription}>
                                        {item.description}
                                    </p>
                                )}

                                {item.link !== '#' && (
                                    <motion.div
                                        className={styles.projectLink}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Icon name={iconNames.web} />
                                        <Link
                                            href={item.link}
                                            title={item.title}
                                            target={'_blank'}
                                        >
                                            View Project
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </PageTransition>
        </section>
    )
}

export default Projects
