import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-6 px-8">
            <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

            <nav className="flex space-x-6 text-stone-300 text-xl">
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/your-profile"
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
