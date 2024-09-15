import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const TicketPriceComponent = () => {
  const [prices, setPrices] = useState([
    { id: 1, route: 'City A - City B', busType: 'Standard', price: 5000 },
    { id: 2, route: 'City C - City D', busType: 'VIP', price: 10000 },
  ]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(null);

  const handleAddEditPrice = (price) => {
    if (price.id) {
      setPrices(prices.map((p) => (p.id === price.id ? price : p)));
    } else {
      setPrices([...prices, { ...price, id: Date.now() }]);
    }
    setIsAddEditModalOpen(false);
  };

  const handleDeletePrice = (id) => {
    setPrices(prices.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 bg-neutral-900 text-neutral-100">
      <h1 className="text-2xl font-bold mb-4">Manage Ticket Prices</h1>
      <button
        className="bg-violet-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-violet-700"
        onClick={() => { setCurrentPrice(null); setIsAddEditModalOpen(true); }}
      >
        Add New Price
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden">
          <thead className="bg-neutral-700 text-neutral-300">
            <tr>
              <th className="py-3 px-4 text-left">Route</th>
              <th className="py-3 px-4 text-left">Bus Type</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price) => (
              <tr key={price.id} className="border-b border-neutral-700 hover:bg-neutral-700">
                <td className="py-3 px-4">{price.route}</td>
                <td className="py-3 px-4">{price.busType}</td>
                <td className="py-3 px-4">{price.price} FCFA</td>
                <td className="py-3 px-4 flex space-x-3">
                  <button
                    className="text-violet-500 hover:text-violet-400"
                    onClick={() => { setCurrentPrice(price); setIsAddEditModalOpen(true); }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-400"
                    onClick={() => handleDeletePrice(price.id)}
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
        <TicketPriceForm
          price={currentPrice}
          onSave={handleAddEditPrice}
          onClose={() => setIsAddEditModalOpen(false)}
        />
      )}
    </div>
  );
};

const TicketPriceForm = ({ price, onSave, onClose }) => {
  const [formData, setFormData] = useState(price || { route: '', busType: '', price: '' });

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
      <div className="bg-neutral-800 p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold text-neutral-100 mb-4">
          {price ? 'Edit Price' : 'Add New Price'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-400 mb-1">Route</label>
            <input
              name="route"
              value={formData.route}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md"
              placeholder="Route"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 mb-1">Bus Type</label>
            <input
              name="busType"
              value={formData.busType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md"
              placeholder="Bus Type"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 mb-1">Price</label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              className="w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md"
              placeholder="Price"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-neutral-600 text-neutral-300 py-2 px-4 rounded-md mr-2 hover:bg-neutral-500"
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

export default TicketPriceComponent;