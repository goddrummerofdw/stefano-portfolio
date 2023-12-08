"use client"
import React from 'react'
import Image from 'next/image';
import Redreflection from '../../../public/images/about/candid-photo.png'
import Abstract from '../../../public/images/about/abstract.png'
import { useDarkMode } from '../darkmode/darkmodecontext';


const AboutMe = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className='flex justify-center items-center'>
            <div className='flex w-5/6 flex-col lg:flex-row h-[65vh] items-center'>
                
                <div className='w-full lg:w-1/2'>
                    <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode && "text-secondary"} sm:text-6xl text-left lg:text-center`}> About Me <span className='text-main text-xl'>•</span></h1>

                    <p className='text-left lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>


                <div className='flex relative w-full md:w-1/2 h-4/6 justify-center items-center lg:order-first'>

                    <Image
                        className='absolute md:w-[800px]'
                        src={Abstract}
                        alt="abstract-image"
                        sizes='1'
                    />


                    <Image
                        // className='relative translate-y-[100px] lg:w-[400px] lg:h-[500px]'
                        className=' absolute w-[300px] sm:w-[350px] pt-10'
                        src={Redreflection}
                        alt="redguy"
                        sizes='1'
                    />

                </div>



            </div>
        </div>
    )
}

export default AboutMe