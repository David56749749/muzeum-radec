// Components/HorizontalCardsRowBanner.js
import styles from "@/Styles/Components/landing/main_banner.module.css";
import Image from "next/image";
import Constants from "../../Constants";
const MainBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <Image
                    className={styles.titleLogo}
                    width={300}
                    height={300}
                    src={Constants.images.logo}
                    alt="Muzeum Chalupeni Logo"
                />
                <h1 className={styles.title}>Muzeum Chalupění</h1>
                <div className={styles.subtitle}>
                    <p className={styles.subtitleItem}>#Zemědělství </p>
                    <p className={styles.subtitleItem}>#Historické expozice </p>
                    <p className={styles.subtitleItem}>#Řemesla </p>
                    <p className={styles.subtitleItem}>#Hračky </p>
                </div>
                <button className={styles.ctaButton}>Rezervace prohlídek</button>
            </div>
        </div>
    );
};

export default MainBanner;
