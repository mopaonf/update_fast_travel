import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FaBusAlt, FaCogs } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import Logo from '../../assets/logo.jpg';

const Sidebar = () => {
   const [activeMenu, setActiveMenu] = useState(null);

   const toggleMenu = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
   };

   return (
      <div className="min-h-screen w-80 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 shadow-lg">
         <div className="py-6 flex justify-center">
            <img src={Logo} alt="Logo" className="w-28 h-auto object-contain" />
         </div>

         <div className="py-6 text-2xl font-bold text-violet-600 dark:text-violet-400 text-center">
            Admin Panel
         </div>

         <nav className="space-y-4">
            <Link
               to="/dashboard"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               <BsFillGridFill className="mr-2" />
               Dashboard
            </Link>

            <Link
               to="/payment-history"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               Payment History
            </Link>

            <Link
               to="/booking-history"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               Booking History
            </Link>
            <Link
               to="/payment-gateway"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               Payment Gateway
            </Link>

            <div className="py-6 text-gray-500 dark:text-gray-400 px-6 text-lg flex items-center gap-2">
               <FaBusAlt />
               Transport Manager
            </div>

            <button
               onClick={() => toggleMenu('manageFleets')}
               className="w-full px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center justify-between"
            >
               Manage Fleets
               {activeMenu === 'manageFleets' ? (
                  <FaChevronDown />
               ) : (
                  <FaChevronRight />
               )}
            </button>
            {activeMenu === 'manageFleets' && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="ml-8 space-y-2"
               >
                  <Link
                     to="/seat-layout"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Seat Layout
                  </Link>
                  <Link
                     to="/fleet-type"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Fleet Type
                  </Link>
                  <Link
                     to="/buses"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Buses
                  </Link>
               </motion.div>
            )}

            <button
               onClick={() => toggleMenu('manageTrips')}
               className="w-full px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center justify-between"
            >
               Manage Trips
               {activeMenu === 'manageTrips' ? (
                  <FaChevronDown />
               ) : (
                  <FaChevronRight />
               )}
            </button>
            {activeMenu === 'manageTrips' && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="ml-8 space-y-2"
               >
                  <Link
                     to="/route"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Route
                  </Link>
                  <Link
                     to="/schedule"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Schedule
                  </Link>
                  <Link
                     to="/ticket-price"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Ticket Price
                  </Link>
                  <Link
                     to="/trips"
                     className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                     Trips
                  </Link>
               </motion.div>
            )}

            <Link
               to="/assign-buses"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               Assign Buses
            </Link>

            <div className="py-6 text-gray-500 dark:text-gray-400 px-6 text-lg flex items-center gap-2">
               <FaCogs />
               Settings
            </div>

            <Link
               to="/general-settings"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               General Settings
            </Link>

            <Link
               to="/extensions"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               Extensions
            </Link>

            <Link
               to="/language"
               className="block px-6 py-4 hover:bg-violet-200 dark:hover:bg-violet-700 transition ease-in-out duration-300 flex items-center"
            >
               Language
            </Link>
         </nav>
      </div>
   );
};

export default Sidebar;
