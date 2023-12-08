"use client"
import React from 'react'
import Image from 'next/image';
import Redreflection from '../../../public/images/redreflection.png'
import abstractModel from '../../../public/images/abstract-background-model.png'
import { useDarkMode } from '../darkmode/darkmodecontext';


const AboutMe = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className='flex flex-col w-full h-screen items-center'>
            
            <div className='w-5/6 2xl:w-2/5'>
                <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode && "text-secondary"} sm:text-6xl text-left lg:text-center`}> About Me <span className='text-main text-xl'>•</span></h1>

                <p className='text-left lg:text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


            <div className='flex relative w-full h-4/6 justify-center items-center'>


                <Image
                    className='absolute w-full md:w-[800px]'
                    src={abstractModel}
                    alt="abstractmodel"
                    sizes='1'
                />


                <Image
                    // className='relative translate-y-[100px] lg:w-[400px] lg:h-[500px]'
                    className=' absolute w-[500px]'
                    src={Redreflection}
                    alt="redguy"
                    sizes='1'
                />

            </div>



        </div>
    )
}

export default AboutMe