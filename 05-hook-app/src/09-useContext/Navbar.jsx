import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
    <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-5 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
           
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <NavLink to="/" className={ ({ isActive }) => `block py-2 px-3 rounded  ${ isActive ? 'text-blue-500' : 'text-white' }`}>Home</NavLink>

                </li>
                <li>
                <NavLink to="/about" className={ ({ isActive }) => `block py-2 px-3 rounded  ${ isActive ? 'text-blue-500' : 'text-white' }`}>About</NavLink>
                </li>
                <li>
                <NavLink to="/login" className={ ({ isActive }) => `block py-2 px-3 rounded  ${ isActive ? 'text-blue-500' : 'text-white' }`}>Login</NavLink>

                </li>
            </ul>
            </div>
        </div>
        </nav>

    </>
    )
}