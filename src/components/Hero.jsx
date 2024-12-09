import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { ButtonArrowIcon } from '../utils/icons'

const Hero = () => {
    return (
        <div className='bg-hero-bg max-2xl:bg-contain bg-cover max-xl:bg-cover bg-top bg-no-repeat max-2xl:px-5'>
            <Header />
            <div className='container pt-[120px] max-xl:py-16 max-md:py-9 max-sm:py-4'>
                <div className='flex max-lg:flex-col max-xl:gap-6'>
                    <div className="w-6/12 max-lg:w-full max-lg:text-center flex flex-col justify-between">
                        <div>
                            <h1 className='text-custom-6xl text-white font-normal leading-custom-2xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
                            <p className='text-base text-white font-normal max-w-[506px] pt-4 pb-[42px] leading-custom-4xl max-sm:text-sm max-sm:pt-2 max-lg:pb-7 max-md:pb-4 max-lg:mx-auto'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
                            <form className='flex p-[9px] pl-[22px] bg-white rounded-[0px_50px_50px_20px] items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto max-sm:gap-1'>
                                <input type="text" placeholder='Start typing your address' required className='placeholder:text-deep-blue placeholder:text-base placeholder:font-normal !outline-none !bg-transparent text-deep-blue text-base font-normal placeholder:max-sm:text-sm max-sm:text-sm w-full' />
                                <CustomButton customButton="Compare" buttonSpan={<ButtonArrowIcon />} />
                            </form>
                        </div>
                        <h3 className='max-xl:hidden 2xl:hidden text-custom-3xl font-normal leading-custom-2xl max-md:text-3xl max-sm:text-2xl max-[374.98px]:text-xl max-lg:pt-5 text-start max-w-[548px]'>More than <span className='text-pacific-blue font-bold'>80,000</span>+ companies trust bill central </h3>
                    </div>
                    <div className='w-6/12 max-lg:w-full max-lg:items-center max-lg:flex max-lg:justify-center'>
                        <div className='relative flex justify-end'>
                            <img className='absolute -top-14 -right-[11%] max-sm:hidden max-xl:-right-4 max-xl:-top-8 max-lg:-right-10 max-lg:-top-3' src="./assets/images/webp/hero-dots.webp" alt="dots" />
                            <img className='max-w-[558px] max-lg:max-w-[490px] w-full relative z-[1] rounded' src="./assets/images/webp/hero-img.webp" alt="hero img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

