import React, { useState } from 'react';

const BusesPage = () => {
   const [buses, setBuses] = useState([
      {
         id: 1,
         type: 'Double Decker',
         registrationNumber: '20204',
         seatLayout: '2-2',
      },
      {
         id: 2,
         type: 'Single Decker',
         registrationNumber: '1213125',
         seatLayout: '2-1',
      },
   ]);
   const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
   const [currentBus, setCurrentBus] = useState(null);

   const handleAddEditBus = (bus) => {
      if (bus.id) {
         setBuses(buses.map((b) => (b.id === bus.id ? bus : b)));
      } else {
         setBuses([...buses, { ...bus, id: Date.now() }]);
      }
      setIsAddEditModalOpen(false);
   };

   const handleDeleteBus = () => {
      setBuses(buses.filter((b) => b.id !== currentBus.id));
      setIsDeleteDialogOpen(false);
   };

   return (
      <div className="container mx-auto p-6 bg-neutral-50 dark:bg-neutral-950">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
               Buses
            </h1>
            <button
               onClick={() => {
                  setCurrentBus(null);
                  setIsAddEditModalOpen(true);
               }}
               className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                     clipRule="evenodd"
                  />
               </svg>
               Add New Bus
            </button>
         </div>

         <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-600">
               <thead className="bg-neutral-100 dark:bg-neutral-700">
                  <tr>
                     <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider border-b dark:text-neutral-400">
                        Bus ID
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider border-b dark:text-neutral-400">
                        Type
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider border-b dark:text-neutral-400">
                        Registration Number
                     </th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider border-b dark:text-neutral-400">
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-neutral-200 dark:divide-neutral-600">
                  {buses.map((bus) => (
                     <tr key={bus.id}>
                        <td className="px-6 py-4 whitespace-nowrap border-b dark:border-neutral-600">
                           {bus.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b dark:border-neutral-600">
                           {bus.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b dark:border-neutral-600">
                           {bus.registrationNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-b dark:border-neutral-600">
                           <button
                              onClick={() => {
                                 setCurrentBus(bus);
                                 setIsAddEditModalOpen(true);
                              }}
                              className="text-violet-600 hover:text-violet-800 mr-2"
                           >
                              Edit
                           </button>
                           <button
                              onClick={() => {
                                 setCurrentBus(bus);
                                 setIsDeleteDialogOpen(true);
                              }}
                              className="text-red-600 hover:text-red-800"
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {isAddEditModalOpen && (
            <div
               className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full pt-44 pl-36 "
               id="my-modal"
            >
               <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-600">
                  <div className="mt-3 text-center">
                     <h3 className="text-lg leading-6 font-medium text-neutral-900 dark:text-neutral-100">
                        {currentBus ? 'Edit Bus' : 'Add New Bus'}
                     </h3>
                     <form
                        className="mt-2 text-left"
                        onSubmit={(e) => {
                           e.preventDefault();
                           const formData = new FormData(e.target);
                           const bus = {
                              id: currentBus?.id,
                              type: formData.get('type'),
                              registrationNumber:
                                 formData.get('registrationNumber'),
                              seatLayout: formData.get('seatLayout'),
                           };
                           handleAddEditBus(bus);
                        }}
                     >
                        <div className="mb-4">
                           <label
                              className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                              htmlFor="type"
                           >
                              Bus Type
                           </label>
                           <select
                              id="type"
                              name="type"
                              defaultValue={currentBus?.type}
                              className="shadow border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                           >
                              <option value="Double Decker">
                                 Double Decker
                              </option>
                              <option value="Single Decker">
                                 Single Decker
                              </option>
                           </select>
                        </div>
                        <div className="mb-4">
                           <label
                              className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                              htmlFor="registrationNumber"
                           >
                              Registration Number
                           </label>
                           <input
                              type="text"
                              id="registrationNumber"
                              name="registrationNumber"
                              defaultValue={currentBus?.registrationNumber}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                           />
                        </div>
                        <div className="mb-6">
                           <label
                              className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                              htmlFor="seatLayout"
                           >
                              Seat Layout
                           </label>
                           <input
                              type="text"
                              id="seatLayout"
                              name="seatLayout"
                              defaultValue={currentBus?.seatLayout}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                           />
                        </div>
                        <div className="flex items-center justify-between">
                           <button
                              type="button"
                              onClick={() => setIsAddEditModalOpen(false)}
                              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                           >
                              Cancel
                           </button>
                           <button
                              type="submit"
                              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                           >
                              Save
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}

         {isDeleteDialogOpen && (
            <div
               className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
               id="my-modal"
            >
               <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-600">
                  <div className="mt-3 text-center">
                     <h3 className="text-lg leading-6 font-medium text-neutral-900 dark:text-neutral-100">
                        Delete Bus
                     </h3>
                     <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                           Are you sure you want to delete this bus? This action
                           cannot be undone.
                        </p>
                     </div>
                     <div className="items-center px-4 py-3">
                        <button
                           onClick={() => setIsDeleteDialogOpen(false)}
                           className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                           Cancel
                        </button>
                        <button
                           onClick={handleDeleteBus}
                           className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-24 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                           Delete
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default BusesPage;
