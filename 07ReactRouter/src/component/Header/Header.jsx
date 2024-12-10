import React from 'react'
import { Link ,NavLink} from 'react-router-dom';

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            <div className="flex items-center">
                <Link to="/"  className="text-xl font-bold text-blue-600">
                  <span className=" text-blue-600 animate-blink">Krishna</span>  <span className=" text-blue-600 animate-blink">Sekhar</span>
                </Link>
                <style>
                    {`
                    @keyframes blink {
                        50% {
                        opacity: 0;
                        }
                    }

                    .animate-blink {
                        animation: blink 1s infinite;
                    }
                    `}
             </style>
                </div>

            <div className="flex items-center lg:order-2">
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                          to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive? 
                                  "text-orange-700":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/about"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive? 
                                  "text-orange-700":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive? 
                                  "text-orange-700":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/github"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive? 
                                  "text-orange-700":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            GitHub
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                          to="/skill"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive? 
                                  "text-orange-700":"text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Skill
                        </NavLink>
                    </li>
                    
                    
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
}

export default Header