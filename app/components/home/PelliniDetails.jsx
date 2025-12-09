import Image from 'next/image'
import React from 'react'

const PelliniDetails = () => {
    return (
        <section className='pelliniDetailsWrap'>
            <Image
                src="/images/home/pellini-bg.png"
                alt="Pellini Background"
                fill
                className='pelliniDetailsBg'
                priority
            />
            <div className="container">
                <div className='pelliniDetailsContent'>
                    <div className='pelliniDetailsLft'>
                        <h3>Your Global <em></em> Coffee Resource</h3>
                        <em>
                            <Image
                                src="/images/home/world.png"
                                alt="Pellini"
                                width={675}
                                height={437}
                                className='pelliniLogoImg'
                            />
                        </em>
                    </div>
                    <div className='pelliniDetailsRght'>
                        <em>
                            <Image
                                src="/images/home/Pellini-Logo.png"
                                alt="Pellini"
                                width={305}
                                height={125}
                                className='pelliniLogoImg'
                            />
                        </em>
                        <span>Luxury Italian coffee collection</span>
                        <p>Pellini Aluminum Capsules 80% recycled compatible with Nespresso® machines, 10 Caps / Pack. At Qahwa Ventures, we are passionate about delivering the finest and most authentic Italian coffee to our customers. Our commitment to quality and craftsmanship ensures that every cup of coffee tells a story of tradition, excellence, and unparalleled taste.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PelliniDetails