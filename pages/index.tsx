import React, { useRef } from 'react'

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion, useInView } from 'framer-motion'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import Introduce from '@/components/introduce'
import PageTransition from '@/components/page-transition'

const MainPage: React.FC = () => {
    const buttonRef = useRef(null)
    const isInView = useInView(buttonRef, { once: true, amount: 0.5 })

    return (
        <>
            <NextSeo
                title={'Kaustubh Portfolio'}
                description={
                    'I am a software engineer specializing in frontend and backend development for scalable web applications. With extensive experience in application development, testing, and managing both development teams and projects, I am focused on delivering high-quality and efficient solutions.'
                }
                openGraph={{
                    images: [
                        {
                            height: 1333,
                            url: 'https://kaustubh.com/avatar.jpeg',
                            width: 1000
                        }
                    ],
                    locale: 'en-US',
                    siteName: 'kaustubh.com'
                }}
            />

            <PageTransition>
                <Introduce />

                <motion.section
                    ref={buttonRef}
                    className={'footerLinks'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        href={'/projects'}
                        title={'View my pet projects'}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {'Projects'}
                            <Icon name={iconNames.right} />
                        </motion.div>
                    </Link>
                </motion.section>
            </PageTransition>
        </>
    )
}

export default MainPage
