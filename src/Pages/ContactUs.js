"use client"
import styles from "@/Styles/Pages/contact_us.module.css";
import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send formData to a backend API or use a service like Formspree
        alert('Thank you for contacting us!');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        console.log('Form submitted:', formData);
    };

    return (
        <div className={styles.contactSection}>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>
                    We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out.
                </p>
            </header>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>Send Message</button>
            </form>

            <div className={styles.companyInfo}>
                <h3>Our Office</h3>
                <p>123 Apartment Street, Suite 456, City Name, State, Zip Code</p>
                <p>Email: contact@apartmentwebsite.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default ContactUs;
