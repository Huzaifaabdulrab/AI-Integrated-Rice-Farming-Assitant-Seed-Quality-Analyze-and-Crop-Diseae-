import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Maine yahan 'ScanLine' add kar diya hai
import { CloudSun, Droplets, Sprout, AlertTriangle, ArrowRight, Microscope, ScanLine } from 'lucide-react';

const Dashboard = () => {
  const [lang, setLang] = useState('English');

  return (
    <div className="p-6 min-h-screen">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Rice Farm Dashboard</h1>
          <p className="text-slate-500">Welcome back! Check your farm status.</p>
        </div>
        
        <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="bg-white p-1 rounded-lg border border-slate-200 flex items-center shadow-sm">
                <button 
                    onClick={() => setLang('English')}
                    className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all ${lang === 'English' ? 'bg-green-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    English
                </button>
                <button 
                    onClick={() => setLang('Urdu')}
                    className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all ${lang === 'Urdu' ? 'bg-green-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    اردو
                </button>
            </div>

            {/* Weather Widget */}
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                <CloudSun className="text-yellow-500" />
                <div>
                    <p className="text-xs text-slate-400 font-bold">WEATHER</p>
                    <p className="font-bold text-slate-700">32°C, Sunny</p>
                </div>
            </div>
        </div>
      </div>

      {/* 2. Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl"><Droplets className="text-blue-500" /></div>
            <div><p className="text-slate-500 text-sm">Soil Moisture</p><h3 className="text-2xl font-bold">High (65%)</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl"><Sprout className="text-green-500" /></div>
            <div><p className="text-slate-500 text-sm">Crop Health</p><h3 className="text-2xl font-bold">Good</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-red-50 rounded-xl"><AlertTriangle className="text-red-500" /></div>
            <div><p className="text-slate-500 text-sm">Alerts</p><h3 className="text-2xl font-bold">2 Pending</h3></div>
        </div>
      </div>

      {/* 3. Quick Actions */}
      <h2 className="text-xl font-bold text-slate-800 mb-4">Tools & Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Seed Quality Analyzer */}
        <Link to="/seed-analyzer" className="group bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                <Microscope size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">Seed Quality Analyzer</h3>
             <p className="text-slate-500 text-sm mb-4">Check the quality of your rice seeds before planting using AI.</p>
             <span className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                Analyze Seeds <ArrowRight size={16}/>
             </span>
        </Link>

        {/* Disease Scanner */}
        <Link to="/disease-scanner" className="group bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-green-500 hover:shadow-md transition-all">
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform">
                <ScanLine size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">Disease Scanner</h3>
             <p className="text-slate-500 text-sm mb-4">Detect diseases in your crops by uploading leaf images.</p>
             <span className="text-green-600 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                Scan Now <ArrowRight size={16}/>
             </span>
        </Link>

        {/* Yield Predictor */}
        <Link to="/yield-prediction" className="group bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-purple-500 hover:shadow-md transition-all">
             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                <Sprout size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">Yield Prediction</h3>
             <p className="text-slate-500 text-sm mb-4">Estimate your total production and potential profit.</p>
             <span className="text-purple-600 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                Calculate <ArrowRight size={16}/>
             </span>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;