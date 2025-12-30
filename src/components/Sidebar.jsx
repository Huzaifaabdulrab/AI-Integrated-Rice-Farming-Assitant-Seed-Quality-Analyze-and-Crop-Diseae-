import React, { useState, useEffect } from 'react';
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
  Languages 
} from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Settings State
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Dark Mode Toggle Logic
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Yeh simple logic abhi sirf body ka color change karegi testing ke liye
    if (!darkMode) {
      document.body.style.backgroundColor = '#1e293b'; // Dark color
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#f8fafc'; // Light color
      document.body.style.color = 'black';
    }
  };

  // Menu List (Ab ismein Seed Quality bhi hai)
  const menuItems = [
    { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/seed-analyzer', name: 'Seed Quality', icon: <Microscope size={20} /> }, // Added
    { path: '/yield-prediction', name: 'Yield Predictor', icon: <Sprout size={20} /> },
    { path: '/disease-scanner', name: 'Disease Scanner', icon: <ScanLine size={20} /> },
  ];

  return (
    <div className={`w-64 border-r flex flex-col h-screen transition-all shadow-lg flex-shrink-0 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      
      {/* 1. Logo Section */}
      <div className={`p-6 flex items-center gap-3 border-b ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
        <div className="bg-green-600 p-2 rounded-xl">
          <Leaf className="text-white" size={24} />
        </div>
        <h1 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-800'}`}>RiceAI</h1>
      </div>

      {/* 2. Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                isActive 
                  ? 'bg-green-600 text-white shadow-md' 
                  : (darkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900')
              }`}
            >
              <div>{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* 3. Settings & Logout Area */}
      <div className={`p-4 border-t ${darkMode ? 'border-slate-700' : 'border-slate-100'} space-y-3`}>
        
        {/* Dark Mode & Language Toggles */}
        <div className={`flex items-center justify-between p-2 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
            
            {/* Dark Mode Button */}
            <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-600 text-yellow-400' : 'text-slate-400 hover:bg-white hover:shadow-sm'}`}
                title="Toggle Dark Mode"
            >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Button */}
            <button 
                onClick={() => setLanguage(language === 'English' ? 'Urdu' : 'English')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${darkMode ? 'text-white' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
            >
                <Languages size={16} />
                {language === 'English' ? 'ENG' : 'اردو'}
            </button>
        </div>

        {/* Sign Out Button */}
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors font-medium"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;