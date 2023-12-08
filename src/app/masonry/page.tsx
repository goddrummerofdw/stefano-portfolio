"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { imageArray } from './images'
import { useDarkMode } from '../darkmode/darkmodecontext';



const Page = () => {
    const [openModal, setOpenModal] = React.useState(false)
    const { darkMode } = useDarkMode()
    const toggleModal = () => {
        setOpenModal((prev) => !prev)
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode && "text-secondary"} sm:text-6xl text-left lg:text-center`}> Gallery</h1>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-5/6">
                {imageArray.map((e: string, i: number) => {
                    return <motion.div whileHover={{ scale: 0.90 }} className='flex justify-center items-center'
                        key={i} >
                        <Image
                            className="w-full h-auto rounded-lg"
                            src={e}
                            alt="masonry-image"
                            height="100"
                            width="100"
                            onClick={toggleModal}
                        />
                    </motion.div>
                })}
            </div>
        </div>
    )
}

export default Page