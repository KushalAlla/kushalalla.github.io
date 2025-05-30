import { FaGithub, FaLinkedin, FaRegCopy } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Navbar = () => {
    const email = 'kushalreddyalla@outlook.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        toast.success('Email copied to clipboard!');
    };

    return (
        <div className="flex items-center justify-between py-6 px-8">
            <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

            <div className="flex items-center space-x-6 text-stone-300 text-xl">
                <a
                    href="https://github.com/KushalAlla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/kushalkumarreddyalla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <FaLinkedin />
                </a>

                <div className="flex items-center space-x-2 relative group">
                    <span className="text-sm sm:text-base">{email}</span>

                    <div onClick={handleCopy} className="cursor-pointer">
                        <FaRegCopy className="hover:text-blue-400 transition-colors" />
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;


