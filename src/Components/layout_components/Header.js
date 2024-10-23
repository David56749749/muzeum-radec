import Link from 'next/link';
import '@/styles/components/layout_components/header.css'; // Import global CSS
import Constants from '../../Constants';
import Image from 'next/image';
const Header = () => {
    return (
        <header className="header">
            <section className='section'>
                <div className="header__wrapper container">
                    <div className="header__logo-wrapper">
                        <Image
                            className='header__logo-image'
                            width={50}
                            height={50}
                            src={Constants.images.logo}
                            alt="Muzeum Chalupeni Logo"
                            layout="responsive"
                        />
                        <Link className='header__title' href="/">
                            <p>{Constants.textBlocks.web_title}</p>
                        </Link>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__nav">
                            <li className="header__nav-item">
                                <Link href="/about">
                                    <p className="header__nav-link">O nás</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/services">
                                    <p className="header__nav-link">Prohlídky</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/services">
                                    <p className="header__nav-link">Exponáty</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/services">
                                    <p className="header__nav-link">Fotogalerie</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/contact">
                                    <p className="header__nav-link">Kontakty a rezervace</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header >
    );
};

export default Header;
