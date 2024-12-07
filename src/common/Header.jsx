import React, { useEffect, useState } from 'react'
import { HEADER_LIST } from '../utils/Helper';
import { HeaderArrowIcon } from '../utils/Icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeNavbar = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className='py-4 overflow-hidden min-[1921px]:max-w-[1920px] mx-auto'>
            <div className='container flex justify-between items-center'>
                <div className='relative z-20'>
                    <a href="#" className='text-[#FF002A] text-4xl font-godzilla font-normal'><img className='max-w-[105px]' src="./assets/images/webp/logo.webp" alt="logo" /></a>
                </div>
                <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full max-lg:bg-opacity-80 max-lg:transition-opacity duration-500 ease-linear blur-[80%] justify-center items-center' : 'max-lg:-left-full max-lg:hidden duration-500 ease-linear'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <div key={i}>
                            <ul>
                                <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                    <a onClick={closeNavbar} href={obj.link} className=' text-base font-normal text-white'>{obj.item}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                    <button className='lg:hidden text-base font-bold rounded-[0_50px_50px_20px] bg-white py-3 px-[22px] flex items-center text-deep-blue hover:rounded-[20px_20px_0px_20px] duration-300 ease-linear gap-1'>Get Started <HeaderArrowIcon /></button>
                </div>
                <button className='max-lg:hidden text-base font-bold rounded-[0_50px_50px_20px] bg-white py-3 px-[22px] flex items-center text-deep-blue hover:rounded-[20px_20px_0px_20px] duration-300 ease-linear gap-1'>Get Started <HeaderArrowIcon /></button>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                    <span className={`${open ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -translate-x-10 opacity-0 duration-700 ease-linear' : 'w-8 h-1 bg-white duration-700 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header
