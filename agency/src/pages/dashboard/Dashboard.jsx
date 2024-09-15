import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Dashboard = () => {
   return (
      <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
         {/* Main Content */}
         <div className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Example cards */}
               <div className="p-6 bg-white dark:bg-neutral-800 shadow-md rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Total Bookings</h2>
                  <p className="text-xl font-bold">120</p>
               </div>
               <div className="p-6 bg-white dark:bg-neutral-800 shadow-md rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Buses</h2>
                  <p className="text-xl font-bold">15</p>
               </div>
               <div className="p-6 bg-white dark:bg-neutral-800 shadow-md rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Revenue</h2>
                  <p className="text-xl font-bold">8,500,000 FCFA</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
