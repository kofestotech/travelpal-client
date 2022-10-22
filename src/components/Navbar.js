import {NavLink} from 'react-router-dom';
//import {useState, useEffect} from 'react';
import travelpa from '../images/travelpal-logo.png';

const Navbar = () => {

    // useEffect(() => {
    //     document.querySelector('.navbar-toggler-icon').addEventListener('click',
    //     ()=>document.querySelector('.navbar-nav').classList.toggle('show'));
    // }, [])

  return (
    <>
    <nav className="bg-teal-500 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/**website logo */}
            <div>
              <NavLink to='/'>
                <img alt="logo" src={travelpa} className="h-12 w-24 mr-2" />
              </NavLink>
            </div>
            {/**primary navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to='/' className="py-4 px-2 text-gray-500 border-b-4 hover:text-white border-yellow-500 font-semibold">
                Home
              </NavLink>
              <NavLink to='/' className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300">
                Services
              </NavLink>
              <NavLink to='/' className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300">
                About
              </NavLink>
              <NavLink to='/' className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300">
                Contact Us
              </NavLink>
            </div>
          </div>
          {/**Secondary navbar items */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to='/' className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
              Login
            </NavLink>
            <NavLink to='/' className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
              Sign Up
            </NavLink>
           </div>
        </div>
        {/**Mobile menu button */}
        <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>				
        </div>
      </div>
    </nav>     
    </>
  )
}

export default Navbar;

/**

    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">Travelpal</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </NavLink>
          <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </NavLink>
          <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Blog
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Download
          </NavLink>
        </div>
      </div>
    </nav>
 */