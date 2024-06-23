import React, { useState } from 'react';

// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div>
        <nav>
     
    <div className="flex flex-none fixed justify-between flex-row bg-indigo-300 h-16 w-full items-center text-center  opacity-100 z-10 ">

      <div className="w-1/4  font-bold text-xl max-[420px]:text-sm max-[420px]:w-1/2 max-[420px]:-ml-5 ">
          Jhon Doe
      </div>

      <div className="sm:hidden">
                    <button 
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none focus:bg-gray-700 px-3 py-2 rounded">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>

      <div className=" hidden  sm:flex h-full  items-center justify-around w-2/3 flex-row ">
          <div className="flex items-center justify-center w-1/5 h-2/3 rounded-lg hover:bg-indigo-400 hover:bg-opacity-50 hover:text-xl transition ease-in-out duration-700 font-medium text-lg hover:underline">
          <NavLink to="/" > About</NavLink> 
          </div>
          {/* <div className="flex items-center justify-center w-1/5 h-2/3 rounded-lg hover:bg-indigo-400 hover:bg-opacity-50 hover:text-xl transition ease-in-out duration-700 font-medium text-lg hover:underline">
          <NavLink to="/Skills">Skills</NavLink>  
          </div> */}
          <div className="flex items-center justify-center w-1/5 h-2/3 rounded-lg hover:bg-indigo-400 hover:bg-opacity-50 hover:text-xl transition ease-in-out duration-700 font-medium text-lg hover:underline">
          <NavLink to="/Projects"> Projects</NavLink>  
          </div>
          <div className="flex items-center justify-center w-1/5 h-2/3 rounded-lg hover:bg-indigo-400 hover:bg-opacity-50 hover:text-xl transition ease-in-out duration-700 font-medium text-lg hover:underline">
          <NavLink to="/Experience">Experience</NavLink>  
          </div>
          <div className="flex items-center justify-center w-1/5 h-2/3 rounded-lg hover:bg-indigo-400 hover:bg-opacity-50 hover:text-xl transition ease-in-out duration-700 font-medium text-lg hover:underline">
          <NavLink to="/Contact"> Contact</NavLink>
          </div>
      </div>
    </div>
    {isOpen && (
                <div className="sm:hidden ">
                    <ul className="flex flex-col items-center bg-indigo-300 absolute top-10 right-0 w-full z-10">
                  
                        <li className='mt-2 hover:underline'> <NavLink to="/" > About</NavLink> </li>
                        {/* <li className='mt-2 hover:underline'> <NavLink to="/Skills">Skills</NavLink> </li> */}
                        <li className='mt-2 hover:underline'><NavLink to="/Projects"> Projects</NavLink>  </li>
                        <li className='mt-2 hover:underline'><NavLink to="/Experience">Experience</NavLink> </li>
                        <li className='mt-2 hover:underline'><NavLink to="/Contact"> Contact</NavLink></li>
                    </ul>
                </div>
            )}
     
    </nav>
    </div>
  )
}

export default Nav
