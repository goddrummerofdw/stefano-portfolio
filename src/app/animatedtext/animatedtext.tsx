import React from 'react'
import { motion } from 'framer-motion'

const AnimatedText = () => {
    const words = ["Hey!", "..."]
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        setInterval(() => {
            setIndex((index) => index < words.length - 1 ? index + 1 : index);
        }, 3000)
    }, [words.length])

    const parent = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.04 }
        }
    }

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -10,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 10,
            },
        },
    };

    return (
        <>
            {words.map((word, wordIndex) => (
                < React.Fragment key={wordIndex} >

                    {wordIndex === index &&
                        <motion.div variants={parent} initial="hidden" animate="visible" className='flex flex-wrap text-xl ' >
                            {
                                Array.from(word).map((letter, index) => (

                                    <motion.span variants={child} key={index} className='overflow-x-hidden'>
                                        {letter === " " ? "\u00A0" : letter}

                                    </motion.span>
                                ))
                            }
                        </motion.div>
                    }
                </React.Fragment >
            ))}
        </>
    )
}

export default AnimatedText