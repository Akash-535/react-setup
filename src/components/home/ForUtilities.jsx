import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { ButtonNextArrow, ThumbStarIcon } from '../../utils/icons'
import { FOR_UTILITIES_LIST } from '../../utils/helper'

const ForUtilities = () => {
    return (
        <div className='container pb-[162px] max-xl:pb-28 max-lg:pb-20 max-md:pb-16 max-xl:px-5'>
            <div className="text-center pb-0.5">
                <Heading heading="Why Choose Us for" headingSpanTwo="Utilities" />
                <div className='max-w-[620px] mx-auto pt-4'>
                    <Description description="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" />
                </div>
            </div>
            <div className='pt-14 flex max-xl:flex-col max-lg:pt-10 max-md:pt-7 max-sm:pt-4'>
                <div className="w-5/12 flex justify-center max-xl:w-full items-center lg:pt-[13px]">
                    <div className='p-10 bg-prussian-blue rounded max-w-[424px] max-h-[596px] max-md:max-w-[310px] max-lg:max-h-none max-md:p-7 max-sm:max-w-none'>
                        <div className='pb-0.5 thumb-star-icon'><ThumbStarIcon /></div>
                        <div className='pt-7'>
                            <h3 className='text-2xl font-normal leading-custom-2xl text-white max-md:text-xl max-sm:text-lg'>Tailored Recommendations</h3>
                            <p className='text-white max-w-[344px] text-base pt-3 opacity-90 pb-5 max-sm:text-sm max-sm:pt-1'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>
                            <button className='py-3 px-6 bg-white rounded-full mt-0.5 button-next-arrow overflow-hidden'><ButtonNextArrow /></button>
                        </div>
                    </div>
                </div>
                <div className="w-7/12 max-xl:w-full">
                    <div className='flex flex-wrap pt-3 max-xl:justify-center'>
                        {FOR_UTILITIES_LIST.map((obj, i) => (
                            <div key={i} className='p-3 w-6/12 max-md:w-full max-w-[334px] max-lg:p-2 max-md:px-0 max-sm:max-w-none'>
                                <div className='shadow-box p-6 hover:bg-prussian-blue group duration-300 ease-linear transition-all h-[286px] border border-green-white rounded max-xl:p-5 max-md:h-auto'>
                                    <div className='pb-0.5 utility-icon'>{obj.utilitiesIcon}</div>
                                    <h3 className={`group-hover:text-white text-2xl font-normal leading-custom-2xl max-md:text-xl max-sm:text-lg pt-4 max-md:pt-2 ${i === 3 ? "xl:text-nowrap" : ""}`}>{obj.title}</h3>
                                    <p className='text-base font-normal leading-custom-4xl text-deep-blue max-sm:text-sm group-hover:text-white max-w-[286px] pt-3 max-md:pt-1.5'>{obj.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForUtilities