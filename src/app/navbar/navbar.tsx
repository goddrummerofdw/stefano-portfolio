'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link';
const Navbar = () => {
    const hoverColor = `#FD5956`
    const hoverScale = 1.1
    return (
        <div className='grid grid-cols-3'>
            {/* This is col1 */}
            <div className='flex items-center pl-10 order-1 '>
                <Link href={"https://www.facebook.com"}>
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width='100'
                        height="100"
                    />
                </Link>

            </div>



            {/* This is col2 */}
            <div className='h-20 w-full flex items-center justify-center xl:order-1'>

                <ul className='hidden xl:flex flex-center space-x-5'>
                    <motion.li className='cursor-pointer ' whileHover={{ color: hoverColor, scale: hoverScale }}>Home</motion.li>
                    <motion.li className='cursor-pointer ' whileHover={{ color: hoverColor, scale: hoverScale }}>About Me</motion.li>
                    <motion.li className='cursor-pointer ' whileHover={{ color: hoverColor, scale: hoverScale }}>Gallery</motion.li>
                    <motion.li className='cursor-pointer ' whileHover={{ color: hoverColor, scale: hoverScale }}>Contact</motion.li>
                </ul>
                <p>burger</p>

            </div>


        </div>
    )
}

export default Navbar