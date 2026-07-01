import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './styles.module.sass'

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:kaustubh7205@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section ref={ref} className={styles.contactSection}>
            <motion.div
                className={styles.contactContainer}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.contactForm}>
                    <h3 className={styles.contactFormTitle}>Get in Touch</h3>
                    <p className={styles.contactFormSubtitle}>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name_input" className={styles.formLabel}>Name</label>
                            <input type="text" id="name_input" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. John Smith" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email_input" className={styles.formLabel}>Email address</label>
                            <input type="email" id="email_input" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. example@gmail.com" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message_input" className={styles.formLabel}>Message</label>
                            <textarea id="message_input" name="message" value={formData.message} onChange={handleInputChange} placeholder="Let us know how we can help" className={styles.textarea} rows={5} required />
                        </div>
                        <button type="submit" className={styles.submitButton}>Send message</button>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactForm
