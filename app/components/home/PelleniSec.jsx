import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PelleniSec = () => {
    return (
        <section className='pelliniSecWrap'>
            <Image
                src="/images/home/pelleni-bg.png"
                alt="Pelleni Background"
                fill
                className='pelliniSecBg'
                priority
            />
            <div className='container'>
                <div className='pelliniSecContent'>
                    <Image
                        src="/images/home/Pellini-Logo.png"
                        alt="Pelleni Logo"
                        width={330}
                        height={106}
                        className='pelliniSecImg'
                    />
                    <h2>Authentic Italian, Timeless Taste</h2>
                    <p>An iconic Italian coffee brand with deep heritage of over a century, globally recognised for premium blends and authentic café culture.</p>
                    <Link href="" scroll={false}>
                        Explore Italian Heritage
                        <Image
                            src="/images/home/cup-icon.svg"
                            alt="Cup Icon"
                            width={27}
                            height={32}
                            className='pelliniSecBtnIcon'
                        />
                    </Link>
                </div>
            </div>
            <div className='pelliniSecRightText'>
                <p>First Pellini Caffe Outlet in Abu Sidra Mall and retail sales through
                    <em></em>
                    all major hypermarkets & Supermarkets.</p>
            </div>
        </section>
    )
}

export default PelleniSec