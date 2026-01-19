import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandLegacy = () => {
    return (
        <section className='brandLegacyWrapper'>
            <Image
                src="/images/home/chutneyandco-bg.png"
                alt="Chutney and Co Background"
                fill
                className='brandLegacyBg'
                priority
            />
            <div className='container'>
                <div className='brandLegacyContent'>
                    <Image
                        src="/images/home/Chutney-and-co-logo.svg"
                        alt="Chutney and Co Logo"
                        width={330}
                        height={106}
                        className='brandLegacyImg'
                    />
                    <h2>Contemporary Indian,
                        <em></em>
                        Extraordinary Heritage</h2>
                    <p>Chutney & Co. redefines modern Indian cuisine by pioneering an elevated Indian Tapas concept that blends rich cultural heritage with contemporary, shareable innovation.</p>
                    <Link href="" scroll={false}>
                        Visit Brand Legacy
                        <Image
                            src="/images/home/cup-icon.svg"
                            alt="Cup Icon"
                            width={27}
                            height={32}
                            className='brandLegacyBtnIcon'
                        />
                    </Link>
                </div>
            </div>
            <div className='brandLegacyRightText'>
                <p>Under development – A flagship launch is planned for July 2026.</p>
            </div>
        </section>
    )
}

export default BrandLegacy