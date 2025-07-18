import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaPython,
    FaGitAlt,
    FaRobot,
    FaLinux
} from 'react-icons/fa';
import {
    SiFirebase,
    SiMongodb,
    SiPostgresql,
    SiFlutter,
    SiNextdotjs,
    SiCplusplus,
    SiExpress,
    SiAmazonaws,
    SiDjango
} from 'react-icons/si';

const skills = [
    { name: 'DJANGO', icon: <SiDjango />, color: '#092E20' }, // Django replaces ReactJS
    { name: 'NODE JS', icon: <FaNodeJs />, color: '#339933' },
    { name: 'FIREBASE', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'MONGODB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PYTHON', icon: <FaPython />, color: '#3776AB' },
    { name: 'SCIKIT-LEARN', icon: <FaRobot />, color: '#FF5722' }, // sklearn replaces Bootstrap
    { name: 'POSTGRESQL', icon: <SiPostgresql />, color: '#336791' }, // replaces MySQL
    { name: 'GIT', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'FLUTTER', icon: <SiFlutter />, color: '#02569B' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'NEXT JS', icon: <SiNextdotjs />, color: '#E8E8E8' },
    { name: 'EXPRESS JS', icon: <SiExpress />, color: '#303030' },
    { name: 'AI', icon: <FaRobot />, color: '#FF5722' },
    { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' },
    { name: 'LINUX', icon: <FaLinux />, color: '#FCC624' }, // Linux replaces GCP
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
