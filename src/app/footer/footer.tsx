"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useDarkMode } from '../darkmode/darkmodecontext';
// Images
import Logo from '../../../public/images/navbar/logo.jpg'
import Facebook from '../../../public/images/socialmedia/facebook.png'
const Footer = () => {
    const { darkMode } = useDarkMode()

    return (
        <div className={`flex justify-center flex-col items-center pt-10  bg-primary ${darkMode && "dark:bg-secondary text-secondary"}`}>
            <Link href={"/"} >
                <Image
                    src={Logo}
                    alt="logo"
                    width="200"
                    height="200"
                />
            </Link>
            <Link href={"https:facebook.com"} >
                <Image
                    src={Facebook}
                    alt="logo"
                    width="35"
                    height="35"
                />
            </Link>

            <p>© Copyright  2023, Stefano Alcantara.
                All rights reserved</p>

        </div>
    )
}

export default Footer