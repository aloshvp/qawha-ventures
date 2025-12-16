"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@components/functions/useWindowSize";

const Header = () => {
    const { width } = useWindowSize();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setIsScrolled(true);
            else setIsScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`headerWrap ${isScrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <div className="headerSec">
                        <div className="hamburger">
                            <span className="mrgnLft"></span>
                            <span></span>
                            <span className="mrgnLft"></span>
                        </div>

                        <div className="headerNavLinks">
                            <ul className="navLinksList">
                                <li><Link href="/" className="homeLink">Home</Link></li>
                                <li><Link href="" scroll={false}>About Us</Link></li>
                                <li><Link href="" scroll={false}>Products</Link></li>

                                <li className="headerLogoSec">
                                    <Link href="/" className="headerLogo">
                                        <Image
                                            src="/images/common/QahwaVentures-logo.png"
                                            width={163}
                                            height={164}
                                            alt="Qahwa Ventures"
                                        />
                                    </Link>
                                </li>

                                <li><Link href="" scroll={false}>Specialities</Link></li>
                                <li><Link href="" scroll={false}>Career</Link></li>
                                <li><Link href="" scroll={false}>Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="talkWithUsSec">
                            <span>Talk with us</span>
                            <Image
                                src="/images/common/phone.png"
                                width={24}
                                height={24}
                                alt="Qahwa Ventures"
                                className="talkWithUsIcon"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {isScrolled && (
                <div className="whatsappBtnWrap">
                    <Link href="" target="_blank" rel="noopener noreferrer" className="whatsappBtn">
                        <Image
                            src="/images/common/whatsapp.png"
                            width={38}
                            height={38}
                            alt="WhatsApp"
                        />
                    </Link>
                </div>
            )}
        </>
    );
};

export default Header;