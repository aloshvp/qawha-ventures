"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { testimonials } from '@utils/homeData'

const Testimonial = () => {
    return (
        <section className='testimonialWrap'>
            <div className="container">
                <div className="testimonialHead">
                    <div className="testimonialTitile">
                        <span>Testimonials</span>
                        <h3>What Our Clients Say</h3>
                    </div>
                    <div className='testimonialBtn'>
                        <Link href="" scroll={false}>View More</Link>
                    </div>
                </div>
            </div>
            <div className="testimonialSlider">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={60}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.3,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 2.2,
                            spaceBetween: 60,
                        },
                        1440: {
                            slidesPerView: 2.2,
                            spaceBetween: 70,
                        },
                    }}
                    className="testimonialSwiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='testimonialCard'>
                                <div className='testimonialContent'>
                                    <div className='quoteImage'>
                                        <Image
                                            src='/images/home/quotes.png'
                                            alt='person'
                                            width={40}
                                            height={40}
                                            className='quoteImg'
                                        />
                                    </div>
                                    <p className='testimonialText'>{testimonial.description}</p>
                                </div>
                                <div className='testimonialAuthor'>
                                    <div className='authorImage'>
                                        <Image
                                            src='/images/home/person.png'
                                            alt='person'
                                            width={100}
                                            height={100}
                                            className='authorImg'
                                        />
                                    </div>
                                    <div className='authorInfo'>
                                        <h4>{testimonial.name}</h4>
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