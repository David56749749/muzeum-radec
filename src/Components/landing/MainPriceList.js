// components/AccommodationPriceList.js
import styles from "@/Styles/Components/landing/main_price_list.module.css";
const AccommodationPriceList = () => {
    const accommodations = [
        {
            title: 'Standard Room',
            description: 'Cozy and comfortable room with a queen-sized bed and city view.',
            price: 120,
        },
        {
            title: 'Deluxe Room',
            description: 'Spacious room with a king-sized bed, private balcony, and sea view.',
            price: 180,
        },
        {
            title: 'Executive Suite',
            description: 'Luxury suite with separate living area, king-sized bed, and premium amenities.',
            price: 250,
        },
        {
            title: 'Penthouse',
            description: 'Exclusive penthouse with panoramic views, two bedrooms, and a private pool.',
            price: 400,
        },
    ];
    return (
        <div className="section section--bg-dark">
            <div className="container">
                <section className={styles.priceSection}>
                    <h2 className="section-title">Accommodation Pricing</h2>
                    <div className={styles.priceList}>
                        {accommodations.map((accommodation, index) => (
                            <div key={index} className={styles.priceItem}>
                                <h3 className={styles.title}>{accommodation.title}</h3>
                                <p className={styles.description}>{accommodation.description}</p>
                                <p className={styles.price}>${accommodation.price}/night</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AccommodationPriceList;
