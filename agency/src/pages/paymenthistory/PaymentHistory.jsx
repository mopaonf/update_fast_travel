import React, { useState } from 'react';

const PaymentHistory = () => {
  const [payments] = useState([
    { id: '1', status: 'Success', amount: '10000 FCFA', date: '2024-09-10' },
    { id: '2', status: 'Pending', amount: '5000 FCFA', date: '2024-09-11' },
    { id: '3', status: 'Rejected', amount: '10000 FCFA', date: '2024-09-12' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 dark:bg-neutral-900 dark:border-neutral-600">
          <thead className="bg-gray-100 dark:bg-neutral-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Payment ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap border-b">{payment.id}</td>
                <td className={`px-6 py-4 whitespace-nowrap border-b text-sm ${payment.status === 'Success' ? 'text-violet-700' : payment.status === 'Pending' ? 'text-neutral-400' : 'text-red-500'}`}>
                  {payment.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b">{new Date(payment.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  <button className="text-violet-600 hover:text-violet-700 mr-2">View</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;