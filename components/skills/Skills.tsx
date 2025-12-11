import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion'

import Progress from '../progress'

import { data } from './data'

import styles from './styles.module.sass'

const Skills: React.FC = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const groupVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.08
            }
        }
    }

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <section>
            <motion.div
                ref={containerRef}
                className={styles.skillContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {data.map((group, i) => (
                    <motion.div
                        key={`group-${i}`}
                        className={styles.skillGroup}
                        variants={groupVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3>{group.group}</h3>
                        <ul className={styles.skillList}>
                            {group.skills.map((skill, j) => (
                                <motion.li
                                    key={`skill-${i}-${j}`}
                                    variants={skillVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={styles.label}>
                                        <label>{skill.name}</label>
                                        <span className={styles.skillLevel}>{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} />
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
