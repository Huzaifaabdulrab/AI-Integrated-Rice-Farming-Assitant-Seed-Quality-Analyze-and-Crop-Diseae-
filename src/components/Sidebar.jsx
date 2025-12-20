import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "../Context/ThemeContext";// ✅ Context Import
import { 
  LayoutDashboard, Sprout, Bug, TrendingUp, History, Leaf, LogOut, Globe, ChevronDown, Palette 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  // ✅ Context se Theme le rahe hain
  const { theme, setTheme } = useTheme(); 
  const [language, setLanguage] = useState('en');

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { path: '/seed', name: 'Seed Analysis', icon: <Sprout size={18} /> },
    { path: '/disease', name: 'Disease Detection', icon: <Bug size={18} /> },
    { path: '/yield', name: 'Yield Prediction', icon: <TrendingUp size={18} /> },
    { path: '/history', name: 'History', icon: <History size={18} /> },
  ];

  return (
    // ✅ Dark Mode Classes Added (dark:bg-slate-900, dark:border-slate-800)
    <div className="w-64 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed left-0 top-0 shadow-sm z-50 hidden md:flex transition-colors duration-300">
      
      {/* Logo */}
      <div className="p-5 flex items-center gap-3 border-b border-slate-50 dark:border-slate-800">
        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 shrink-0">
            <Leaf size={20} />
        </div>
        <h1 className="text-lg font-extrabold text-slate-800 dark:text-white leading-tight">
            Kisan Pakistan <br/> <span className="text-green-600">Agri AI</span>
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">

        {/* Navigation */}
        <div>
            <h3 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3 px-2">Navigation</h3>
            <nav className="space-y-1">
                {menuItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                    isActive(item.path)
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800'
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                >
                    <span className={isActive(item.path) ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'}>
                        {item.icon}
                    </span>
                    {item.name}
                </Link>
                ))}
            </nav>
        </div>

        {/* Language */}
        <div>
            <h3 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3 px-2">Language</h3>
            <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 appearance-none cursor-pointer outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                    <option value="en">English</option>
                    <option value="ur">اردو (Urdu)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
            </div>
        </div>

        {/* Theme ✅ (Logic Added) */}
        <div>
            <h3 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3 px-2">Theme</h3>
            <div className="relative">
                <Palette className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)} // Theme change logic
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 appearance-none cursor-pointer outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                    <option value="system">System Default</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
            </div>
        </div>

      </div>

      <div className="p-3 border-t border-slate-100 dark:border-slate-800">
        <button className="flex items-center gap-3 w-full px-3 py-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-sm font-medium">
            <LogOut size={18} />
            <span>Sign Out</span>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;