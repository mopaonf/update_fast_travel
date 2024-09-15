import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.jpg";
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import Theme from '../theme/Theme';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [profileOpen, setProfileOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleProfileClick = () => {
        setProfileOpen(!profileOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='w-10/12 h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center px-4 fixed top-0 z-50'>
            <button
                onClick={handleClick}
                className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 ease-in-out duration-300 flex items-center justify-end"
            >
                {open ? <LiaTimesSolid className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>

            <div className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'} flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-end md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md`}>
                <div className="flex items-center gap-x-6">
                    <div className="relative flex items-center">
                        <FaSearch className="text-neutral-600 dark:text-neutral-300 text-xl absolute left-2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 py-2 w-full max-w-xs rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-none text-lg"
                        />
                    </div>

                    <FaBell className="text-neutral-600 dark:text-neutral-300 text-2xl cursor-pointer" />

                    <div className="relative">
                        <FaUserCircle
                            className="text-neutral-600 dark:text-neutral-300 text-2xl cursor-pointer"
                            onClick={handleProfileClick}
                        />
                        {profileOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-md shadow-lg">
                                <ul className="list-none p-2">
                                    <li>
                                        <Link to="/profile" className="block px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/settings" className="block px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700">Settings</Link>
                                    </li>
                                    <li>
                                        <Link to="/logout" className="block px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden md:flex md:items-center md:gap-x-5">
                    <Theme />
                </div>
            </div>
        </div>
    );
};

export default Navbar;