import React from 'react'
import { COMPANIES_LOGO_LIST } from '../utils/helper'

const CompaniesTrust = () => {
    return (
        <div>
            <div className='container px-5 max-lg:pt-14 max-md:pt-10 2xl:pt-14'>
                <h3 className='xl:hidden 2xl:block 2xl:text-start text-custom-3xl font-normal leading-custom-2xl max-md:text-3xl max-sm:text-2xl max-[374.98px]:text-xl max-w-[548px] mx-auto text-center'>More than <span className='text-pacific-blue font-bold'>80,000</span>+ companies trust bill central </h3>
                <div className='pt-16 flex gap-[51px] justify-between items-center flex-wrap max-md:pt-8 max-sm:pt-5'>
                    {COMPANIES_LOGO_LIST.map((obj, i) => (
                        <div key={i}>
                            <img className={`w-full ${i === 0 ? 'max-w-[127px]' : i === 1 ? 'max-w-[102px]' : i === 2 ? 'max-w-[94px] max-h-[32px]' : i === 3 ? 'max-w-[49px] ' : i === 4 ? 'max-w-[62px]' : i === 5 ? 'max-w-[84px]' : i === 6 ? 'max-w-[63px]' : ''}`} src={obj} alt="companies logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompaniesTrust