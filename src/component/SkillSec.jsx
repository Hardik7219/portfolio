import Skills from './Skills'
const skillSection = {
    frontend: {
        title: "FrontEnd",
        skills: [
            {
                img: "https://icon.icepanel.io/Technology/svg/React.svg",
                name: "React.js",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
                name: "JavaScript",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
                name: "HTML & CSS",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
                name: "Tailwind CSS",
            },  
            {
                img :"https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
                name :"Next.js"
            },
            {
                img :"https://icon.icepanel.io/Technology/svg/TypeScript.svg",
                name :"TypeScript"
            }
        ],
    },
    backend : {
        title: "BackEnd",
        skills: [
            {
                img: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
                name: "Node.js",
            },
            {
                img: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
                name: "Express.js",
            },
            {
                img: "https://next-auth.js.org/img/logo/logo-sm.png",
                name: "NextAuth.js",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
                name: "MongoDB",
            },  
        ],
    },
    language : {
        title: "Programming Languages",
        skills: [
            {
                img: "https://icon.icepanel.io/Technology/svg/C.svg",
                name: "C",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
                name: "C++",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/Python.svg",
                name: "Python",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/Java.svg",
                name: "Java",
            },  
        ],
    },
    tools : {
        title: "Tools",
        skills: [
            {
                img: "https://icon.icepanel.io/Technology/svg/Git.svg",
                name: "GIT",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/GitHub.svg",
                name: "GITHUB",
            },
            {
                img: "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
                name: "Vite",
            },
            {
                img: "https://icon.icepanel.io/Technology/png-shadow-512/Linux.png",
                name: "Linux",
            },  
        ],
    },
};  
function SkillSec({sec}) {
    let sec1 = skillSection[sec]


    return (
    <>
        <div>
            <Skills title={sec1.title} SKILL={sec1.skills}></Skills>
        </div>
    </>
    )
}

export default SkillSec
