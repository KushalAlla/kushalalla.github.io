// import { motion } from 'framer-motion';
// import {
//     FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws,
// } from 'react-icons/fa';
// import { SiJavascript, SiMysql } from 'react-icons/si';

// const techs = [
//     { icon: <FaPython className="text-yellow-300" />, name: 'Python' },
//     { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
//     { icon: <FaReact className="text-blue-400" />, name: 'React' },
//     { icon: <FaNodeJs className="text-green-400" />, name: 'Node.js' },
//     { icon: <SiMysql className="text-blue-600" />, name: 'SQL' },
//     { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
//     { icon: <FaAws className="text-orange-300" />, name: 'AWS' },
// ];

// const TechStack = () => {
//     return (
//         <motion.section
//             id="tech"
//             className="min-h-screen py-24 px-4 scroll-mt-20 snap-start"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             viewport={{ once: true, amount: 0.3 }}
//         >
//             <h2 className="text-3xl font-bold text-white mb-10 text-center">Tech Stack</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
//                 {techs.map((tech, index) => (
//                     <motion.div
//                         key={index}
//                         className="flex flex-col items-center justify-center text-center bg-zinc-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.05 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="text-4xl mb-2">{tech.icon}</div>
//                         <p className="text-white text-sm">{tech.name}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.section>
//     );
// };

// export default TechStack;

import { motion } from 'framer-motion';
import {
    FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws, FaWindows, FaPeopleArrows,
} from 'react-icons/fa';
import {
    SiJavascript, SiDotnet, SiMysql, SiPostman,
} from 'react-icons/si';
import { RiFlowChart } from 'react-icons/ri';

const techs = [
    { icon: <FaPython className="text-yellow-300" />, name: 'Python' },
    { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact className="text-blue-400" />, name: 'React' },
    { icon: <FaNodeJs className="text-green-400" />, name: 'Node.js' },
    { icon: <SiDotnet className="text-purple-500" />, name: 'ASP.NET' },
    { icon: <SiMysql className="text-blue-600" />, name: 'SQL' },
    { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
    { icon: <FaAws className="text-orange-300" />, name: 'AWS' },
    { icon: <SiPostman className="text-orange-500" />, name: 'Postman' },
    { icon: <FaWindows className="text-blue-500" />, name: 'Windows' },
    { icon: <FaPeopleArrows className="text-blue-300" />, name: 'Agile' },
    { icon: <RiFlowChart className="text-pink-300" />, name: 'SDLC' },
];

const TechStack = () => {
    return (
        <motion.section
            id="tech"
            className="min-h-screen py-24 px-4 scroll-mt-20 snap-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center text-center bg-zinc-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-4xl mb-2">{tech.icon}</div>
                        <p className="text-white text-sm">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default TechStack;
