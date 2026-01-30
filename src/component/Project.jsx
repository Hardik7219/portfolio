import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";


AOS.init();
function Project({projects}) {
    return (
        <>
            {projects.map((project,i) =>(
            <div key={i} className='h-120 lg:h-80 bg-linear-to-r from-indigo-50/10 to-blue-600/20 w-80 lg:w-200 flex justify-center items-center border rounded-2xl lg:items-center  border-white/20 backdrop-blur-sm shadow-2xl ' >
                    <div className='h-full flex gap-5 flex-col justify-center items-center lg:flex-row w-full lg:w-full'>
                        <div className='h-50 lg:ml-5 lg:h-full w-full flex flex-col  items-center lg:w-100'>
                            <div className='h-10 font-bold text-lg text-white font-mono p-2'>{project.name}</div>
                            <div className='w-full h-40 rounded-t-2xl '>
                                <img src={project.img} className='w-full rounded-t-2xl h-60' alt={project.alt} />
                            </div>
                        </div>
                        <div className='h-70 lg:w-120 lg:h-full rounded-b-2xl lg:rounded-r-2xl bg-zinc-950 flex flex-col justify-center items-center text-wrap '>
                            <p className='text-white w-[80%] text-sm overflow-auto text-wrap'>{project.detail}</p>
                            <div className='border-t w-[80%] m-2 border-indigo-600'>
                                <a href={project.gitLink} className='text-white text-2xl'><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
            </div>  
            ))}   
        </>
    )
}

export default Project
