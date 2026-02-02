import React, { useState } from 'react'
import Project from './Project'
import { motion, AnimatePresence } from "framer-motion";


let  projects = [
    [
        {
            name:'Achievement Tracker',
            img : "https://github.com/user-attachments/assets/76685e81-c7e8-46fa-a0a7-0d345025fde5" ,
            alt :"Achievement Tracker",
            detail : 'A full stack Achievement Tracker web application built with Next.js (App Router), React, and Node.js, designed to help users log, manage, and highlight their achievements over time. The application supports secure authentication, profile management, achievement filtering, and a star-based importance system.',
            gitLink: 'https://github.com/Hardik7219/project'
        },
    ],
    [
        {
            name:'Qt Notepad Application',
            img : "https://github.com/user-attachments/assets/65cad0c2-b39e-4605-a7ad-29381c8724e6" ,
            alt: 'Qt Notepad Application',
            detail : 'A simple Notepad desktop application built using C++ and Qt Widgets. This project demonstrates file handling, GUI development, and the use of Qt dialogs in a desktop application.',
            gitLink: 'https://github.com/Hardik7219/Qt-Notepad-Application--Cpp'
        },
    ],
    [
        {
            name:'Tkinter To-Do Application',
            img : "s" ,
            alt:'Tkinter To-Do Application',
            detail : 'A simple GUI-based To-Do Application built using Python and Tkinter.This project helps users manage daily tasks with file handling, keyboard shortcuts, and a scrollbar for better usability.',
            gitLink: 'https://github.com/Hardik7219/Tkinter_TO_DO_APP'
        },
    ]
]

function ProjectSec() {
const [direction, setDirection] = useState(1);

const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % projects.length);
};

const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
};

const [current, setCurrent] = useState(0);

    return (
        <>
            <div className='w-90 lg:w-200 flex h-150 lg:h-120  justify-center gap-5 items-center flex-col '>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ x: direction * 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction * -120, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >   

                        <Project projects={projects[current]} />
                    </motion.div>
                </AnimatePresence>
                <div className='flex gap-22'>
                    <button className='h-10 w-30 hover:cursor-pointer  bg-indigo-500/10 drop-shadow-2xl border border-white/20 hover:bg-indigo-400 rounded-md text-lg font-bold text-white' onClick={next}>Back</button>
                    <button className='h-10 w-30 hover:cursor-pointer  bg-indigo-500/10 drop-shadow-2xl border border-white/20 hover:bg-indigo-400 rounded-md text-lg font-bold text-white' onClick={prev}>Next</button>
                </div>
            </div>
        </>
    )
}

export default ProjectSec
