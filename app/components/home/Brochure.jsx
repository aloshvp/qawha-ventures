import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brochure = () => {
    return (
        <section className='BrochureWrap'>
            <Image
                src="/images/home/download-brochure-bg.png"
                alt="Who We Are Background"
                width={1920}
                height={275}
                className='BrochureBg'
                priority
            />
            <div className="container">
                <div className="BrochureContent">
                    <p>Download the Qahwa Ventures brochure to explore our authentic Italian coffee experience</p>
                    <Link href="" scroll={false}>Download Brochure</Link>
                </div>
            </div>
        </section>
    )
}

export default Brochure

