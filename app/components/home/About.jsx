import Image from 'next/image'

const About = () => {
    return (
        <section className='aboutWrap'>
            <Image
                src="/images/home/aboutus-bg.png.png"
                alt="Who We Are Background"
                fill
                className='aboutBg'
                priority
            />
            <div className="container">
                <div className="aboutContent">
                    <div className="aboutContentLft">
                        <h3>Crafted in Italy.
                            <em>Enjoyed with elegance.</em>
                        </h3>
                    </div>
                    <div className="aboutContentRght">
                        <p>
                            Qahwa Ventures is a distributor of imported Pellini Caffè S.P.A, offering authentic traditional Italian coffee. We take pride in our strong global supplier relationships and our ability to meet evolving market needs. With extensive experience in distribution, we lead across supermarkets, convenience stores, and retail markets. Our focus is on long-term partnerships and delivering exceptional value through reliable, efficient trading services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About