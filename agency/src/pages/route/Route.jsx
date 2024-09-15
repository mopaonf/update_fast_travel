import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const RouteComponent = () => {
  const [routes, setRoutes] = useState([
    { id: 1, origin: 'City A', destination: 'City B', distance: '200 km', travelTime: '3 hrs' },
    { id: 2, origin: 'City C', destination: 'City D', distance: '350 km', travelTime: '5 hrs' },
  ]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);

  const handleAddEditRoute = (route) => {
    if (route.id) {
      setRoutes(routes.map((r) => (r.id === route.id ? route : r)));
    } else {
      setRoutes([...routes, { ...route, id: Date.now() }]);
    }
    setIsAddEditModalOpen(false);
  };

  const handleDeleteRoute = (id) => {
    setRoutes(routes.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-2xl font-bold mb-4">Manage Routes</h1>
      <button
        className="bg-violet-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-violet-700"
        onClick={() => { setCurrentRoute(null); setIsAddEditModalOpen(true); }}
      >
        Add New Route
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <thead className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
            <tr>
              <th className="py-3 px-4 text-left">Route ID</th>
              <th className="py-3 px-4 text-left">Origin</th>
              <th className="py-3 px-4 text-left">Destination</th>
              <th className="py-3 px-4 text-left">Distance</th>
              <th className="py-3 px-4 text-left">Travel Time</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id} className="border-b border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700">
                <td className="py-3 px-4">{route.id}</td>
                <td className="py-3 px-4">{route.origin}</td>
                <td className="py-3 px-4">{route.destination}</td>
                <td className="py-3 px-4">{route.distance}</td>
                <td className="py-3 px-4">{route.travelTime}</td>
                <td className="py-3 px-4 flex space-x-3">
                  <button
                    className="text-violet-600 dark:text-violet-500 hover:text-violet-800 dark:hover:text-violet-400"
                    onClick={() => { setCurrentRoute(route); setIsAddEditModalOpen(true); }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400"
                    onClick={() => handleDeleteRoute(route.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddEditModalOpen && (
        <RouteForm
          route={currentRoute}
          onSave={handleAddEditRoute}
          onClose={() => setIsAddEditModalOpen(false)}
        />
      )}
    </div>
  );
};

const RouteForm = ({ route, onSave, onClose }) => {
  const [formData, setFormData] = useState(route || { origin: '', destination: '', distance: '', travelTime: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {route ? 'Edit Route' : 'Add New Route'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Origin</label>
            <input
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Origin"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Destination</label>
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Destination"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Distance</label>
            <input
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Distance"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Travel Time</label>
            <input
              name="travelTime"
              value={formData.travelTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Travel Time"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-neutral-200 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-300 py-2 px-4 rounded-md mr-2 hover:bg-neutral-300 dark:hover:bg-neutral-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RouteComponent;