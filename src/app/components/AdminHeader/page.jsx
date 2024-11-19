import React from 'react';

const AdminHeader = () => {
  return (
    <header className="bg-blue-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        </div>
        <nav className="flex items-center">
          <ul className="list-none mb-0 flex items-center">
            <li className="mr-6">
              <a href="#" className="text-white hover:text-blue-300">Dashboard</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-blue-300">Users</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-blue-300">Settings</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;