// components/AboutUs.js
import styles from "@/Styles/Pages/about_us.module.css";

const teamMembers = [
    {
        name: 'Jane Doe',
        role: 'CEO & Founder',
        imageUrl: '/images/jane.jpg',
    },
    {
        name: 'John Smith',
        role: 'Operations Manager',
        imageUrl: '/images/john.jpg',
    },
    {
        name: 'Emily Brown',
        role: 'Marketing Head',
        imageUrl: '/images/emily.jpg',
    },
];

const AboutUs = () => {
    return (
        <section className={styles.aboutSection}>
            <header className={styles.header}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.subtitle}>
                    Our mission is to connect people with their dream homes, ensuring that every step of the journey is smooth and enjoyable.
                </p>
            </header>

            <div>
                <h2 className={styles.mission}>Our Mission</h2>
                <p className={styles.paragraph}>
                    At MyApartment, we strive to provide our clients with the best rental options available in the city. We believe in making the process of finding and renting an apartment as simple and stress-free as possible.
                </p>

                <h2 className={styles.mission}>Our Vision</h2>
                <p className={styles.paragraph}>
                    We envision a world where anyone can easily find the perfect living space, regardless of their budget or location. We focus on quality listings, transparent pricing, and a seamless user experience.
                </p>
            </div>

            <div className={styles.teamSection}>
                <h2 className={styles.teamHeader}>Meet Our Team</h2>
                <div className={styles.teamMembers}>
                    {teamMembers.map((member) => (
                        <div key={member.name} className={styles.teamMember}>
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className={styles.memberImage}
                            />
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberRole}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
