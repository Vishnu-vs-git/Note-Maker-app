import React from 'react'
import { Pencil } from "lucide-react"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg backdrop-blur-md border-b-2 border-gray-700 hover:border-gray-500 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-amber-500 p-3 rounded-xl shadow-lg shadow-amber-600/30 text-white hover:rotate-6 transform transition duration-300">
              <Pencil size={22} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 tracking-tight">
              Note Maker
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {[
                { name: "Home", link: "/", iconPath: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" },
                { name: "My Notes", link: "/notes", iconPath: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" },
                { name: "About", link: "/about", iconPath: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r from-amber-500 to-amber-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300 group-hover:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d={item.iconPath} />
                    </svg>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/new" className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  New Note
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-amber-400 hover:text-amber-300 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
