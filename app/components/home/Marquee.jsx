import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeComponent = () => {
    return (
        <section className='marqueeWrap'>
            <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={true}
                className="marqueeContent"
            >
                <div className="marqueeItem">
                    <span>Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy Discover the Taste of Italy </span>
                </div>
            </Marquee>
        </section>
    )
}

export default MarqueeComponent