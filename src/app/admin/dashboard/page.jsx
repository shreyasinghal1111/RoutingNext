import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Users</h2>
          <p className="text-gray-600">1,234</p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Orders</h2>
          <p className="text-gray-600">456</p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Revenue</h2>
          <p className="text-gray-600">$12,345.67</p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Sales</h2>
          <p className="text-gray-600">789</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;