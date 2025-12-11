import React from 'react'

import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import PageTransition from '@/components/page-transition'
import Projects from '@/components/projects'

const ProjectsPage: React.FC = () => (
    <>
        <NextSeo
            title={'My projects'}
            description={
                'This section showcases a selection of my personal projects, which I actively maintain and develop. As a passionate software engineer with a deep interest in both astronomy and programming, these projects reflect the intersection of my hobbies and technical expertise. The majority of these applications are built using modern web technologies like Next.js and React.js, designed to be scalable, efficient, and user-friendly.'
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

        <Projects />

        <PageTransition>
            <section className={'footerLinks'}>
                <Link
                    href={'/'}
                    title={'View about me'}
                >
                    <Icon name={iconNames.left} />
                    {'About me'}
                </Link>

                <Link
                    href={'/skills'}
                    title={'View my skills'}
                >
                    {'Skills'}
                    <Icon name={iconNames.right} />
                </Link>
            </section>
        </PageTransition>
    </>
)

export default ProjectsPage
