import React, { useState } from 'react'
import Heading from '../common/Heading';
import { FAQ_LIST } from '../utils/helper';
import { FaqArrowIcon } from '../utils/icons';
import Description from '../common/Description';

const Faq = () => {
    const [open, setOpen] = useState(0);

    const toggleFaq = (index) => {
        setOpen(open === index ? null : index)
    }
    return (
        <div className='container pb-[162px] max-lg:pb-32 max-md:pb-24 max-sm:pb-16 max-lg:px-5'>
            <div className='flex max-lg:flex-col gap-[73px] items-center'>
                <div className='w-6/12 flex flex-col items-start max-lg:items-center'>
                    <div className='max-w-[456px] pb-2 max-lg:mx-auto max-lg:text-center'>
                        <Heading heading="Comprehensive Utility" headingSpanTwo="Comparisons" />
                    </div>
                    <div className="max-w-[558px] w-full mx-auto pt-11 max-lg:pt-8 max-md:pt-5 max-sm:pt-3">
                        {FAQ_LIST.map((obj, i) => (
                            <div key={i} className={`mb-6 border p-3.5 border-green-white rounded flex items-center gap-5 max-sm:gap-3 ${open === i ? "shadow-box" : ""}`}>
                                <div className='faq-icon'>{obj.faqIcon}</div>
                                <div>
                                    <button onClick={() => toggleFaq(i)}
                                        className="w-full pb-2 flex justify-between items-center font-normal text-2xl max-md:text-xl max-sm:text-base text-deep-blue">
                                        {obj.question}
                                        <span
                                            className={`transform ${open === i ? 'rotate-180' : 'rotate-0'
                                                } duration-300 ease-linear`}>
                                            <FaqArrowIcon />
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden duration-300 ease-linear ${open === i ? 'max-h-[60px]' : 'max-h-0'
                                            }`}
                                    >
                                        <Description description={obj.answer} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-6/12 flex items-center justify-end">
                    <img className='max-w-[530px] w-full' src="./assets/images/webp/faq-img.webp" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Faq