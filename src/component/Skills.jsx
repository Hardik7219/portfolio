import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode,faDatabase,faGear,faLaptopCode} from '@fortawesome/free-solid-svg-icons'

let Title ={
    'FrontEnd' : <FontAwesomeIcon icon={faCode} beat style={{color: "#32bbf5", fontWeight : 'bolder'}} />,
    'BackEnd': <FontAwesomeIcon icon={faDatabase} beat style={{color: "#19e11c",}} />,
    'Tools':<FontAwesomeIcon icon={faGear} beat style={{color: "#6f44ee",}} />,
    'Programming Languages': <FontAwesomeIcon icon={faLaptopCode} beat style={{color: "#0fffe3",}} />
}
function Skills({title,SKILL}) {
    let logo = Title[title] || []
    return (
        <>
            <div className='h-50 w-80 p-2 hover:scale-101 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg '>
                <div className='flex items-center p-1 gap-2'>
                    <div className='bg-indigo-500/20 h-10 w-10 font-bold hover:cursor-pointer text-lg flex justify-center items-center rounded-sm '>
                    {logo}
                    </div>
                    <h1 className=' text-shadow-white text-white text-lg font-bold'>{title}</h1>
                </div>
                <div className=' flex flex-wrap mt-4'>
                    { SKILL.map((skill,id)=>(
                    <div key={id} className='bg-linear-to-r  m-1 hover:cursor-pointer from-indigo-400/20 to-cyan-500/20 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl hover:scale-105 h-8 w-auto flex items-center px-2 gap-2'>
                        <img src={skill.img}  alt="" className='h-5 w-5 shrink-0'/>
                        <p className='text-white font-mono text-sm'>{skill.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills