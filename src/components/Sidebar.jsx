import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Sprout,
  ScanLine,
  LogOut,
  Leaf,
  Microscope,
  Moon,
  Sun,
  Languages,
  Bug,
  History
} from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useTheme } from '../Context/ThemeContext';
import { useAuth } from '../Context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();

  const [language, setLanguage] = useState('English');

  const darkMode = theme === 'dark';

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const toggleTheme = () => {
    setTheme(darkMode ? 'light' : 'dark');
  };

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/seed-analysis', name: 'Seed Quality', icon: <Microscope size={20} /> },
    { path: '/yield-prediction', name: 'Yield Predictor', icon: <Sprout size={20} /> },
    { path: '/disease-scanner', name: 'Disease Scanner', icon: <ScanLine size={20} /> },
    { path: '/disease-detection', name: 'Disease Detection', icon: <Bug size={20} /> },
    { path: '/history', name: 'History', icon: <History size={20} /> },
  ];

  return (
    <div className={`w-64 h-screen flex flex-col border-r ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>

      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b">
        <div className="bg-green-600 p-2 rounded-xl">
          <Leaf className="text-white" size={24} />
        </div>
        <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          RiceAI
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                active
                  ? 'bg-green-600 text-white'
                  : darkMode
                  ? 'text-slate-400 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

    {/* Bottom */}
<div
  className={`p-4 border-t space-y-3 transition-colors ${
    darkMode
      ? 'border-slate-700 bg-slate-900'
      : 'border-slate-200 bg-white'
  }`}
>
  {/* Theme + Language */}
  <div
    className={`flex justify-between items-center p-2 rounded-xl ${
      darkMode ? 'bg-slate-800' : 'bg-slate-100'
    }`}
  >
    {/* Theme Toggle */}
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition ${
        darkMode
          ? 'text-yellow-400 hover:bg-slate-700'
          : 'text-slate-600 hover:bg-white hover:shadow'
      }`}
      title="Toggle Theme"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>

    {/* Language Toggle */}
    <button
      onClick={() =>
        setLanguage(language === 'English' ? 'Urdu' : 'English')
      }
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
        darkMode
          ? 'text-white hover:bg-slate-700'
          : 'text-slate-700 hover:bg-white hover:shadow'
      }`}
    >
      <Languages size={16} />
      {language === 'English' ? 'ENG' : 'اردو'}
    </button>
  </div>

  {/* Logout */}
  {user && (
    <button
      onClick={handleLogout}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition font-medium ${
        darkMode
          ? 'text-red-400 hover:bg-red-900/20'
          : 'text-red-500 hover:bg-red-50'
      }`}
    >
      <LogOut size={18} />
      Sign Out
    </button>
  )}
</div>

    </div>
  );
};

export default Sidebar;
