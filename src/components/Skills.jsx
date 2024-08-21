import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiTailwindcss, SiBootstrap, SiMysql, SiFlutter, SiNextdotjs, SiCplusplus, SiExpress } from 'react-icons/si';

const skills = [
    { name: 'JAVASCRIPT', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'REACT JS', icon: <FaReact />, color: '#61DAFB' },
    { name: 'NODE JS', icon: <FaNodeJs />, color: '#339933' },
    { name: 'FIREBASE', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'MONGODB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'GITHUB', icon: <FaGithub />, color: '#E8E8E8' },
    { name: 'TAILWIND CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'PYTHON', icon: <FaPython />, color: '#3776AB' }, // Python blue
    { name: 'BOOTSTRAP', icon: <SiBootstrap />, color: '#7952B3' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'GIT', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'FLUTTER', icon: <SiFlutter />, color: '#02569B' }, // Added Flutter
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' }, // Added C++ with real icon
    { name: 'NEXT JS', icon: <SiNextdotjs />, color: '#E8E8E8' }, // Changed Next.js color to light gray
    { name: 'EXPRESS JS', icon: <SiExpress />, color: '#303030' }, // Changed Express.js color to dark gray
];

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto p-4 text-white bg-black" id="skills">
            <h1 className="mt-0 mb-10 text-4xl font-bold">My Skills</h1>
            <div className="flex max-w-[1200px] gap-8 md:gap-12 flex-wrap justify-center">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center m-4 transition-transform transform hover:scale-110"
                    >
                        <div className="mb-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl" style={{ color: skill.color }}>{skill.icon}</div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
