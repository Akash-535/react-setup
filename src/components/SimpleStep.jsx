import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { SIMPLE_STEPS_LIST } from '../utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SimpleStep = () => {
    return (
        <div className='pb-[162px] max-lg:pb-32 max-md:pb-24 max-sm:pb-16'>
            <div className='container pb-0.5 px-5'>
                <div className='text-center'>
                    <Heading heading="Simple Steps to" headingSpanTwo="Switch" />
                    <div className='pt-4 max-w-[610px] mx-auto max-md:pt-2'>
                        <Description description="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
                    </div>
                </div>
            </div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true
                    },
                    640: {
                        slidesPerView: 2,
                        centeredSlides: true
                    },
                    992: {
                        slidesPerView: 3,
                        centeredSlides: false
                    },
                    1200: {
                        slidesPerView: 4,
                        centeredSlides: false
                    },

                }} >
                <div className='flex items-center justify-center pt-14 max-lg:pt-7 max-sm:pt-5'>
                    {SIMPLE_STEPS_LIST.map((obj, i) => (
                        <SwiperSlide>
                            <div className='relative group overflow-hidden max-md:max-h-[450px] max-w-[360px] w-full mx-auto' key={i}>
                                <img className='max-w-[360px] max-lg:w-full' src={obj.stepImg} alt={obj.alt} />
                                <div className='absolute group-hover:h-0 group-hover:w-0 group-hover:top-1/2 group-hover:left-full group-hover:translate-x-full group-hover:translate-y-[-50%] group-hover:opacity-100 group-hover:z-10 duration-500 ease-linear bg-twilight-blue opacity-94 top-0 left-0 w-full h-full'>
                                    <div className='relative w-full h-full'>
                                        <p className={`absolute translate-x-[-50%] text-center leading-custom-2xl text-custom-2xl max-md:text-xl text-deep-blue -rotate-90 min-w-[574px] group-hover:hidden ${i === 0 ? "top-1/2 left-1/2  " : i === 1 ? "top-[68%] left-1/2" : i === 2 ? "top-[74%] left-1/2 " : i === 3 ? "top-[65.5%] left-1/2" : ""}`}>{obj.imgContent}</p>
                                    </div>
                                </div>
                                <div className='bg-marine absolute top-[-50%] group-hover:top-[73%] max-md:group-hover:top-[65%] group-hover:bottom-0 duration-500 ease-linear w-full p-8 max-md:p-2.5'>
                                    <h4 className='leading-custom-2xl text-custom-2xl font-normal pb-3.5 text-white max-md:text-2xl max-md:pb-1.5'>{obj.heading}</h4>
                                    <p className='leading-custom-5xl font-normal text-white text-base max-md:text-base'>{obj.description}</p>
                                </div>
                            </div></SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    )
}

export default SimpleStep