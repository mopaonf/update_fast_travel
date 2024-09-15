import React, { useState } from 'react';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([
    { id: '1', status: 'Booked', departure: 'YAOUNDE', destination: 'DOUALA', date: '2024-09-12', seatNumber: '12' },
    { id: '2', status: 'Pending', departure: 'BAFOUSSAM', destination: 'BAMENDA', date: '2024-09-13', seatNumber: '41' },
    { id: '3', status: 'Rejected', departure: 'DOAULA', destination: 'BUEA', date: '2024-09-14', seatNumber: '17' },
  ]);

 
  const handleDelete = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const handleAccept = (id) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'Booked' } : booking
    ));
  };

  const handleView = (booking) => {
    alert(`Viewing Booking: \nBooking ID: ${booking.id}\nFrom: ${booking.departure}\nTo: ${booking.destination}\nDate: ${booking.date}\nSeat: ${booking.seatNumber}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Booking History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 dark:bg-neutral-900 dark:border-neutral-600">
          <thead className="bg-gray-100 dark:bg-neutral-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Booking ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Departure
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Seat Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap border-b">{booking.id}</td>
                <td className={`px-6 py-4 whitespace-nowrap border-b text-sm ${booking.status === 'Booked' ? 'text-violet-600' : booking.status === 'Pending' ? 'text-gray-500' : 'text-red-500'}`}>
                  {booking.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">{booking.departure}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b">{booking.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b">{new Date(booking.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b">{booking.seatNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b space-x-2">
                  <button className="text-violet-600 hover:text-violet-700" onClick={() => handleView(booking)}>View</button>
                  {booking.status === 'Pending' && (
                    <button className="text-green-600 hover:text-green-900" onClick={() => handleAccept(booking.id)}>Accept</button>
                  )}
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(booking.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingHistory;