import React, { useEffect } from 'react'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import Experience from '@/components/experience'
import Icon from '@/components/icon'
import { IconTypes } from '@/components/icon/types'
import TechTicker from '@/components/tech-ticker'
import { update } from '@/update'

import styles from './styles.module.sass'

type FactType = {
    title?: string
    value?: string
}

type LinkType = {
    link: string
    label: string
    icon: IconTypes
}

const divisor = 1000 * 60 * 60 * 24 * 365.2421897
const birthTime = new Date('2005-02-07T00:00:00').getTime()

export const Introduce: React.FC = () => {
    const [myAge, setMyAge] = React.useState<string>('')
    const [showContactForm, setShowContactForm] = React.useState<boolean>(false)
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    })

    const dateUpdate = new Date(update).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
        year: 'numeric'
    })

    const tick = () => {
        const ageCalc = ((Date.now() - birthTime) / divisor).toFixed(9)
        setMyAge(ageCalc)
    }

    const factsList: FactType[] = [
        {
            title: 'My age',
            value: myAge
        },
        {
            title: 'Location',
            value: 'Mumbai, Maharashtra'
        },
        {
            title: 'Email',
            value: 'kaustubh7205@gmail.com'
        },
        {
            title: 'Mobile',
            value: '+91 8451851439'
        },
        {
            title: 'Updated',
            value: dateUpdate
        }
    ]

    const linksList: LinkType[] = [
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

    React.useEffect(() => {
        const timer = setInterval(() => tick(), 50)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (showContactForm) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [showContactForm])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission - you can add your email service here
        const mailtoLink = `mailto:kaustubh7205@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        // Reset form
        setFormData({ name: '', email: '', message: '' })
        setShowContactForm(false)
    }

    const heroVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const badgeVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    const headingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const spanVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
        }
    }

    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 0.6, delay: 0.4 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <section className={styles.introduceSection}>
            <motion.div
                className={styles.heroRow}
            initial='hidden'
            animate='visible'
                variants={heroVariants}
            >
                <div className={styles.heroPanel}>
                    <motion.div
                        className={styles.heroBadge}
                        variants={badgeVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div></div>
                        <span className={styles.heroBadgeLabel}>{'UNDERGRADUATE STUDENT'}</span>
                    </motion.div>
                    <motion.h1
                        className={styles.heroHeading}
                        variants={headingVariants}
                    >
                        <motion.span variants={spanVariants}>{'Kaustubh'}</motion.span>
                        <motion.span variants={spanVariants}>{'Ghadshi'}</motion.span>
                    </motion.h1>
                    <motion.div
                        className={styles.heroDivider}
                        variants={dividerVariants}
                    />
                    <motion.p
                        className={styles.heroTagline}
                        variants={itemVariants}
                    >
                        {'Majoring in Development Technologies — building functional, beautiful digital experiences.'}
                    </motion.p>
                    <motion.div
                        className={styles.links}
                        variants={itemVariants}
                    >
                        {linksList?.map((item) => (
                            <motion.div
                                key={`link-${item.link}`}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={item.link}
                                    title={item.label}
                                    target={'_blank'}
                                    className={styles.link}
                                >
                                    <Icon name={item.icon} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.button
                        className={styles.heroContactButton}
                        onClick={() => setShowContactForm(true)}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact me
                    </motion.button>
                    <motion.a
                        href="/resume.docx"
                        download="Kaustubh_Ghadshi_Resume.docx"
                        className={styles.heroResumeButton}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Resume
                    </motion.a>
                </div>

                <motion.aside
                    className={styles.sidePanel}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.ul
                        className={styles.factsList}
                        variants={heroVariants}
                    >
                        {factsList?.map(({ title, value }) => (
                            <motion.li
                                key={`fact-${title}`}
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className={styles.key}>{title}</div>
                                <div className={styles.value}>
                                    {title === 'Email' && value ? (
                                        <a href={`mailto:${value}`} className={styles.contactLink}>{value}</a>
                                    ) : title === 'Mobile' && value ? (
                                        <a href={`tel:${value.replace(/\s/g, '')}`} className={styles.contactLink}>{value}</a>
                                    ) : (
                                        value || ''
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className={styles.sideDescription}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className={styles.sideHeading}>{'About me'}</h3>
                        <p>
                            {
                                'I\'m a developer who enjoys building clean, efficient, and visually refined digital experiences. My interests span from interactive interfaces and graphics to understanding the deeper logic that powers systems. I\'m always experimenting with new technologies and techniques, constantly looking for ways to improve my craft. Beyond coding, I dive into design, space exploration, and hands-on tech projects that keep me curious and inspired.'
                            }
                        </p>
                    </motion.div>

                </motion.aside>
            </motion.div>

            <TechTicker />

            <div className={styles.infoPanel}>
                <div className={styles.description}></div>
                <Experience />
            </div>

            <AnimatePresence>
                {showContactForm && (
                    <motion.div
                        className={styles.contactModalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowContactForm(false)}
                    >
                        <motion.div
                            className={styles.contactModalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setShowContactForm(false)}
                                aria-label="Close"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <div className={styles.contactForm}>
                                <h3 className={styles.contactFormTitle}>Hello!</h3>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="e.g. John Smith"
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.formLabel}>Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="e.g. example@gmail.com"
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Let us know how we can help"
                                            className={styles.textarea}
                                            rows={5}
                                            required
                                        />
                                    </div>
                                    
                                    <button type="submit" className={styles.submitButton}>
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Introduce
