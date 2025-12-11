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
        <header className={`headerWrap ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="headerSec">
                    <div className="hamburger">
                        <span className="mrgnLft"></span>
                        <span></span>
                        <span className="mrgnLft"></span>
                    </div>

                    <div className="headerNavLinks">
                        <ul>
                            <li><Link href="">Home</Link></li>
                            <li><Link href="">About Us</Link></li>
                            <li><Link href="">Products</Link></li>

                            <li>
                                <Link href="/" scroll={false}>
                                    <Image
                                        src="/images/common/QahwaVentures-logo.png"
                                        width={163}
                                        height={164}
                                        alt="Qahwa Ventures"
                                        className="headerLogo"
                                    />
                                </Link>
                            </li>

                            <li><Link href="">Specialities</Link></li>
                            <li><Link href="">Career</Link></li>
                            <li><Link href="">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="talkWithUsSec">
                        <span>Talk with us</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;