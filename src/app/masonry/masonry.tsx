"use client";
import React from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'
import { imageArray } from './images'
import { useDarkMode } from '../darkmode/darkmodecontext';


const Masonry = () => {
    const [showImage, setShowImage] = React.useState(false)
    const [info, setinfo] = React.useState<any>();
    const { darkMode } = useDarkMode()

    const variants = {
        visible: {
            transition: { duration: 1, type: "spring", stiffness: 50 },
            overflow: "hidden"

        },
        hidden: {
            scale: 1,
            opacity: 0,
            transition: { duration: 1, type: "spring", stiffness: 50 }
        },

    };

    return (
        <div className={`flex justify-center items-center flex-col bg-primary ${darkMode && "dark:bg-secondary text-secondary"}`}>
            <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode && "text-secondary"} sm:text-6xl text-left w-5/6`}> Gallery</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-5/6 mt-10 ">

                {imageArray.map((e: any, i: number) => {
                    return <motion.div key={i}>
                        <motion.div whileHover={{ scale: 0.9 }} >
                            <Image
                                className="w-full h-auto rounded-xl cursor-pointer "
                                src={e.image}
                                alt="masonry-image"
                                width="100"
                                height="100"
                                onClick={() => {
                                    setShowImage(!showImage)
                                    setinfo(e)
                                }}
                            />
                            
                        </motion.div>
                        <AnimatePresence>
                            {showImage && (
                                <div className='flex fixed w-full h-screen top-0 left-0 bg-zinc-900 justify-center items-center cursor-pointer z-10'
                                    onClick={() => {
                                        setShowImage(!showImage)

                                    }}>
                                    <div className='grid lg:w-3/4 bg-white grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden'>
                                        {/* /Col-1 */}
                                        <motion.div
                                            variants={variants}
                                            animate={showImage ? "visible" : "hidden"}
                                            exit={{ scale: 1, opacity: 0 }}
                                        >
                                            <Image
                                                className='max-lg:rounded-t-xl lg:rounded-l-xl w-full'
                                                src={info.image.src}
                                                alt="masonry-image"
                                                width="500"
                                                height="500"
                                                onClick={() => {
                                                    setShowImage(!showImage)
                                                }}
                                            />
                                        </motion.div>
                                        {/* /Col-2 */}
                                        <div className='h-64 p-8'>
                                            <h2 className='font-bold'>{info.title}</h2>
                                            <p className=''>{info.text}</p>

                                        </div>

                                    </div>
                                </div>

                            )}
                        </AnimatePresence>

                    </motion.div>

                })}







            </div>
        </div>
    )
}

export default Masonry