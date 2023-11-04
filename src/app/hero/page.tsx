'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useDarkMode } from '../darkmode/darkmodecontext';
import Form from '@/app/form/page'
import Image from 'next/image';

const Hero = () => {
    const { darkMode } = useDarkMode()


    return (
        <div className={`w-full bg-primary ${darkMode && "dark:bg-secondary"}`}>
            <div className="grid grid-cols-2 h-screen">
                <div className='flex border-2 border-cyan-500 pl-20 pr-20 justify-center flex-col'>
                    <p className='text-main'>Something</p>
                    <h1 className={`mt-5 text-4xl font-bold tracking-tight${darkMode && "text-secondary"} sm:text-6xl`}>Stefano Alcantara</h1>
                    <p className='mt-5 mr-36 border-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore architecto dolore quos deleniti ad esse illo quia praesentium repellat repudiandae sint dolor sit, voluptatibus veritatis. Dolor tenetur at ratione.</p>
                    <motion.button
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        whileHover={{ scale: 1.1 }}
                        className={`w-36 rounded-md bg-main mt-5 ${darkMode && "dark:bg-primary dark:text-primary"} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`} onClick={() => console.log("This is getStarted button")
                        }>Get in Touch
                    </motion.button>

                </div>
                {/* This is col-2 */}
                <div className='flex border-2 border-red-500 pr-10 justify-center items-center'>
                    <div className='h-[50%] w-[70%] absolute border-2 border-black left-0 translate-y-[100px]'>
                  
                    </div>

                    <div className='border-2 borde-black'>
                        <Image
                            src="/images/header-image-view.png"
                            alt="hero-image"
                            width="200"
                            height="100"
                        />
                    </div>


                </div>
            </div>
            <Form  />

        </div >
    )
}
export default Hero