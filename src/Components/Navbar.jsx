import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ setshowLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-lg font-medium transition-all duration-150 ease-out  ${
      isActive
        ? 'text-[#142B32] border-b-2 border-[#C9A86A] pb-1'
        : 'text-[#142B32] hover:text-[#C9A86A]'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-3 text-base font-medium transition-all duration-300 ${
      isActive
        ? 'text-[#C9A86A]'
        : 'text-[#142B32] hover:text-[#C9A86A]'
    }`

  return (
    <nav className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto">

      {/* Navbar */}
      <div className="h-[80px] md:h-[90px] lg:h-[100px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.Logo}
            alt="Logo"
            className="w-[120px] sm:w-[135px] md:w-[150px] h-auto object-contain"
          />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-10">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/explore" className={navLinkClass}>
            Explore
          </NavLink>

          <NavLink to="/destination" className={navLinkClass}>
            Destination
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </div>


        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">

          {/* Search */}
          <button
            className="cursor-pointer hover:opacity-60 transition"
            aria-label="Search"
          >
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
          </button>


          {/* User */}
          <button
            onClick={() => setshowLogin(true)}
            className="cursor-pointer hover:opacity-60 transition"
            aria-label="User"
          >
            <img
              src={assets.user_icon}
              alt="User"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
          </button>


          {/* Sign In */}
          <button
            onClick={() => setshowLogin(true)}
            className="hidden sm:block border border-[#C9A86A] text-[#142B32] px-5 md:px-7 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-[#142B32] hover:text-white transition-all duration-300"
          >
            Sign in
          </button>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden cursor-pointer ml-1"
            aria-label="Toggle menu"
          >
            <div className="w-6 space-y-1.5">
              <span
                className={`block h-0.5 bg-[#142B32] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>

              <span
                className={`block h-0.5 bg-[#142B32] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>

              <span
                className={`block h-0.5 bg-[#142B32] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? 'max-h-[400px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="border-t border-gray-200 py-4">

          <NavLink
            to="/"
            className={mobileNavLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            className={mobileNavLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Explore
          </NavLink>

          <NavLink
            to="/destination"
            className={mobileNavLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Destination
          </NavLink>

          <NavLink
            to="/contact"
            className={mobileNavLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>


          {/* Mobile Sign In */}
          <button
            onClick={() => {
              setshowLogin(true)
              setIsMenuOpen(false)
            }}
            className="w-full mt-3 border border-[#C9A86A] text-[#142B32] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#142B32] hover:text-white transition-all duration-300"
          >
            Sign in
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar