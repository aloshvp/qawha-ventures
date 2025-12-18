"use client";
import React, { useRef } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Link from 'next/link';

const ProductSlider = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='productSliderWrap'>

            {/* Custom Nav Buttons */}
            <div className="productSwiperSliderNav">
                <div ref={prevRef} className="productSwiperSliderBtn productSwiperPrevBtn"></div>
                <div ref={nextRef} className="productSwiperSliderBtn productSwiperNextBtn"></div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                loop={true}
                className="productSwiper"
            >
                <SwiperSlide>
                    <div className='productItem'>
                        <div className="container">
                            <div className="productContent">
                                <div className='productTitle'>
                                    <span>We Are Multiple Ranges</span>
                                    <h3>Carefully <em></em>
                                        Selected</h3>
                                    <Link href='' scroll={false}>Meet all the Blends</Link>
                                </div>
                                <div className='productImageSec'>
                                    <Image
                                        src="/images/home/beans.png"
                                        alt="Pellini"
                                        width={308}
                                        height={231}
                                        className='productImage1'
                                    />
                                    <Image
                                        src="/images/home/Top-originale_grani.png"
                                        alt="Pellini"
                                        width={408}
                                        height={768}
                                        className='productImage2'
                                    />
                                </div>
                                <div className='productInfo'>
                                    <p>Top Original Grains</p>
                                    <span>Elegant and Refined</span>
                                    <Link href='' scroll={false}>Meet the Blend
                                        <Image src="/images/home/coffee-cup.svg" alt="cup" width={25} height={25} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='productItem'>
                        <div className="container">
                            <div className="productContent">
                                <div className='productTitle'>
                                    <span>We Are Multiple Ranges</span>
                                    <h3>Carefully <em></em>
                                        Selected</h3>
                                    <Link href='' scroll={false}>Meet all the Blends</Link>
                                </div>
                                <div className='productImageSec'>
                                    <Image
                                        src="/images/home/beans.png"
                                        alt="Pellini"
                                        width={308}
                                        height={231}
                                        className='productImage1'
                                    />
                                    <Image
                                        src="/images/home/Top-originale_grani.png"
                                        alt="Pellini"
                                        width={408}
                                        height={768}
                                        className='productImage2'
                                    />
                                </div>
                                <div className='productInfo'>
                                    <p>Top Original Grains</p>
                                    <span>Elegant and Refined</span>
                                    <Link href='' scroll={false}>Meet the Blend
                                        <Image src="/images/home/coffee-cup.svg" alt="cup" width={25} height={25} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default ProductSlider