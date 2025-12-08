import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
    return (
        <section className='whoWeAreWrap'>
            <Image
                src="/images/home/who-we-are-bg.png"
                alt="Who We Are Background"
                fill
                className='whoWeAreBg'
                priority
            />
            <div className='whoWeAreOverlay'></div>
            <div className='container'>
                <div className='whoWeAreContent'>
                    <div className='whoWeAreTop'>
                        <h2>Who We Are ?</h2>
                        <p>Qahwa Ventures operates with a strategic mandate to identify, acquire, and grow premium concepts in the specialty coffee and fine dining sectors.</p>
                    </div>
                    <div className='whoWeAreBottom'>
                        <div className='whoWeAreImages'>
                            <div className='imageLeft'>
                                <Image
                                    src="/images/home/Pellini-Logo.png"
                                    alt="Pellini"
                                    width={305}
                                    height={125}
                                    className='whoWeAreImg'
                                />
                            </div>
                            <div className='imageRight'>
                                <Image
                                    src="/images/home/Chutney-and-co-logo.png"
                                    alt="Chutney And Co"
                                    width={277}
                                    height={88}
                                    className='whoWeAreImg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre