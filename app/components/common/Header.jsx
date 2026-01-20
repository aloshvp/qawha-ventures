// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import useWindowSize from "@components/functions/useWindowSize";

// const Header = () => {
//     const { width } = useWindowSize();
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) setIsScrolled(true);
//             else setIsScrolled(false);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <>
//             <header className={`headerWrap ${(width <= 1024 || isScrolled) ? "scrolled" : ""}`}>
//                 <div className="container">
//                     <div className="headerSec">
//                         <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
//                             <span className="mrgnLft"></span>
//                             <span></span>
//                             <span className="mrgnLft"></span>
//                         </div>

//                         <div className="headerNavLinks">
//                             <ul className="navLinksList">
//                                 <li><Link href="/" className="homeLink">Home</Link></li>
//                                 <li><Link href="" scroll={false}>About Us</Link></li>
//                                 <li><Link href="" scroll={false}>Products</Link></li>
//                                 <li className="headerLogoSec">
//                                     <Link href="/" className="headerLogo">
//                                         <Image
//                                             src="/images/common/QahwaVentures-logo.png"
//                                             width={163}
//                                             height={164}
//                                             alt="Qahwa Ventures"
//                                         />
//                                     </Link>
//                                 </li>
//                                 <li><Link href="" scroll={false}>Specialities</Link></li>
//                                 <li><Link href="" scroll={false}>Career</Link></li>
//                                 <li><Link href="" scroll={false}>Contact Us</Link></li>
//                             </ul>
//                         </div>

//                         {width <= 1024 &&
//                             <Link href="/" className="headerLogo">
//                                 <Image
//                                     src="/images/common/QahwaVentures-logo.png"
//                                     width={163}
//                                     height={164}
//                                     alt="Qahwa Ventures"
//                                 />
//                             </Link>
//                         }

//                         <div className="talkWithUsSec">
//                             <span>Talk with us</span>
//                             <Image
//                                 src="/images/common/phone.png"
//                                 width={24}
//                                 height={24}
//                                 alt="Qahwa Ventures"
//                                 className="talkWithUsIcon"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Mobile Sidebar */}
//             <div className={`mobileSidebar ${isMobileMenuOpen ? 'active' : ''}`}>
//                 <div className="sidebarOverlay" onClick={toggleMobileMenu}></div>
//                 <div className="sidebarContent">
//                     <div className="sidebarHeader">
//                         <button className="closeSidebar" onClick={toggleMobileMenu}>
//                             <span></span>
//                             <span></span>
//                         </button>
//                     </div>
//                     <nav className="sidebarNav">
//                         <ul className="sidebarNavList">
//                             <li><Link href="/" className="homeLink" onClick={toggleMobileMenu}>Home</Link></li>
//                             <li><Link href="" scroll={false} onClick={toggleMobileMenu}>About Us</Link></li>
//                             <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Products</Link></li>
//                             <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Specialities</Link></li>
//                             <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Career</Link></li>
//                             <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Contact Us</Link></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {isScrolled && (
//                 <div className="whatsappBtnWrap">
//                     <Link href="" target="_blank" rel="noopener noreferrer" className="whatsappBtn" scroll={false}>
//                         <Image
//                             src="/images/common/whatsapp.png"
//                             width={38}
//                             height={38}
//                             alt="WhatsApp"
//                         />
//                     </Link>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Header;



"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@components/functions/useWindowSize";

const Header = () => {
    const { width } = useWindowSize();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setIsScrolled(true);
            else setIsScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className={`headerWrap ${(width <= 1024 || isScrolled) ? "scrolled" : ""}`}>
                <div className="container">
                    <div className="headerSec">
                        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                            <Image
                                src="/images/common/hamburger.svg"
                                width={32}
                                height={10}
                                alt="Hamburger"
                            />
                            <span>Menu</span>
                        </div>

                        <div className="headerNavLinks">
                            <ul className="navLinksList">
                                <li className="headerLogoSec">
                                    <Link href="/" className="headerLogo">
                                        <Image
                                            src="/images/common/logo.svg"
                                            width={162.43}
                                            height={162.43}
                                            alt="Qahwa Ventures"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {width <= 1024 &&
                            <Link href="/" className="headerLogo">
                                <Image
                                    src="/images/common/logo.svg"
                                    width={163}
                                    height={164}
                                    alt="Qahwa Ventures"
                                />
                            </Link>
                        }
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`mobileSidebar ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="sidebarOverlay" onClick={toggleMobileMenu}></div>
                <div className="sidebarContent">
                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <Image
                            src="/images/common/hamburger.svg"
                            width={32}
                            height={10}
                            alt="Hamburger"
                        />
                        <span>Menu</span>
                    </div>
                    <nav className="sidebarNav">
                        <ul className="sidebarNavList">
                            <li><Link href="/" className="homeLink" onClick={toggleMobileMenu}>Home</Link></li>
                            <li><Link href="" scroll={false} onClick={toggleMobileMenu}>About Us</Link></li>
                            <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Products</Link></li>
                            <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Specialities</Link></li>
                            <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Career</Link></li>
                            <li><Link href="" scroll={false} onClick={toggleMobileMenu}>Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className="sidebarContactInfo">
                        <Link className="telLink" href="tel:974 5504 2150" scroll={false} onClick={toggleMobileMenu}>TEL +974 5504 2150</Link>
                        <Link className="emailLink" href="mailto:info@qahwaventures.com" scroll={false} onClick={toggleMobileMenu}>info@qahwaventures.com</Link>
                    </div>
                    <div className="sidebarAddress">
                        <p>Al Muntazah, Street 840</p>
                        <p>Building 18, 1st Floor</p>
                        <p>Office 102 Doha - Qatar </p>
                    </div>
                </div>
            </div>

            <div className="whatsappBtnWrap">
                <Link href="" target="_blank" rel="noopener noreferrer" className="whatsappBtn" scroll={false}>
                    <Image
                        src="/images/common/whatsapp.png"
                        width={38}
                        height={38}
                        alt="WhatsApp"
                    />
                </Link>
            </div>
        </>
    );
};

export default Header;