import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ScheduleComponent = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, route: 'City A to City B', departureTime: '08:00 AM', frequency: 'Daily', busId: 101 },
    { id: 2, route: 'City C to City D', departureTime: '10:30 AM', frequency: 'Weekdays', busId: 102 },
  ]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(null);

  const handleAddEditSchedule = (schedule) => {
    if (schedule.id) {
      setSchedules(schedules.map((s) => (s.id === schedule.id ? schedule : s)));
    } else {
      setSchedules([...schedules, { ...schedule, id: Date.now() }]);
    }
    setIsAddEditModalOpen(false);
  };

  const handleDeleteSchedule = (id) => {
    setSchedules(schedules.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-2xl font-bold mb-4">Manage Schedules</h1>
      <button
        className="bg-violet-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-violet-700"
        onClick={() => { setCurrentSchedule(null); setIsAddEditModalOpen(true); }}
      >
        Add New Schedule
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <thead className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
            <tr>
              <th className="py-3 px-4 text-left">Schedule ID</th>
              <th className="py-3 px-4 text-left">Route</th>
              <th className="py-3 px-4 text-left">Departure Time</th>
              <th className="py-3 px-4 text-left">Frequency</th>
              <th className="py-3 px-4 text-left">Bus ID</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="border-b border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700">
                <td className="py-3 px-4">{schedule.id}</td>
                <td className="py-3 px-4">{schedule.route}</td>
                <td className="py-3 px-4">{schedule.departureTime}</td>
                <td className="py-3 px-4">{schedule.frequency}</td>
                <td className="py-3 px-4">{schedule.busId}</td>
                <td className="py-3 px-4 flex space-x-3">
                  <button
                    className="text-violet-600 dark:text-violet-500 hover:text-violet-800 dark:hover:text-violet-400"
                    onClick={() => { setCurrentSchedule(schedule); setIsAddEditModalOpen(true); }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400"
                    onClick={() => handleDeleteSchedule(schedule.id)}
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
        <ScheduleForm
          schedule={currentSchedule}
          onSave={handleAddEditSchedule}
          onClose={() => setIsAddEditModalOpen(false)}
        />
      )}
    </div>
  );
};

const ScheduleForm = ({ schedule, onSave, onClose }) => {
  const [formData, setFormData] = useState(schedule || { route: '', departureTime: '', frequency: '', busId: '' });

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
          {schedule ? 'Edit Schedule' : 'Add New Schedule'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Route</label>
            <input
              name="route"
              value={formData.route}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Route"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Departure Time</label>
            <input
              name="departureTime"
              value={formData.departureTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Departure Time"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Frequency</label>
            <input
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Frequency"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-400 mb-1">Bus ID</label>
            <input
              name="busId"
              value={formData.busId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-md"
              placeholder="Bus ID"
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

export default ScheduleComponent;