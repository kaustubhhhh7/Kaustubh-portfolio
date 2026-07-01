import React, { useRef } from 'react'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

import photo from './photo.jpg'

import styles from './styles.module.sass'

/**
 * The About component displays information about the developer, including a photo and a brief description.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
export const About: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: -30 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <motion.section
            ref={ref}
            className={styles.aboutSection}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h2 className={'pageTitle'} variants={titleVariants}>
                {'About me'}
            </motion.h2>
            <div className={styles.aboutContainer}>
                <motion.div variants={imageVariants} whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                    <Image
                        src={photo}
                        alt={'Photo of me'}
                    />
                </motion.div>
                <motion.div variants={textVariants}>
                    <motion.p variants={paragraphVariants}>
                        {
                            'Programming is both my profession and my hobby, which is why I truly enjoy my work as a developer. With over 19+ years of experience, I have the skills to tackle a wide range of challenges, from building interactive web applications to leading development teams.'
                        }
                    </motion.p>
                    <motion.p variants={paragraphVariants}>
                        {
                            "Outside of coding, my hobbies are a big part of my life. I'm an amateur astronomer and have built a fully automated remote observatory that I can control from anywhere in the world. I also love traveling, especially hiking and exploring nature with my family. My children are a constant source of inspiration, motivating me both in life and in work."
                        }
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About
