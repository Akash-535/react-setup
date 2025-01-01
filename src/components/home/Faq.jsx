import React, { useState } from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { FREQUENTLY_FAQ_LIST } from '../../utils/helper'
import { FaqMinuIcon, FaqPlusIcon } from '../../utils/icons'

const Faq = () => {
    const [open, setOpen] = useState(null)
    const toggleFaq = (index) => {
        setOpen(open === index ? null : index)
    }
    return (
        <div className='container pb-[162px] max-xl:pb-28 max-lg:pb-20 max-md:pb-16 max-xl:px-5'>
            <div className="text-center pb-0.5">
                <Heading heading="Frequently Asked" headingSpanTwo="Questions" />
                <div className='max-w-[556px] mx-auto pt-4'>
                    <Description description="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
                </div>
            </div>
            <div>
                {FREQUENTLY_FAQ_LIST.map((obj, i) => (
                    <div key={i} className={`w-full max-w-[916px] shadow-faq-box mt-7 p-6 mx-auto rounded max-lg:mt-4 max-sm:mt-3 max-sm:p-4 ${open === i ? "bg-prussian-blue" : ""}`}>
                        <button onClick={() => toggleFaq(i)} className={`flex justify-between items-center w-full text-2xl max-md:text-xl max-sm:text-base text-start ${open === i ? "text-white" : "text-deep-blue"}`}>{obj.question}<span className={` duration-300 ease-linear max-md:ml-6 ${open === i ? "rotate-180" : "rotate-90"}`}>{open === i ? <FaqMinuIcon /> : <FaqPlusIcon />}</span></button>
                        <div
                            className={`overflow-hidden duration-300 ease-linear ${open === i ? 'max-h-[60px] pt-3.5 text-white max-md:max-h-none max-md:h-auto' : 'max-h-0'}`}>
                            <p className={`text-base font-normal leading-custom-4xl max-sm:text-sm max-w-[722px] ${open === i ? "text-white opacity-90" : "text-deep-blue"}`}>{obj.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq