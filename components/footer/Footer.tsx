import React, { useRef } from 'react'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

import Icon from '@/components/icon'
import { IconTypes } from '@/components/icon/types'

import { menu } from '../header/menu'

import styles from './styles.module.sass'

const socialLinks: Array<{ icon: IconTypes; label: string; link: string }> = [
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kaustubh-g-3889212b9'
    },
    {
        icon: 'facebook',
        label: 'Facebook',
        link: 'https://www.facebook.com/share/1C1PpeHEz1/'
    },
    {
        icon: 'instagram',
        label: 'Instagram',
        link: 'https://www.instagram.com/_kaustubhh.7?igsh=MWx5b2I4dnE5YmQyNA=='
    }
]

export const Footer: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    }

    return (
        <motion.footer
            ref={ref}
            className={styles.footer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className={styles.inner}>
                <div className={styles.footerGrid}>
                    <motion.div className={styles.footerColumn} variants={itemVariants}>
                        <h3 className={styles.columnTitle}>Kaustubh Ghadshi</h3>
                        <p className={styles.tagline}>{'Curious & Caffeinated'}</p>
                        <p className={styles.description}>
                            {'Fullstack Developer passionate about building innovative digital experiences.'}
                        </p>
                    </motion.div>

                    <motion.div className={styles.footerColumn} variants={itemVariants}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.footerLinksList}>
                            {menu?.map((item) => (
                                <li key={`footer-${item.url}`}>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href={item.url}>
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div className={styles.footerColumn} variants={itemVariants}>
                        <h4 className={styles.columnTitle}>Connect</h4>
                        <div className={styles.socialLinks}>
                            {socialLinks?.map((item) => (
                                <motion.div
                                    key={`footer-social-${item.link}`}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={item.link}
                                        title={item.label}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                        aria-label={item.label}
                                    >
                                        <Icon name={item.icon} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer

