// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Link ke liye zaroori
import { LayoutDashboard, Sprout, Bug, TrendingUp, History, Globe, Moon } from 'lucide-react';

const Sidebar = () => {
  // Yeh function check karega ke link active hai ya nahi
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
      isActive ? 'bg-green-50 text-green-700 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-6 hidden md:flex h-screen sticky top-0">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-green-200">
            <Sprout size={24} />
          </div>
          <h1 className="font-bold text-gray-800 text-lg leading-tight">Rice Farming<br/>Assistant</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">Navigation</p>
          
          <NavLink to="/" className={linkClasses}>
            <LayoutDashboard size={20}/> <span>Dashboard</span>
          </NavLink>

          <NavLink to="/seed-analysis" className={linkClasses}>
            <Sprout size={20}/> <span>Seed Analysis</span>
          </NavLink>

          <NavLink to="/disease-detection" className={linkClasses}>
            <Bug size={20}/> <span>Disease Detection</span>
          </NavLink>

          <NavLink to="/yield-prediction" className={linkClasses}>
            <TrendingUp size={20}/> <span>Yield Prediction</span>
          </NavLink>

          <NavLink to="/history" className={linkClasses}>
            <History size={20}/> <span>History</span>
          </NavLink>
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="space-y-3">
        <div className="border border-gray-200 p-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
             <Globe size={18} /> English
        </div>
        <div className="border border-gray-200 p-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
             <Moon size={18} /> Dark Mode
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;