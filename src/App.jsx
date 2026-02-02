import './App.css'
import { useEffect,useRef } from 'react';
import Typing from './component/Typing';
import SkillSec from './component/SkillSec';
import Project from './component/Project';
import ProjectSec from './component/ProjectSec';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Bg from './component/Bg';


AOS.init();
function App() {
  let headerRef1=useRef(null);
	let homeRef2=useRef(null);
  useEffect(() => {
		const scrollHandler=()=>{
			if (window.scrollY > 20) {  				
        headerRef1.current.classList.add("bg-yellow-900/60");
			} else {
        headerRef1.current.classList.remove("bg-gray-900/60");
			}

		}
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}
	},[]);
  return (
    <>
      <header ref={headerRef1} className='min-h-10 sticky top-0 z-50'>
        <div className='nav flex items-center gap-3 lg:gap-20 text-sm lg:text-lg  min-h-10 min-w-screen'>
          <div className='bo min-h-10 w-2'></div>
          <a href="#home" className='hover:border-b-2 border-cyan-600'> <i className="fa-solid fa-house"></i> Home</a>
          <a href="#about" className='hover:border-b-2 border-cyan-600'><i className='fa-solid fa-user'></i> About</a>
          <a href="#skill" className='hover:border-b-2 border-cyan-600'><i className="fa-solid fa-code"></i> Skills</a>
          <a href="#project" className='hover:border-b-2 border-cyan-600'><i className="fa-solid fa-microchip"></i> projects</a>
          <a href="#contact" className='hover:border-b-2 border-cyan-600'><i className='fa-solid fa-envelope-circle-check'></i> Contact</a>
          <div className='bo min-h-10 w-2 ml-auto'></div>
        </div>
      </header>
      <div id="home" ref={homeRef2} className='home1 min-h-70 lg:h-200'>		
					<div className='msg' data-aos="fade-down-right">
						<Typing
						msg="HARDIK7219"
            style1={{ color:"red", fontFamily: "monospace",
						background: "linear-gradient(to right,rgb(18, 2, 241),rgb(8, 147, 240))",
						backgroundClip:"text",WebkitTextFcontact1illColor: "transparent",fontWeight:"bold"}}
            speed={100}
            eraseSpeed={50}
            pauseTime={1000}
            cursorBlinkSpeed={400}
						style2={"text-2xl sm:text-8xl border-b-2 border-b-purple-400"}
						/>
					</div>
				</div>
        <Bg></Bg>
        <div className='main-sec1 flex pt-10 flex-col items-center w-screen gap-20'>
            <div id="about" className='about1 w-[95%] lg:w-[60%] h-180 lg:h-200 flex p-2 lg:p-10 lg:flex-row flex-col items-center'>
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" className='logo1 w-[80%] lg:w-[40%] h-90 lg:h-100 m-4'></div>
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" className='rounded-2xl  about-info w-[90%] lg:w-[60%] border border-white/90 bg-linear-to-r from-white-200/30 to-blue-200/20 drop-shadow-indigo-500/20 h-80 lg:h-110 '>
                <div className='flex lg:m-10 m-2'>
                  <h1 className='text-purple-900 lg:text-2xl font-extrabold font-mono'>Hi i'am,</h1>
                  <p className='text-indigo-600 lg:text-2xl font-bold font-mono'>Parmar Hardik</p>
                </div>
                <div className='lg:m-10 m-2 flex justify-center items-center hover:scale-101 hover:cursor-pointer bg-zinc-950/20 border border-indigo-600 p-1 rounded-2xl w-52 lg:w-80 h-10 lg:h-15'>
                  <p className='font-mono font-extrabold text-sm lg:text-lg'>FULLSTACK WEB DEVELOPER</p>
                </div>
                <div className=' h-30 w-60 m-2 lg:m-10'>
                    <p className='line-clamp-3 text-gray-400 font-normal'>BCA student with hands-on experience in building full-stack web applications.</p>
                </div>
                <div className='flex justify-end items-center m-1'>
                  <a href="/HARDIK PARMAR.pdf" download>
                    <button className='bg-indigo-400/20 p-2 rounded-lg hover:scale-110 hover:cursor-pointer border font-mono border-white/50'>RESUME</button>
                  </a>
                </div>
              </div>
            </div>
            <div id="skill" className='skill1 w-[95%] lg:w-[60%]  h-250 lg:h-150 gap-2  flex lg:flex-row flex-col pt-2 flex-wrap lg:justify-center items-center'>
              <SkillSec sec="frontend"></SkillSec>
              <SkillSec sec="backend"></SkillSec>
              <SkillSec sec="language"></SkillSec>
              <SkillSec sec="tools"></SkillSec>
            </div>
            <div id="project" className='projects1 h-150 lg:h-120 w-[95%] lg:w-[60%] flex flex-col justify-center  items-center'>
              <ProjectSec></ProjectSec>
            </div>
            <div id="contact" className='contact1 mb-10 h-100 w-[95%] lg:w-[60%] flex justify-center items-center'>
              <div className='bg-linear-to-r from-indigo-400/20 to-cyan-50/20 border border-white/50 rounded-2xl h-[90%] w-[90%] backdrop-blur-2xl'>
                <h1 className='text-2xl text-indigo-500 font-bold m-10  text-shadow-indigo-700 text-shadow-2xs  border-b-2 font-mono border-blue-300/40 border-spacing-x-44'>Get in Touch </h1>
                <div className='m-10 flex gap-2 items-center'>
                  <div className='bg-linear-to-r text-2xl rounded-lg from-purple-400/20 p-1 to-cyan-50/20 '><FontAwesomeIcon icon={faEnvelope} style={{color: 'lime'}} /></div>
                  <a href="mailto:hardik7219m@gmail.com" className='font-medium  text-purple-400/70 '>hardik7219m@gmail.com</a>
                </div>
                <div className='m-10 flex gap-2 items-center'>
                  <div className='bg-linear-to-r text-2xl rounded-lg from-purple-400/20 p-1 to-cyan-50/20 '><FontAwesomeIcon icon={faGithub} style={{color:'#fff'}} /></div>
                  <a href="https://github.com/Hardik7219" className='font-medium  text-purple-400/70 '>Hardik7219</a>
                </div>
                <div className='m-10 flex gap-2 items-center'>
                  <div className='bg-linear-to-r text-2xl rounded-lg from-purple-400/20 p-1 to-cyan-50/20 '><FontAwesomeIcon icon={faLinkedin} style={{color:'#2294f1'}}/></div>
                  <a href="https://www.linkedin.com/in/hardik-parmar-b774a1399" className='font-medium  text-purple-400/70 '>Hardik Parmar</a>
                </div>
              </div>
            </div>
        </div>
        <footer className='bg-zinc-700  flex justify-center items-center'>
          <p className='text-white text-sm font-mono'>© 2026 Hardik. All rights reserved</p>
        </footer>
    </>
  )
}

export default App
