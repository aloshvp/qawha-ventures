import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@utils/commonData'

const Footer = () => {
    return (
        <footer className='footerWrap'>
            <div className="container">
                <div className="footerContent">
                    <div className="footerLogoSec">
                        <div className='qahwaVenturesLogo'>
                            <Image
                                src="/images/common/logo.svg"
                                width={162}
                                height={162}
                                alt="Qahwa Ventures"
                            />
                        </div>
                        <div className='qahwaVenturesText'>
                            <p>
                                Qahwa Ventures is a Qatar-based F&B investment and franchise management company focused on building scalable, high-value consumer brands across the region.
                            </p>
                        </div>
                        <div className='qahwaVenturesPartnersLogo'>
                            <Image
                                src="/images/common/footer-logo.svg"
                                width={358}
                                height={69}
                                alt="Qahwa Ventures"
                            />
                        </div>

                    </div>
                    <div className='footerContactSec'>
                        <div className='footerLinkSec'>
                            <ul className='footerLinkNav'>
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <Link href={link.href} scroll={link.href === "/" ? true : false}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='addressSec'>
                            <p>
                                <em> Al Muntazah, Street 840 </em>
                                <em> Building 18, 1st Floor </em>
                                <em> Office 102 Doha - Qatar </em>
                            </p>
                        </div>
                        <div className="phoneSec">
                            <Link href="mailto:info@qahwaventures.com " scroll={false}>info@qahwaventures.com </Link>
                            <Link href="tel:97451245484" scroll={false}>+974 5124 5484</Link>
                        </div>
                        <div className='socialMediaLinksSec'>
                            <span>Social Links</span>
                            <div className='socialMediaLinks'>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/facebook.png"
                                        width={9}
                                        height={19}
                                        alt="facebook"
                                        className='socailMediaLogo'>
                                    </Image>
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/instagram.png"
                                        width={20}
                                        height={20}
                                        alt="instagram"
                                        className='socailMediaLogo'>
                                    </Image>
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/linkedin.png"
                                        width={20}
                                        height={20}
                                        alt="linkedin"
                                        className='socailMediaLogo'>
                                    </Image>
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/youtube.png"
                                        width={29}
                                        height={20}
                                        alt="youtube"
                                        className='socailMediaLogo'>
                                    </Image>
                                </Link>
                            </div>
                        </div>
                        <div className="newsletterSec">
                            <span>Newsletter</span>
                            <h5>Stay in Touch</h5>
                            <div className='newsletterInput'>
                                <input type="email" placeholder='Enter Email Address' />
                                <Link href="" scroll={false}>GO</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footerBottomSec">
                    <span>© Qahwa Ventures Pvt Ltd.All Rights Reserved</span>
                    <span>
                        Developed by
                        <Link
                            href="https://marininfotech.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Marin Infotech
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer