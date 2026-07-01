import React, { ReactNode, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const getParentVariants = (direction: 'left' | 'right' | 'none') => {
    const xOffset = direction === 'left' ? -100 : direction === 'right' ? 100 : 0
    
    return {
        initial: { opacity: 0, x: xOffset },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const
            }
        },
        exit: {
            opacity: 0,
            x: -xOffset,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    }
}

const childVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

interface PageTransitionProps {
    children: ReactNode
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const router = useRouter()
    const [direction, setDirection] = useState<'left' | 'right' | 'none'>('none')

    useEffect(() => {
        const handleRouteChangeStart = (url: string) => {
            const currentPath = router.pathname
            const paths = ['/', '/projects', '/skills', '/experience']
            const currentIndex = paths.indexOf(currentPath)
            const nextIndex = paths.findIndex(path => url.startsWith(path))
            
            if (nextIndex > currentIndex && nextIndex !== -1) {
                setDirection('right')
            } else if (nextIndex < currentIndex && nextIndex !== -1) {
                setDirection('left')
            } else {
                setDirection('none')
            }
        }

        router.events.on('routeChangeStart', handleRouteChangeStart)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
        }
    }, [router])

    const parentVariants = getParentVariants(direction)

    return (
        <AnimatePresence mode={'wait'}>
            <motion.div
                key={router.pathname}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
                variants={parentVariants}
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div
                        key={index}
                        variants={childVariants}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition
