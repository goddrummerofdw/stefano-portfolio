"use client"
import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./darkmodecontext";

const DarkModeSwitch = () => {
    const [isOn, setIsOn] = React.useState(false);
    const { darkMode, setDarkMode } = useDarkMode()
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setDarkMode((prev) => !prev)
    }

    return (
        <motion.div
            className={`flex justify-start rounded-full cursor-pointer box-border bg-secondary  absolute right-2 top-3 w-14 h-8 p-2 ${darkMode && "bg-white"} ${isOn && "justify-end"}`}
            onClick={toggleSwitch}
        >
            <motion.div className={`w-4 h-4 bg-primary rounded-full  ${darkMode && "bg-secondary"}`} layout transition={spring} />
        </motion.div>
    );
}


export default DarkModeSwitch