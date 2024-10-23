// Components/HorizontalCardsRowBanner.js
import styles from "@/Styles/Components/landing/main_banner.module.css";

const MainBanner = () => {
    return (
        <div className="section section--zero-padding">
            <section className={styles.banner}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Muzeum Chalupění</h1>
                    <div className={styles.subtitle}>
                        <p className={styles.subtitleItem}>#Zemědělství </p>
                        <p className={styles.subtitleItem}>#Historické expozice </p>
                        <p className={styles.subtitleItem}>#Řemesla </p>
                        <p className={styles.subtitleItem}>#Hračky </p>
                    </div>
                    <button className={styles.ctaButton}>Rezervace prohlídek</button>
                </div>
            </section>
        </div>
    );
};

export default MainBanner;
