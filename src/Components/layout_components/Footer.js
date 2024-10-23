// components/Footer.js
import Link from 'next/link';
import "@/Styles/Components/layout_components/footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <section className="section section--bg-light">
                <div className='footer__wrapper'>
                    <nav className="footer__menu">
                        <ul className="footer__nav">
                            <li className="footer__navItem">
                                <Link href="/">
                                    <p className="footer__navLink">Home</p>
                                </Link>
                            </li>
                            <li className="footer__navItem">
                                <Link href="/about">
                                    <p className="footer__navLink">About Us</p>
                                </Link>
                            </li>
                            <li className="footer__navItem">
                                <Link href="/services">
                                    <p className="footer__navLink">Services</p>
                                </Link>
                            </li>
                            <li className="footer__navItem">
                                <Link href="/contact">
                                    <p className="footer__navLink">Contact Us</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <p className="footer__date">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
                </div>
            </section >
        </footer >
    );
};

export default Footer;
