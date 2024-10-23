import Link from 'next/link';
import '@/styles/components/layout_components/header-sharp-gradient.css'; // Import global CSS

const Header = () => {
    return (
        <header className="header">
            <section className='section section--color-dark'>
                <div className="header__wrapper container">
                    <div className="header__logo">
                        <Link href="/">
                            <p>MyApartment</p>
                        </Link>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__nav">
                            <li className="header__nav-item">
                                <Link href="/">
                                    <p className="header__nav-link">Home</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/about">
                                    <p className="header__nav-link">About Us</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/services">
                                    <p className="header__nav-link">Services</p>
                                </Link>
                            </li>
                            <li className="header__nav-item">
                                <Link href="/contact">
                                    <p className="header__nav-link">Contact Us</p>
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
