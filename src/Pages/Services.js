// components/Services.js
import styles from "@/Styles/Pages/services.module.css";

const services = [
    {
        title: 'Apartment Listings',
        description:
            'Explore a wide range of apartments available for rent. Filter your options based on location, price, and amenities.',
        icon: '🏢', // You can replace these with actual icons
    },
    {
        title: 'Property Management',
        description:
            'We manage properties for landlords, ensuring smooth operations, tenant satisfaction, and maintenance.',
        icon: '🛠️',
    },
    {
        title: 'Customer Support',
        description:
            'Our customer support team is here to assist you throughout your apartment search or rental process.',
        icon: '📞',
    },
    {
        title: 'Legal Assistance',
        description:
            'We offer assistance with rental contracts, lease agreements, and legal consultations related to rentals.',
        icon: '⚖️',
    },
];

const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our Services</h1>
                <p className={styles.subtitle}>
                    We provide a wide range of services to help you find the perfect apartment and manage your property efficiently.
                </p>
            </header>

            <div className={styles.serviceList}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h2 className={styles.serviceTitle}>{service.title}</h2>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
