import React from 'react'
import { IoLogoTwitter } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className='py-16 px-32 text-white bg-gray-900'>
            <div className='flex justify-between gap-10'>


                <div className='flex-col justify-end flex'>
                    <span className='items-center gap-2 flex'>
                        English
                        <TiArrowSortedDown size={14} />
                    </span>
                    
                </div>


                <div className='flex-col gap-10 flex'>
                    <span className='justify-center flex'>
                       <Logo />
                    </span>
                    <ul className='items-center justify-between gap-6 flex'>
                        <li>Terms of service</li>
                        <li>Privacy policy</li>
                        <li>security</li>
                        <li>site map</li>
                    </ul>
                    <div className="social-icons items-center justify-center gap-10 flex">
                    <IoLogoTwitter size={18} />
                    <FaGithub size={18} />
                    <FaFacebookF  size={18}/>
                    <FaLinkedin  size={18}/>
                    </div>
                </div>


                <div className='flex-col justify-end flex'>
                    <span>2023 chimaobi. All rights reserved</span>
                </div>


            </div>
        </footer>
    )
}

export default Footer