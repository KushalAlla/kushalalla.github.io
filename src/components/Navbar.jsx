import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-6 px-8">
            <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

            <nav className="flex space-x-6 text-stone-300 text-xl">
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
            </nav>
        </div>
    )
}

export default Navbar
