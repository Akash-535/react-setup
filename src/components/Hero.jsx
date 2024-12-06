import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Button from '../common/Button'
import { ButtonArrowIcon } from '../utils/Icons'
import heroImg from '../assets/images/webp/hero-img.webp'
import dotsImg from '../assets/images/webp/hero-dots.webp'

const Hero = () => {
    return (
        <div className='bg-hero-bg max-2xl:bg-contain bg-cover max-xl:bg-cover bg-top bg-no-repeat'>
            <Header />
            <div className='container pt-[109px] max-lg:pt-20 max-md:pt-12 max-sm:pt-8'>
                <div className='flex max-lg:flex-col gap-10'>
                    <div className="w-6/12 max-lg:w-full max-lg:text-center flex justify-between flex-col">
                        <div>
                            <h1 className='text-custom-6xl text-white font-normal leading-custom-2xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Easily Compare <span className='font-bold'>Energy, Gas, and Internet</span> Plans</h1>
                            <p className='text-base text-white font-normal max-w-[506px] pt-4 pb-[42px] leading-custom-4xl max-sm:text-sm max-sm:pt-2 max-lg:pb-7 max-md:pb-4 max-lg:mx-auto'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
                            <div className='flex p-[9px] pl-[22px] bg-white rounded-full rounded-tl-none items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto'>
                                <input type="text" placeholder='Start typing your address' className='placeholder:text-deep-blue placeholder:text-base placeholder:font-normal !outline-none !bg-transparent text-deep-blue text-base font-normal placeholder:max-sm:text-sm max-sm:text-sm' />
                                <Button customButton="Compare" buttonSpan={<ButtonArrowIcon />} />
                            </div>
                        </div>
                        <div>
                            <p className='text-custom-3xl font-normal max-md:text-3xl max-sm:text-2xl max-lg:pt-5 max-xl:text-white 2xl:text-white'>More than <span className='text-pacific-blue font-bold'>80,000</span>+ companies trust bill central </p>
                        </div>
                    </div>
                    <div className='w-6/12 max-lg:w-full max-lg:items-center max-lg:flex max-lg:justify-center'>
                        <div className='relative'>
                            <img className='absolute -top-14 right-4 max-sm:hidden max-lg:-right-10 max-lg:-top-3' src={dotsImg} alt="dots" />
                            <img className='max-w-[558px] w-full relative z-[1] rounded' src={heroImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
