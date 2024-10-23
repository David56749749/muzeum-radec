// Components/HorizontalCardsRowBanner.js
import styles from "@/Styles/Components/landing/main_desc.module.css";

const MainDesc = () => {
    return (
        <div className="section section--bg-dark">
            <div className='container'>
                <section className={styles.apartmentDescription}>
                    <div className={styles.container}>
                        <h2 className="section-title">
                            Welcome to Your Dream Apartment
                        </h2>
                        <p className={styles.paragraph}>
                            Nestled in the heart of the city, our apartments provide a serene escape from the bustle of urban life. Featuring modern design, luxurious finishes, and a community-focused atmosphere, this is more than just a place to live—it’s a lifestyle.
                        </p>
                        <p className={styles.paragraph}>
                            Enjoy spacious floor plans, state-of-the-art amenities, and easy access to local hotspots, parks, and public transit. Whether you're relaxing on the rooftop deck, unwinding by the pool, or enjoying the vibrant culture of the neighborhood, this is the perfect place to call home.
                        </p>
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <h3 className={styles.featureHeading}>Modern Interiors</h3>
                                <p className={styles.featureText}>
                                    Stylish and functional interiors with open floor plans, high ceilings, and large windows for natural light.
                                </p>
                            </div>
                            <div className={styles.feature}>
                                <h3 className={styles.featureHeading}>Luxurious Amenities</h3>
                                <p className={styles.featureText}>
                                    A fully equipped fitness center, rooftop lounge, and resort-style pool to elevate your everyday living.
                                </p>
                            </div>
                            <div className={styles.feature}>
                                <h3 className={styles.featureHeading}>Prime Location</h3>
                                <p className={styles.featureText}>
                                    Conveniently located near top restaurants, shopping centers, and public transportation, making your commute a breeze.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MainDesc;
