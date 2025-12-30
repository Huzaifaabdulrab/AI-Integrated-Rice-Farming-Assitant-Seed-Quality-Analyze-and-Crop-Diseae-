import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloudSun, Droplets, Sprout, AlertTriangle, ArrowRight, Microscope, ScanLine } from 'lucide-react';

const Dashboard = ({ user }) => {
  const [lang, setLang] = useState('English');

  return (
    <div className="p-6 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Rice Farm Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, {user?.email}! Check your farm status.</p>
        </div>
        
        <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center shadow-sm">
                <button 
                    onClick={() => setLang('English')}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                      lang === 'English' 
                        ? 'bg-green-600 text-white shadow-md' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                >
                    English
                </button>
                <button 
                    onClick={() => setLang('Urdu')}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                      lang === 'Urdu' 
                        ? 'bg-green-600 text-white shadow-md' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                >
                    اردو
                </button>
            </div>

            {/* Weather Widget */}
            <div className="bg-white dark:bg-slate-800 px-5 py-3 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <CloudSun className="text-yellow-500 dark:text-yellow-400" size={28} />
                <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Weather</p>
                    <p className="font-bold text-slate-800 dark:text-white text-lg">32°C, Sunny</p>
                </div>
            </div>
        </div>
      </div>

      {/* 2. Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-5">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Droplets className="text-blue-600 dark:text-blue-400" size={28} />
            </div>
            <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Soil Moisture</p>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">High (65%)</h3>
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-5">
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Sprout className="text-green-600 dark:text-green-400" size={28} />
            </div>
            <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Crop Health</p>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">Good</h3>
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-5">
            <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-xl">
                <AlertTriangle className="text-red-600 dark:text-red-400" size={28} />
            </div>
            <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Alerts</p>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">2 Pending</h3>
            </div>
        </div>
      </div>

      {/* 3. Quick Actions */}
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Tools & Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Seed Quality Analyzer */}
        <Link 
          to="/seed-analyzer" 
          className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-500 dark:hover:border-green-500 transition-all duration-300"
        >
             <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Microscope size={30} />
             </div>
             <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Seed Quality Analyzer</h3>
             <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Check the quality of your rice seeds before planting using AI.
             </p>
             <span className="text-green-600 dark:text-green-400 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Analyze Seeds <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </span>
        </Link>

        {/* Disease Scanner */}
        <Link 
          to="/disease-scanner" 
          className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-500 dark:hover:border-green-500 transition-all duration-300"
        >
             <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                <ScanLine size={30} />
             </div>
             <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Disease Scanner</h3>
             <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Detect diseases in your crops by uploading leaf images.
             </p>
             <span className="text-green-600 dark:text-green-400 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Scan Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </span>
        </Link>

        {/* Yield Predictor */}
        <Link 
          to="/yield-prediction" 
          className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-500 dark:hover:border-green-500 transition-all duration-300"
        >
             <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center mb-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Sprout size={30} />
             </div>
             <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Yield Prediction</h3>
             <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Estimate your total production and potential profit.
             </p>
             <span className="text-green-600 dark:text-green-400 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Calculate <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </span>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;