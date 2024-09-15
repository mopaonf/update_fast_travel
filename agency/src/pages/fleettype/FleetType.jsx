import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const FleetType = () => {
  const [fleetTypes, setFleetTypes] = useState([
    { id: 1, name: 'common bus', description: '20 seats, compact for short trips' },
    { id: 2, name: 'vip bus', description: '50 seats, comfortable for long distances' },
  ]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [currentFleetType, setCurrentFleetType] = useState(null);

  const handleAddEditFleetType = (fleetType) => {
    if (fleetType.id) {
      setFleetTypes(fleetTypes.map((ft) => (ft.id === fleetType.id ? fleetType : ft)));
    } else {
      setFleetTypes([...fleetTypes, { ...fleetType, id: Date.now() }]);
    }
    setIsAddEditModalOpen(false);
  };

  const handleDeleteFleetType = (id) => {
    setFleetTypes(fleetTypes.filter((ft) => ft.id !== id));
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      <h1 className="text-2xl font-bold mb-4">Manage Fleet Types</h1>
      <button
        className="bg-violet-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-violet-700"
        onClick={() => { setCurrentFleetType(null); setIsAddEditModalOpen(true); }}
      >
        Add New Fleet Type
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden">
          <thead className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
            <tr>
              <th className="py-3 px-4 text-left">Fleet Type</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fleetTypes.map((fleetType) => (
              <tr key={fleetType.id} className="border-b border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700">
                <td className="py-3 px-4">{fleetType.name}</td>
                <td className="py-3 px-4">{fleetType.description}</td>
                <td className="py-3 px-4 flex space-x-3">
                  <button
                    className="text-violet-500 hover:text-violet-400"
                    onClick={() => { setCurrentFleetType(fleetType); setIsAddEditModalOpen(true); }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-400"
                    onClick={() => handleDeleteFleetType(fleetType.id)}
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
        <FleetTypeForm
          fleetType={currentFleetType}
          onSave={handleAddEditFleetType}
          onClose={() => setIsAddEditModalOpen(false)}
        />
      )}
    </div>
  );
};

const FleetTypeForm = ({ fleetType, onSave, onClose }) => {
  const [formData, setFormData] = useState(fleetType || {
    name: '', description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {fleetType ? 'Edit Fleet Type' : 'Add New Fleet Type'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-600 dark:text-neutral-400 mb-1">Fleet Type Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md"
              placeholder="Fleet Type Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-600 dark:text-neutral-400 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md"
              placeholder="Description"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-neutral-200 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FleetType;