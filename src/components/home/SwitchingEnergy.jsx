import React from 'react'
import { ButtonArrowIcon } from '../../utils/icons'
import CustomButton from '../../common/CustomButton'
import { SWITCHING_ENERGY_LIST } from '../../utils/helper'
import Description from '../../common/Description'
import Heading from '../../common/Heading'

const SwitchingEnergy = () => {
    return (
        <div className='container py-40 max-xl:px-5 max-xl:py-28 max-lg:py-20 max-md:py-16'>
            <div className='flex max-lg:flex-col-reverse gap-[75px] max-xl:gap-14 max-md:gap-11 max-sm:gap-6'>
                <div className='max-lg:flex max-lg:justify-center'>
                    <img className='w-full max-w-[507px] max-xl:max-w-md' src="./assets/images/webp/switch-energy-img.webp" alt="switching-energy-img" />
                </div>
                <div className="flex flex-col items-start max-lg:items-center">
                    <div className='max-w-[409px] pb-4 max-sm:pb-2 max-lg:text-center'>
                        <Heading headingSpanOne="Switching Energy" heading="Made Simple" />
                    </div>
                    <div className='max-w-[558px] max-lg:text-center'>
                        <Description description="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." />
                    </div>
                    <p className='text-prussian-blue text-2xl font-normal leading-custom-2xl pt-[38px] max-md:pt-4 max-md:text-xl max-sm:text-lg max-lg:text-center'>Benefits of Comparing Energy Plans</p>
                    <div className='flex items-start flex-col'>
                        {SWITCHING_ENERGY_LIST.map((obj, i) => (
                            <ul key={i} className={` list-disc lg:pl-4 marker:text-deep-blue ${i === 0 ? "pt-7 max-md:pt-3" : i === 2 ? "pb-[42px] pt-2 max-md:pb-5" : "pt-2"}`}>
                                <li className='text-base font-normal text-deep-blue leading-custom-2xl max-sm:text-sm'>{obj}</li>
                            </ul>
                        ))}
                    </div>
                    <CustomButton customButton="Compare With Us" buttonSpan={<ButtonArrowIcon />} />
                </div>
            </div>
        </div>
    )
}

export default SwitchingEnergy