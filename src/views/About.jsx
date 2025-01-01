import React from 'react'
import { TABLE_PRACTICE_LIST } from '../utils/helper'

const About = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-[#191423] py-20 px-5 font-avantt'>
      <div className='max-w-[1145px] mx-auto overflow-auto'>
      <div className='flex items-center w-full gap-[78px] flex-wrap justify-center max-lg:gap-12 max-md:gap-8'>
        <div className='max-w-[481px] max-md:mx-auto max-md:text-center'>
          <h2 className='text-[46px] font-semibold text-white pb-12 max-lg:pb-8 max-md:-bottom-5 max-sm:pb-3 max-md:text-3xl max-sm:text-2xl'>Competition</h2>
          <p className='text-white pt-0.5 max-sm:text-sm'>Given our best in class offering, we need to cut through by opting for penetration pricing.</p>
          <p className='text-white pt-2 max-sm:text-sm max-sm:pt-1'>This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.</p>
          <p className='text-white py-2 max-sm:text-sm max-sm:pt-1'>The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.</p>
          <p className='text-white max-sm:text-sm'>As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.</p>
        </div>
       <div className='bg-[#026070] py-[52px] px-[13px] max-w-[580px] mx-auto flex rounded-xl overflow-auto'>
          <div>
          <div className='min-h-[64px] min-w-[140px] w-full' >
          </div>
          <div className='w-full min-w-[140px] flex items-center min-h-[54.61px] border-t border-black'>
            <p className='text-white text-sm'>Mobile App</p>
          </div>
          <div className='w-full min-w-[140px] flex items-center min-h-[54.61px] border-t border-black'>
            <p className='text-white text-sm'>Invoicing</p>
          </div>
          <div className='w-full min-w-[140px] flex items-center min-h-[54.61px] border-t border-black'>
            <p className='text-white text-sm'>Bookkeeping</p>
          </div>
          <div className='w-full min-w-[140px] flex items-center min-h-[71.61px] border-t border-black'>
            <p className='text-white text-sm'>Accountancy <span className='block'>support</span></p>
          </div>
          <div className='w-full min-w-[140px] flex items-center min-h-[54.61px] border-t border-black'>
            <p className='text-white text-sm'>Tax Filing</p>
          </div>
          <div className='w-full min-w-[140px] flex items-center min-h-[54.61px] border-t border-black'>
            <p className='text-white text-sm'>Fee</p>
          </div>
          </div>
          <div className='flex justify-center items-center'>
            {TABLE_PRACTICE_LIST.map((obj, i) => (   
              <div key={i}>
                  <div className={`px-[30.89px] min-h-[64px] flex justify-center items-center rounded-t-md mr-2 min-w-[94px] max-w-[94px] ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p className='font-semibold text-xs'>{obj.brandName}</p>
                  </div>
                  <div className='border-t pr-2 border-black'>
                <div  className={`px-[15.78px] min-h-[53.61px] flex justify-center items-center min-w-[94px] max-w-[94px] ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p>{obj.lineOne}</p>
                  </div>
                </div>
                  <div className='border-t pr-2 border-black'>
                <div  className={`px-[15.78px] min-h-[53.61px] flex justify-center items-center min-w-[94px] max-w-[94px] ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p>{obj.lineTwo}</p>
                  </div>
                </div>
                  <div className='border-t pr-2 border-black'>
                <div  className={`px-[15.78px] min-h-[53.61px] flex justify-center items-center min-w-[94px] max-w-[94px] ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p>{obj.lineThree}</p>
                  </div>
                </div>
                  <div className='border-t pr-2 border-black'>
                <div  className={`px-[15.78px] min-h-[70.61px] flex justify-center items-center min-w-[94px] max-w-[94px] ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p>{obj.lineFour}</p>
                  </div>
                </div>
                  <div className='border-t pr-2 border-black'>
                <div  className={`px-[15.78px] min-h-[53.61px] flex justify-center items-center min-w-[94px] max-w-[94px] ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p>{obj.lineFive}</p>
                  </div>
                </div>
                <div className='border-t pr-2 border-black'>
                <div className={`px-[15.78px] min-h-[53.61px] flex justify-center items-center min-w-[94px] max-w-[94px] rounded-b-md ${i === 3 ? "bg-[#56E3CB]":"bg-white"}`}>
                    <p className={`text-[6px] text-center ${i === 0 ? "max-w-8":i === 1 ?"max-w-8":i === 2 ? "max-w-10":""}`}>{obj.lineSix}</p>
                  </div>
                </div>
              </div>           
            )            
          )}
          </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default About