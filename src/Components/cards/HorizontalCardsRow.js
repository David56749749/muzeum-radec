// components/HorizontalCardsRow.js
import styles from '@/Styles/Components/landing/horizontal_cards_row.module.css';
import Link from 'next/link';
import Image from 'next/image';
const HorizontalCardsRow = () => {
    const folder_path = "/GalleryImages/beach_images/";
    const apartments = [
        {
            id: 1,
            name: 'Sunny Loft Apartment',
            location: 'Downtown',
            price: 1500,
            imageUrl: folder_path + '1.jpg',
        },
        {
            id: 2,
            name: 'Modern Studio',
            location: 'Uptown',
            price: 1200,
            imageUrl: folder_path + '2.jpg',
        },
        {
            id: 3,
            name: 'Spacious Family Home',
            location: 'Suburbs',
            price: 2000,
            imageUrl: folder_path + '3.jpg',
        },
    ];
    return (
        <div className='section'>
            <div className="container">
                <main className={styles.main_content_wrapper}>
                    <header className={styles.header}>
                        <h1 className="section-title">Find Your Perfect Apartment</h1>
                        <p className="section-subtitle">Browse through the best properties in your area.</p>
                    </header>

                    <div className={styles.apartmentGrid}>
                        {apartments.map((apartment) => (
                            <div key={apartment.id} className={styles.apartmentCard}>
                                <Image
                                    src={apartment.imageUrl}
                                    alt={apartment.name}
                                    className={styles.apartmentImage}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    sizes='100%'
                                    loading="lazy"
                                />
                                <div className={styles.apartmentInfo}>
                                    <h2 className={styles.apartmentName}>{apartment.name}</h2>
                                    <p className={styles.apartmentLocation}>{apartment.location}</p>
                                    <p className={styles.price}>${apartment.price}/month</p>
                                    <Link href={`/apartments/${apartment.id}`}>
                                        <p className={styles.ctaButton}>View Details</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HorizontalCardsRow;
