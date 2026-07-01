import Image from 'next/image'
import React from 'react'

import blenderIcon from '@/components/icons/blender.png'
import expressIcon from '@/components/icons/express js.png'
import mongodbIcon from '@/components/icons/mongodb-logo-png_seeklogo-481256.png'
import reactIcon from '@/components/icons/react.png'
import sqlIcon from '@/components/icons/sql.png'
import tsIcon from '@/components/icons/Typescript_logo_2020.png'
import vsIcon from '@/components/icons/viusal studio.png'

import styles from './styles.module.sass'

type TechIcon = {
    name: string
    icon?: React.ReactNode
    image?: {
        src: any
        alt?: string
    }
}

const techIcons: TechIcon[] = [
    {
        name: 'JavaScript',
        icon: (
            <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                <rect width="48" height="48" rx="10" fill="#f7df1e" />
                <text
                    x="50%"
                    y="62%"
                    textAnchor="middle"
                    fontWeight="800"
                    fontSize="18"
                    fill="#1c1c1c"
                    fontFamily="var(--font-family, 'Inter')"
                >
                    JS
                </text>
            </svg>
        )
    },
    {
        name: 'TypeScript',
        image: {
            src: tsIcon,
            alt: 'TypeScript'
        }
    },
    {
        name: 'Node.js',
        icon: (
            <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                <path d="M7 16.5L24 7l17 9.5v19L24 45l-17-9.5z" fill="#73c16b" />
                <path
                    d="M24 12l13 7.2v14.4L24 41l-13-7.4V19.2L24 12z"
                    fill="#1c332a"
                    opacity="0.25"
                />
                <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    fontWeight="700"
                    fontSize="12"
                    fill="#fff"
                    fontFamily="var(--font-family, 'Inter')"
                >
                    node
                </text>
            </svg>
        )
    },
    {
        name: 'Visual Studio',
        image: {
            src: vsIcon,
            alt: 'Visual Studio'
        }
    },
    {
        name: 'ASP.NET',
        icon: (
            <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                <rect width="48" height="48" rx="10" fill="#0c1f33" />
                <path d="M8 32c7-12 10-12 17 0s10 12 17 0" stroke="#50b4ff" strokeWidth="3.5" fill="none" />
                <text
                    x="50%"
                    y="20"
                    textAnchor="middle"
                    fontWeight="700"
                    fontSize="11"
                    fill="#50b4ff"
                    fontFamily="var(--font-family, 'Inter')"
                >
                    ASP.NET
                </text>
            </svg>
        )
    },
    {
        name: 'SQL Server',
        image: {
            src: sqlIcon,
            alt: 'SQL Server Management Studio'
        }
    },
    {
        name: 'C Sharp',
        icon: (
            <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                <rect width="48" height="48" rx="12" fill="#68217a" />
                <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    fontWeight="800"
                    fontSize="18"
                    fill="#ffffff"
                    fontFamily="var(--font-family, 'Inter')"
                >
                    C#
                </text>
            </svg>
        )
    },
    {
        name: 'Blender',
        image: {
            src: blenderIcon,
            alt: 'Blender'
        }
    },
    {
        name: 'React',
        image: {
            src: reactIcon,
            alt: 'React'
        }
    },
    {
        name: 'Express',
        image: {
            src: expressIcon,
            alt: 'Express'
        }
    },
    {
        name: 'MongoDB',
        image: {
            src: mongodbIcon,
            alt: 'MongoDB'
        }
    }
]

export const TechTicker: React.FC = () => {
    // Duplicate array multiple times for seamless infinite scroll
    const duplicatedIcons = [...techIcons, ...techIcons, ...techIcons]
    
    return (
        <section className={styles.tickerSection} aria-label="Technologies I use frequently">
            <div className={styles.tickerShell}>
                <div className={styles.tickerMask}>
                    <div className={styles.tickerTrack}>
                        {duplicatedIcons.map((tech, index) => (
                            <div className={styles.techCard} key={`${tech.name}-${index}`}>
                                <div className={styles.icon}>
                                    {tech.image ? (
                                        <Image
                                            src={tech.image.src}
                                            alt={tech.image.alt ?? `${tech.name} logo`}
                                            width={40}
                                            height={40}
                                            sizes="40px"
                                            quality={90}
                                            priority={index < techIcons.length}
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        />
                                    ) : (
                                        tech.icon
                                    )}
                                </div>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechTicker

