import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.sass'

const text = "KAUSTUBH"

export const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Hide preloader after a set duration
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2200)
        return () => clearTimeout(timer)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    }

    const itemVariants: any = {
        hidden: { opacity: 0, y: 80, rotateX: -90 },
        show: { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    }

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className={styles.preloaderContainer}
                    initial={{ y: 0 }}
                    exit={{ y: "-100vh", opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div 
                        className={styles.textContainer}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {text.split("").map((char, index) => (
                            <motion.span key={index} variants={itemVariants} className={styles.char}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                    
                    <motion.div 
                        className={styles.progressContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.div 
                            className={styles.progressBar}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader
