import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import {
    RiReactjsFill,
    RiNextjsFill,
    RiHtml5Fill,
    RiCss3Fill,
    RiTailwindCssFill,
    RiJavascriptFill,
} from 'react-icons/ri'
import { FaJava, FaPython, FaPhp, FaFlask } from 'react-icons/fa'
import { SiMysql, SiFigma, SiC, SiBootstrap, SiSpringboot, SiFramer, SiGit, SiGithub } from 'react-icons/si'
import { DiPython } from 'react-icons/di'

const skills = [
    { icon: <RiHtml5Fill />, name: "HTML" },
    { icon: <RiCss3Fill />, name: "CSS" },
    { icon: <RiJavascriptFill />, name: "JavaScript" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiC />, name: "C" },
    { icon: <FaPython />, name: "Python" },
    { icon: <DiPython />, name: "Tkinter" },
    { icon: <FaFlask />, name: "Flask" },
    { icon: <SiMysql />, name: "MySQL Workbench" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <RiReactjsFill />, name: "React.js" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiFramer />, name: "Framer Motion" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
]

const Skills = () => {
    return (
        <div>
            <h2 className='h2 mb-8'>
                My <span className='text-accent italic'>Skills</span>
            </h2>
            <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
                {skills.map((item, index) => {
                    return (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                                    <div className="text-3xl group-hover:text-accent transition-all duration-300">
                                        {item.icon}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-lg">{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills