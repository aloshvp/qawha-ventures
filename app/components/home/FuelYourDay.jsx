import Image from 'next/image'
import React from 'react'

const FuelYourDay = () => {
    return (
        <section className='fuelYourDayWrap'>
            <Image
                src="/images/home/fuel-your-day-bg.png"
                alt="Who We Are Background"
                fill
                className='fuelYourDayBg'
                priority
            />
            <div className='fuelYourDayOverlay'></div>
            <div className='container'>
                <div className='fuelYourDayContent'>
                    <div className='fuelYourDayTop'>
                        <em>&quot;</em>
                        <span>Fuel Your Day with</span>
                        <h3>Pellini Caffè</h3>
                    </div>
                    <div className='fuelYourDayBottom'>
                        <p>The Luxury of Italian Coffee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FuelYourDay

