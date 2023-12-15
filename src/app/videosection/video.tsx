"use client";
import React from 'react'
import { useDarkMode } from '../darkmode/darkmodecontext';

const Video = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex justify-center items-center ${darkMode && 'dark:bg-secondary'}`}>

            <div className='w-5/6'>
                <iframe className='w-full h-1/2 rounded-xl aspect-video' src="https://www.youtube.com/embed/0MiR7bC9B5o?si=Pbsk5A5NTgUOOvvL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

        </div>
    )
}

export default Video