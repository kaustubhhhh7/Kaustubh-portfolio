import React from 'react'

import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Experience from '@/components/experience'
import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import PageTransition from '@/components/page-transition'

const ProjectsPage: React.FC = () => (
    <>
        <NextSeo
            title={'Experience'}
            description={
                'This page highlights my professional experience as a Fullstack Developer, showcasing my expertise in frontend and backend development, project leadership, and contributions across industries such as media, fintech, and e-commerce. Discover my career achievements, technical skills, and the impact I’ve made on various projects.'
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
            <section>
                <h1 className={'pageTitle experienceTitle'}>{'My experience'}</h1>
            </section>

            <Experience />

            <section className={'footerLinks'}>
                <Link
                    href={'/projects'}
                    title={'View my pet projects'}
                >
                    <Icon name={iconNames.left} />
                    {'Projects'}
                </Link>

                <Link
                    href={'/skills'}
                    title={'View my technical skills'}
                >
                    {'Skills'}
                    <Icon name={iconNames.right} />
                </Link>
            </section>
        </PageTransition>
    </>
)

export default ProjectsPage
