'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
const Navbar = () => {
    const hoverColor = `#FD5956`
    const hoverScale = 1.1
    return (
        <div className='grid grid-cols-3'>
            {/* This is col1 */}
            <div className='flex items-center pl-10'>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width='100'
                    height="100"
                />
            </div>
            {/* This is col2 */}
            <div className='h-20 w-full flex items-center justify-center'>

                <ul className='flex flex-center space-x-5'>
                    <motion.li whileHover={{ color: hoverColor, scale: hoverScale }}>Home</motion.li>
                    <motion.li whileHover={{ color: hoverColor, scale: hoverScale }}>About Me</motion.li>
                    <motion.li whileHover={{ color: hoverColor, scale: hoverScale }}>Gallery</motion.li>
                    <motion.li whileHover={{ color: hoverColor, scale: hoverScale }}>Contact</motion.li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar