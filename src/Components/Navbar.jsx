import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({setshowLogin}) => {
  return (
    <nav className="w-[80%] max-w-[1320px] mx-auto">

      <div className="h-[100px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={assets.Logo}
            alt="Logo"
            className="w-[150px] h-auto object-contain"
          />
        </Link>


        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-all duration-300 ${
                isActive
                  ? 'text-[#142B32] border-b-2 border-[#C9A86A] pb-1'
                  : 'text-[#142B32] hover:text-[#C9A86A]'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `text-lg font-medium transition-all duration-300 ${
                isActive
                  ? 'text-[#142B32] border-b-2 border-[#C9A86A] pb-1'
                  : 'text-[#142B32] hover:text-[#C9A86A]'
              }`
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `text-lg font-medium transition-all duration-300 ${
                isActive
                  ? 'text-[#142B32] border-b-2 border-[#C9A86A] pb-1'
                  : 'text-[#142B32] hover:text-[#C9A86A]'
              }`
            }
          >
            Destination
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium transition-all duration-300 ${
                isActive
                  ? 'text-[#142B32] border-b-2 border-[#C9A86A] pb-1'
                  : 'text-[#142B32] hover:text-[#C9A86A]'
              }`
            }
          >
            Contact
          </NavLink>

        </div>


        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <button className="cursor-pointer hover:opacity-60 transition">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-7 h-7"
            />
          </button>


          {/* User */}
          <button className="cursor-pointer hover:opacity-60 transition">
            <img
              src={assets.user_icon}
              alt="User"
              className="w-7 h-7"
            />
          </button>


          {/* Sign In */}
          <Link
            onClick={()=>setshowLogin(true)}
            className="hidden sm:block border border-[#C9A86A] text-[#142B32] px-7 py-2.5 rounded-full text-sm font-medium hover:bg-[#142B32] hover:text-white transition-all duration-300"
          >
            Sign in
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar