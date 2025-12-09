import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CEO, TechCorp",
            image: "/images/testimonials/sarah.jpg",
            description: "Qahwa Ventures transformed our business with their innovative solutions. Their expertise in F&amp;B and franchise management is unparalleled. Highly recommended!"
        },
        {
            id: 2,
            name: "Ahmed Al-Rashid",
            position: "Restaurant Owner",
            image: "/images/testimonials/ahmed.jpg",
            description: "Working with Qahwa Ventures has been exceptional. Their strategic approach and commitment to quality helped us expand our brand across the region successfully."
        },
        {
            id: 3,
            name: "Maria Gonzalez",
            position: "Food & Beverage Director",
            image: "/images/testimonials/maria.jpg",
            description: "The team&apos;s dedication to excellence and deep understanding of the F&amp;B industry made our partnership incredibly productive. Outstanding results!"
        },
        {
            id: 4,
            name: "David Chen",
            position: "Franchise Partner",
            image: "/images/testimonials/david.jpg",
            description: "Qahwa Ventures provided us with comprehensive support and strategic guidance. Their expertise helped us achieve remarkable growth in our franchise network."
        }
    ]

    return (
        <section className='testimonialWrap'>
            <div className="container">
                <div className="testimonialHead">
                    <div className="testimonialTitile">
                        <span>Testimonials</span>
                        <h3>What Our Clients Say</h3>
                    </div>
                    <div className='testimonialBtn'>
                        <Link href="">View More</Link>
                    </div>
                </div>
            </div>
            <div className="testimonialSlider">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="testimonialSwiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='testimonialCard'>
                                <div className='testimonialContent'>
                                    <p className='testimonialText'>&quot;{testimonial.description}&quot;</p>
                                </div>
                                <div className='testimonialAuthor'>
                                    <div className='authorImage'>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={60}
                                            height={60}
                                            className='authorImg'
                                        />
                                    </div>
                                    <div className='authorInfo'>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.position}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial