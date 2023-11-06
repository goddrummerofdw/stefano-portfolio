'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useDarkMode } from '../darkmode/darkmodecontext';
import Image from 'next/image';
import SVGImage from '../../../public/images/dotted-line.svg'
import heroImage from '../../../public/images/header-image-view.png'
import DottedMobile from './../../../public/images/dotted-mobile.svg'

const Hero = () => {
    const { darkMode } = useDarkMode()



    return (
        <div className={`bg-primary ${darkMode && "dark:bg-secondary"}`}>



            <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-80px)]">
                {/* Col-1 */}
                <div className='flex border-2 border-cyan-500 pl-5 pr-5 justify-end mb-16 flex-col order-2 lg:order-1 sm:mb-32 lg:justify-center lg:mb-0 2xl:pl-16'>
                    <p className='font-bold text-main'>Something</p>
                    <h1 className={`font-bold text-4xl tracking-tight${darkMode && "text-secondary"} sm:text-6xl`}>Stefano Alcantara</h1>


                    <p className='mt-5 border-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore architecto dolore quos deleniti ad esse.</p>

                    <motion.button
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        whileHover={{ scale: 1.1 }}
                        className={`w-full lg:w-48 rounded-2xl bg-main mt-5 ${darkMode && "dark:bg-primary dark:text-primary"} px-3.5 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`} onClick={() => console.log("This is getStarted button")
                        }>Get in Touch
                    </motion.button>

                </div>
                {/* This is col-2 */}
                <div className='flex items-center justify-center border-2 border-black order-1  lg:order-2 2xl:justify-start'>

                    {/* This one is for desktop */}
                    <div className='hidden lg:block absolute h-[600px] w-[1500px] translate-y-[100px] left-0'>
                        <Image
                            src={SVGImage}
                            alt="dotted-line"
                            fill
                        />
                    </div>

                    {/* This one is for mobile*/}
                    <div className='absolute block lg:hidden h-[300px] w-[300px] translate-x-[120px] translate-y-[200px]'>
                        <Image
                            src={DottedMobile}
                            alt="dotted-line"
                            fill
                        />
                    </div>

                    {/* Hero Image */}
                    <div className='absolute w-[250px] h-[400px] translate-y-[70px] border-2 border-black sm:w-[400px] sm:h-[600px] sm:translate-y-[200px] lg:-translate-x-[100] 2xl:w-[700px] 2xl:h-[1000px]' >
                        <Image
                            src={heroImage}
                            alt="hero-image"
                            fill
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Hero