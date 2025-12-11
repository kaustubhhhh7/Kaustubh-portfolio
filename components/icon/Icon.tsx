import React from 'react'

import { IconTypes } from './types'

interface IconProps {
    name: IconTypes
}

export const Icon: React.FC<IconProps> = ({ name }) => {
    switch (name) {
        case 'web':
            return (
                <svg
                    focusable='false'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                >
                    <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z'></path>
                </svg>
            )

        case 'telegram':
            return (
                <svg viewBox='140 136 240 240'>
                    <g>
                        <path d='M295.5,221l-69.8,42c-1.2,0.7-1.7,2.1-1.3,3.4l9.1,32.6c0.3,0.9,1.6,0.8,1.7-0.2l2-22.5   c0.1-1.7,0.9-3.3,2.2-4.4l57-49.7C297,221.6,296.2,220.5,295.5,221z' />
                        <path d='M322.3,154.8H189.8c-19.3,0-35,15.7-35,35v132.5c0,19.3,15.7,35,35,35h132.5c19.3,0,35-15.7,35-35V189.8   C357.3,170.5,341.5,154.8,322.3,154.8z M328.1,199l-25.6,116.3c-0.9,3.9-5.5,5.5-8.6,3l-30-23.8c-2.2-1.8-5.5-1.5-7.4,0.7   L241.1,313c-2.7,3.2-7.9,2.1-9.1-1.8l-13.6-41.9c-0.6-1.7-2-3.1-3.7-3.5l-26.9-7.1c-4.9-1.3-5.4-8.1-0.7-10.1l133.7-55.7   C324.8,191.3,329,194.8,328.1,199z' />
                    </g>
                </svg>
            )

        case 'github':
            return (
                <svg viewBox='6.5 6.5 36 36'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z'
                    />
                </svg>
            )

        case 'linkedin':
            return (
                <svg viewBox='-2 -2 28 28'>
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                </svg>
            )

        case 'facebook':
            return (
                <svg viewBox='0 0 50 50'>
                    <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z' />
                </svg>
            )

        case 'instagram':
            return (
                <svg viewBox='0 0 50 50'>
                    <path d='M34,4H16C9.4,4,4,9.4,4,16v18c0,6.6,5.4,12,12,12h18c6.6,0,12-5.4,12-12V16C46,9.4,40.6,4,34,4z M42,34c0,4.4-3.6,8-8,8H16c-4.4,0-8-3.6-8-8V16c0-4.4,3.6-8,8-8h18c4.4,0,8,3.6,8,8V34z' />
                    <path d='M25,15c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S30.5,15,25,15z M25,31c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S28.3,31,25,31z' />
                    <circle cx='35' cy='15' r='2.5' />
                </svg>
            )

        case 'left':
            return (
                <svg viewBox='0 0 24 24'>
                    <path d='M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />
                </svg>
            )

        case 'right':
            return (
                <svg viewBox='0 0 24 24'>
                    <path d='M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
                </svg>
            )

        case 'startup':
            return (
                <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M12 2L2 7L12 12L22 7L12 2Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M2 17L12 22L22 17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M2 12L12 17L22 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                </svg>
            )

        case 'alumni':
            return (
                <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                </svg>
            )

        case 'ai':
            return (
                <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M12 2L2 7L12 12L22 7L12 2Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M2 17L12 22L22 17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M2 12L12 17L22 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <circle cx='12' cy='7' r='1' fill='currentColor' />
                    <circle cx='7' cy='12' r='1' fill='currentColor' />
                    <circle cx='17' cy='12' r='1' fill='currentColor' />
                    <circle cx='12' cy='17' r='1' fill='currentColor' />
                </svg>
            )

        case 'shop':
            return (
                <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M3 9L5 21H19L21 9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M9 9V6C9 5.46957 9.21071 4.96086 9.58579 4.58579C9.96086 4.21071 10.4696 4 11 4H13C13.5304 4 14.0391 4.21071 14.4142 4.58579C14.7893 4.96086 15 5.46957 15 6V9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M3 9H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M9 13V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M15 13V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                </svg>
            )

        case 'agency':
            return (
                <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M3 21H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M5 21V7L13 2L21 7V21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M9 9V13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M9 17V21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M13 9V13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M13 17V21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M17 9V13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M17 17V21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                </svg>
            )

        case 'trees':
            return (
                <svg viewBox='0 0 24 24' fill='none'>
                    <path d='M12 2V8' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M12 16V22' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M6 12C6 10.3431 4.65685 9 3 9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M18 12C18 10.3431 19.3431 9 21 9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M6 12C6 13.6569 4.65685 15 3 15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M18 12C18 13.6569 19.3431 15 21 15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' fill='none' />
                </svg>
            )
    }
}

export default Icon
