import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'

import PageTransition from '@/components/page-transition'
import TechCarousel from '@/components/tech-carousel'
import { techPhotos } from '@/components/tech-carousel/data'
import { experience, ExperienceType } from '@/data/experience'
import { formatDate } from '@/utils/date'

import styles from './styles.module.sass'

/**
 * The Experience component displays a list of professional experiences, including roles, dates, duties, and skills.
 *
 * @component
 * @example
 * return (
 *   <Experience />
 * )
 */
const Experience: React.FC = () => {
    const headingRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null)
    const isInView = useInView(headingRef, { once: false, amount: 0.3 })

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedExperience) {
                setSelectedExperience(null)
            }
        }

        if (selectedExperience) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleEscape)
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            window.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [selectedExperience])

    const headingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0,
                delayChildren: 0
            }
        }
    }

    const techSpanVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    const experiencesSpanVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section
            ref={sectionRef}
            className={styles.experienceSection}
        >
            <motion.div
                ref={headingRef}
                className={styles.sectionHeading}
                variants={headingVariants}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.span variants={techSpanVariants}>Tech</motion.span>
                <motion.span variants={experiencesSpanVariants}>Experiences</motion.span>
            </motion.div>
        <div className={styles.experiencePanel}>
            <div className={styles.topSection}>
                <div className={styles.certificationsSection}>
                    <h3 className={styles.certificationsHeading}>Trainings and Certifications</h3>
                    <ul className={styles.certificationsList}>
                        <li className={styles.certificationItem}>
                            <span className={styles.checkmark}>✓</span>
                            <span className={styles.certificationText}>Career Essentials in Generative AI by Microsoft and LinkedIn</span>
                        </li>
                        <li className={styles.certificationItem}>
                            <span className={styles.checkmark}>✓</span>
                            <span className={styles.certificationText}>Introduction to Artificial Intelligence</span>
                        </li>
                        <li className={styles.certificationItem}>
                            <span className={styles.checkmark}>✓</span>
                            <span className={styles.certificationText}>TCS ION Career Edge - Young Professional</span>
                        </li>
                        <li className={styles.certificationItem}>
                            <span className={styles.checkmark}>✓</span>
                            <span className={styles.certificationText}>Certification for the completion of C training</span>
                        </li>
                        <li className={styles.certificationItem}>
                            <span className={styles.checkmark}>✓</span>
                            <span className={styles.certificationText}>BLENDER - Certificate of Completion</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.carouselPanel}>
                    <TechCarousel
                        photos={techPhotos}
                        variant='sidebar'
                    />
                    <div className={styles.graphicsContainer}>
                        <div className={styles.graphicIconsWrapper}>
                            <div className={styles.graphicIcons}>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(81, 203, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <path d='M12 2L2 7l10 5 10-5-10-5z' />
                                        <path d='M2 17l10 5 10-5' />
                                        <path d='M2 12l10 5 10-5' />
                                    </svg>
                                </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(123, 231, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <circle cx='12' cy='12' r='10' />
                                        <path d='M12 6v6l4 2' />
                                    </svg>
                                </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(81, 203, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
                                        <polyline points='3.27 6.96 12 12.01 20.73 6.96' />
                                        <line x1='12' y1='22.08' x2='12' y2='12' />
                                    </svg>
                                </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(81, 203, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <polyline points='16 18 22 12 16 6' />
                                        <polyline points='8 6 2 12 8 18' />
                                    </svg>
                                </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(123, 231, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <ellipse cx='12' cy='5' rx='9' ry='3' />
                                        <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' />
                                        <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' />
                                    </svg>
                            </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(81, 203, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
                                        <line x1='8' y1='21' x2='16' y2='21' />
                                        <line x1='12' y1='17' x2='12' y2='21' />
                                    </svg>
                                </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(123, 231, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <circle cx='12' cy='12' r='3' />
                                        <path d='M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24' />
                                    </svg>
                                </div>
                                <div className={styles.iconItem}>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='rgba(81, 203, 255, 0.6)'
                                        strokeWidth='2'
                                    >
                                        <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                                        <polyline points='14 2 14 8 20 8' />
                                        <line x1='16' y1='13' x2='8' y2='13' />
                                        <line x1='16' y1='17' x2='8' y2='17' />
                                        <polyline points='10 9 9 9 8 9' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardsSection}>
                <PageTransition>
                    <ul className={styles.experienceList}>
                        {experience?.map((item) => (
                            <li
                                className={styles.experienceRole}
                                key={`${item.period?.[0]}-${item.period?.[1]}`}
                                onClick={() => setSelectedExperience(item)}
                            >
                                {item.image && (
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={item.image}
                                            alt={item.role}
                                            fill
                                            className={styles.cardImage}
                                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                        />
                                    </div>
                                )}
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardTags}>
                                                <span className={styles.tag}>Experience</span>
                                            </div>
                                            <h3 className={styles.role}>{item.role}</h3>
                                        </div>
                            </li>
                        ))}
                    </ul>
                </PageTransition>
            </div>
            <AnimatePresence>
                {selectedExperience && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedExperience(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={styles.closeButtonWrapper}>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setSelectedExperience(null)}
                                    aria-label='Close'
                                >
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                    >
                                        <path
                                            d='M18 6L6 18M6 6l12 12'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </button>
                            </div>
                            {selectedExperience.image && (
                                <div className={styles.modalImageContainer}>
                                    <Image
                                        src={selectedExperience.image}
                                        alt={selectedExperience.role}
                                        fill
                                        className={styles.modalImage}
                                        sizes='100vw'
                                    />
                                </div>
                            )}
                            <div className={styles.modalTextContent}>
                                <div className={styles.modalTags}>
                                    <span className={styles.tag}>Experience</span>
                                </div>
                                <div className={styles.modalDate}>
                                    {selectedExperience.period?.[0] && formatDate(selectedExperience.period[0], 'DD MMMM YYYY').toUpperCase()}
                                    {selectedExperience.period?.[1] && ` - ${formatDate(selectedExperience.period[1], 'DD MMMM YYYY').toUpperCase()}`}
                                </div>
                                <h2 className={styles.modalRole}>{selectedExperience.role}</h2>
                                <div className={styles.modalDuties}>{selectedExperience.duties}</div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </section>
)
}

export default Experience
