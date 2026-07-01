import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import avatarImage from '@/components/img a/avatar.png'

import { menu } from './menu'

import styles from './styles.module.sass'

export const Header: React.FC = () => {
    const pathname = usePathname()
    
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    }

    return (
        <motion.header
            className={styles.header}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className={styles.navBar} variants={itemVariants}>
                <motion.div
                    className={styles.brand}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className={styles.brandIcon}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={avatarImage}
                            alt='Kaustubh'
                            width={38}
                            height={38}
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                    </motion.div>
                    <span className={styles.brandLabel}>{'Kaustubh'}</span>
                </motion.div>
                <nav className={styles.menu}>
                    {menu?.map((link) => {
                        const isActive = pathname === link.url

                        return (
                            <motion.div
                                key={link.url}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={link.url}
                                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                                >
                                    <span className={`${styles.label} ${isActive ? styles.navActive : ''}`}>{link.label}</span>
                                </Link>
                            </motion.div>
                        )
                    })}
                </nav>
            </motion.div>
        </motion.header>
    )
}

export default Header
