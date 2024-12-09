import React from 'react'

const Heading = ({ heading, headingSpanOne, headingSpanTwo, }) => {
    return (
        <h2 className='text-5xl font-normal leading-custom-2xl text-deep-blue max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'> <span className='font-bold'>{headingSpanOne}</span> {heading} <span className='font-bold'>{headingSpanTwo}</span></h2>
    )
}

export default Heading