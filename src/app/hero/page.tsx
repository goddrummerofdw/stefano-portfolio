'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useDarkMode } from '../darkmode/darkmodecontext';
import Image from 'next/image';

//Image Source
import heroImage from '../../../public/images/hero/hero.png'


const Hero = () => {
    const { darkMode } = useDarkMode()
    return (

        <div className={`flex bg-primary ${darkMode && "dark:bg-secondary"} justify-center items-center`}>

            <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-80px)] ">
                {/* Col-1 */}
                <div className=' flex justify-end mb-10 flex-col order-2 lg:order-1 sm:mb-32 lg:justify-center lg:mb-0 2xl:pl-16'>

                    <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode && "text-secondary"} sm:text-6xl`}>Stefano Alcantara</h1>

                    <p className={`z-10 mt-5 ${darkMode && "text-secondary"}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore architecto dolore quos deleniti ad esse.</p>

                    <div className='text-center lg:text-left'>
                        <motion.button
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            whileHover={{ scale: 1.05 }}
                            className={` z-10 w-full lg:w-48 rounded-2xl bg-main mt-5 ${darkMode && "dark:bg-primary dark:text-primary"} px-3.5 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`} onClick={() => console.log("This is getStarted button")
                            }>Get in Touch
                        </motion.button>
                    </div>

                </div>
                {/* This is col-2 */}
                <div className='flex items-center justify-center order-1 lg:order-2'>


                    <Image
                        className='absolute w-[250px] h-[400px] translate-y-[70px] sm:w-[400px] sm:h-[600px] sm:translate-y-[200px] lg:-translate-x-[100] xl:w-[700px] xl:h-[1000px]'
                        src={heroImage}
                        alt="hero-image"

                    />

                </div>
            </div>
        </div >
    )
}
export default Hero