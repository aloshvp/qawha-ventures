import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footerWrap'>
            <div className="container">
                <div className="footerContent">
                    <div className="footerLogoSec">
                        <div className='qahwaVenturesLogo'>
                            <Image
                                src="/images/common/QahwaVentures-logo.png"
                                width={163}
                                height={164}
                                alt="Qahwa Ventures"
                            ></Image>
                        </div>
                        <div className='pelliniLogo'>
                            <Image
                                src="/images/common/Pellini-Logo.png"
                                width={305}
                                height={125}
                                alt="Pellini"
                            ></Image>
                        </div>
                    </div>
                    {/* <div className="footerLinkWrap"> */}
                    {/* <div className='footerLinkSec'>
                            <ul className='footerLinkNav'>
                                <li><Link href="" scroll={false}>Home</Link></li>
                                <li><Link href="" scroll={false}>About Us</Link></li>
                                <li><Link href="" scroll={false}>Products</Link></li>
                                <li><Link href="" scroll={false}>Specialties</Link></li>
                                <li><Link href="" scroll={false}>Blog</Link></li>
                                <li><Link href="" scroll={false}>Career</Link></li>
                                <li><Link href="" scroll={false}>Contact Us</Link></li>
                            </ul>
                        </div> */}
                    <div className='footerContactSec'>
                        {/* <div className="footerContactDetails">
                                <div className='addressSec'>
                                    <p>
                                        <em> Al Muntazah, Street 840 </em>
                                        <em> Building 18, 1st Floor </em>
                                        <em> Office 102 Doha - Qatar</em>
                                    </p>
                                </div>
                                <div className="phoneSec">
                                    <Link href="mailto:info@qahwaventures.com " scroll={false}>info@qahwaventures.com </Link>
                                    <Link href="tel:97455042150" scroll={false}>+974 5504 2150</Link>
                                </div>
                                <div className='socialMediaLinksSec'>
                                    <span>Social Links</span>
                                    <div className='socialMediaLinks'>
                                        <Link href="" scroll={false}>
                                            <Image
                                                src="/images/common/facebook.png"
                                                width={9}
                                                height={19}
                                                alt="facebook">
                                            </Image>
                                        </Link>
                                        <Link href="" scroll={false}>
                                            <Image
                                                src="/images/common/instagram.png"
                                                width={20}
                                                height={20}
                                                alt="instagram">
                                            </Image>
                                        </Link>
                                        <Link href="" scroll={false}>
                                            <Image
                                                src="/images/common/linkedin.png"
                                                width={20}
                                                height={20}
                                                alt="linkedin">
                                            </Image>
                                        </Link>
                                        <Link href="" scroll={false}>
                                            <Image
                                                src="/images/common/youtube.png"
                                                width={29}
                                                height={20}
                                                alt="youtube">
                                            </Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletterSec">
                                <span>Newsletter</span>
                                <h5>Stay in Touch</h5>
                                <input type="text" placeholder='Enter Email Address' />
                            </div> */}

                        <div className='footerLinkSec'>
                            <ul className='footerLinkNav'>
                                <li><Link href="" scroll={false}>Home</Link></li>
                                <li><Link href="" scroll={false}>About Us</Link></li>
                                <li><Link href="" scroll={false}>Products</Link></li>
                                <li><Link href="" scroll={false}>Specialties</Link></li>
                                <li><Link href="" scroll={false}>Blog</Link></li>
                                <li><Link href="" scroll={false}>Career</Link></li>
                                <li><Link href="" scroll={false}>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='addressSec'>
                            <p>
                                <em> Al Muntazah, Street 840 </em>
                                <em> Building 18, 1st Floor </em>
                                <em> Office 102 Doha - Qatar</em>
                            </p>
                        </div>
                        <div className="phoneSec">
                            <Link href="mailto:info@qahwaventures.com " scroll={false}>info@qahwaventures.com </Link>
                            <Link href="tel:97455042150" scroll={false}>+974 5504 2150</Link>
                        </div>
                        <div className='socialMediaLinksSec'>
                            <span>Social Links</span>
                            <div className='socialMediaLinks'>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/facebook.png"
                                        width={9}
                                        height={19}
                                        alt="facebook">
                                    </Image>
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/instagram.png"
                                        width={20}
                                        height={20}
                                        alt="instagram">
                                    </Image>
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/linkedin.png"
                                        width={20}
                                        height={20}
                                        alt="linkedin">
                                    </Image>
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src="/images/common/youtube.png"
                                        width={29}
                                        height={20}
                                        alt="youtube">
                                    </Image>
                                </Link>
                            </div>
                        </div>
                        <div className="newsletterSec">
                            <span>Newsletter</span>
                            <h5>Stay in Touch</h5>
                            <input type="text" placeholder='Enter Email Address' />
                        </div>

                    </div>
                </div>
                {/* </div> */}
                <div className="footerBottomSec">
                    <span>© Qahwa Ventures Pvt Ltd.AllRightsReserved</span>
                    <em>Developed by Marin Infotech</em>
                </div>
            </div>
        </footer>
    )
}

export default Footer