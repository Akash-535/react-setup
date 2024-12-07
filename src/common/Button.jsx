import React from 'react'

const Button = ({ customButton, buttonSpan }) => {
    return (
        <div>
            <button className='text-base font-bold text-white rounded-[0px_50px_50px_20px] bg-pacific-blue py-3 px-[26px] flex items-center hover:rounded-[20px_20px_0px_20px] duration-300 ease-linear gap-1 max-sm:text-sm max-sm:py-2 max-sm:px-4'>{customButton}<span>{buttonSpan}</span></button>
        </div>
    )
}

export default Button
