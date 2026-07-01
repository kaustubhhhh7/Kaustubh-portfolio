import React from 'react'

import { motion } from 'framer-motion'

import styles from './styles.module.sass'

interface ProgressProps {
    value?: number
}

export const Progress: React.FC<ProgressProps> = ({ value }) => {
    return (
        <div
            className={styles.progress}
            role={'progressbar'}
        >
            {Array(10)
                .fill(0)
                .map((val, i) => {
                    const isActive = (value || 0) >= (i + 1) * 10
                    return (
                        <motion.span
                            key={`progress-segment-${i}`}
                            className={isActive ? styles.active : undefined}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: isActive ? 1 : 0.8,
                                opacity: isActive ? 1 : 0.3
                            }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.05,
                                ease: [0.22, 1, 0.36, 1] as const
                            }}
                        />
                    )
                })}
        </div>
    )
}

export default Progress
