import React from 'react'

import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import PageTransition from '@/components/page-transition'
import Skills from '@/components/skills'

const SkillsPage: React.FC = () => (
    <>
        <NextSeo
            title={'My technical skills'}
            description={
                'With over 19+ years of experience in software development for clients ranging from government agencies to private companies, I’ve built a broad skill set across various technologies. Below is a summary of my key technical skills, ranked by usage frequency and proficiency based on past projects. My expertise spans frontend and backend development, analytics, DevOps, database architecture, web design, and API development, all of which I regularly employ in both professional work and personal projects.'
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
            <Skills />

            <section className={'footerLinks'}>
                <Link
                    href={'/projects'}
                    title={'View my projects'}
                >
                    <Icon name={iconNames.left} />
                    {'Projects'}
                </Link>
            </section>
        </PageTransition>
    </>
)

export default SkillsPage
