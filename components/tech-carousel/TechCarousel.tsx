import React, { useEffect, useRef, useState } from 'react'

import Image, { StaticImageData } from 'next/image'

import styles from './styles.module.sass'

type TechPhoto = {
    src: string | StaticImageData
    alt: string
}

type TechCarouselProps = {
    photos?: TechPhoto[]
    variant?: 'full' | 'sidebar'
}

export const TechCarousel: React.FC<TechCarouselProps> = ({ photos = [], variant = 'full' }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying] = useState(true)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isSidebar = variant === 'sidebar'

    useEffect(() => {
        if (!isAutoPlaying || photos.length === 0) {
            return
        }

        const interval = setInterval(() => {
                setCurrentIndex((prev) => {
                    const next = (prev + 1) % photos.length
                    setIsTransitioning(true)
                    if (transitionTimeoutRef.current) {
                        clearTimeout(transitionTimeoutRef.current)
                    }
                    transitionTimeoutRef.current = setTimeout(() => {
                        setIsTransitioning(false)
                    }, 650)
                    return next
                })
        }, 2000) // Fast auto-play - changes every 2 seconds

        return () => {
            clearInterval(interval)
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current)
            }
        }
    }, [isAutoPlaying, photos.length])

    const changeSlide = (newIndex: number) => {
        if (isTransitioning || newIndex === currentIndex) {
            return
        }
        setIsTransitioning(true)
        setCurrentIndex(newIndex)
        // Keep auto-play enabled even after manual interaction
        if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current)
        }
        transitionTimeoutRef.current = setTimeout(() => {
            setIsTransitioning(false)
        }, 650)
    }

    const goToPrevious = () => {
        const newIndex = (currentIndex - 1 + photos.length) % photos.length
        changeSlide(newIndex)
    }

    const goToNext = () => {
        const newIndex = (currentIndex + 1) % photos.length
        changeSlide(newIndex)
    }

    const goToSlide = (index: number) => {
        changeSlide(index)
    }

    if (photos.length === 0) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.emptyState}>
                    <p>Tech experience photos will be displayed here</p>
                </div>
            </div>
        )
    }

    // Sidebar version with navigation arrows inside
    if (isSidebar) {
        return (
            <div className={`${styles.carouselContainer} ${styles.sidebar}`.trim()}>
                <div className={styles.carousel}>
                    <div className={styles.slidesContainer}>
                        <button
                            className={styles.sidebarNavButton}
                            onClick={goToPrevious}
                            aria-label='Previous photo'
                        >
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                            >
                                <path
                                    d='M15 18l-6-6 6-6'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                        <div
                            className={styles.slidesWrapper}
                            style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
                        >
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className={styles.slide}
                                >
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className={styles.image}
                                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                                            priority={index === currentIndex}
                                            loading={index === currentIndex ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className={styles.sidebarNavButton}
                            onClick={goToNext}
                            aria-label='Next photo'
                        >
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                            >
                                <path
                                    d='M9 18l6-6-6-6'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.carouselContainer}>
            <h3 className={styles.carouselTitle}>Tech Experiences</h3>
            <div className={styles.carousel}>
                <button
                    className={styles.navButton}
                    onClick={goToPrevious}
                    aria-label='Previous photo'
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <path
                            d='M15 18l-6-6 6-6'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>

                <div className={styles.slidesContainer}>
                    <div
                        className={styles.slidesWrapper}
                        style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
                    >
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className={styles.slide}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className={styles.image}
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                                        priority={index === currentIndex}
                                        loading={index === currentIndex ? 'eager' : 'lazy'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={styles.navButton}
                    onClick={goToNext}
                    aria-label='Next photo'
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <path
                            d='M9 18l6-6-6-6'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>

            <div className={styles.indicators}>
                {photos.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default TechCarousel
