import React from 'react';
import { ArrowLeft, ChevronRight, Sprout, Layers, Sun, Focus } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeedAnalysis = () => {
  return (
    // Main Container: Added dark gradients and text colors
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 font-sans text-slate-600 dark:text-slate-300 transition-colors duration-300">
      
      {/* Header */}
      <div className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-medium mb-4 bg-white dark:bg-black border border-white px-4 py-2 rounded-full text-sm shadow-sm border border-emerald-100 dark:border-slate-700">
                <ArrowLeft size={18} /> Back to Dashboard
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Seed Analysis</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-lg">
                        Check seed purity and count using AI.
                    </p>
                </div>
                {/* Badge */}
                <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
                    <Sprout size={16} /> Lab AI Active
                </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        {/* Main Card */}
        <div className="bg-white dark:bg-black border border-white rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-700 p-8 md:p-12 transition-colors duration-300">
            
            {/* Cards with REAL SYMBOLS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-3xl mx-auto">
                
                {/* 1. Upload Symbol (Picture Frame 🖼️) */}
                <div className="group relative aspect-square bg-slate-50 dark:bg-black border-2 border-slate-100 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/20 transition-all duration-300 rounded-3xl cursor-pointer flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1">
                    
                    {/* The Picture Symbol */}
                    <div className="text-6xl mb-6 drop-shadow-sm filter group-hover:scale-110 transition-transform duration-300">
                        🖼️
                    </div>
                    
                    <h3 className="font-bold text-slate-800 dark:text-white text-xl group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">Upload Sample</h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">From Gallery</p>
                    
                    <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center gap-1">
                        Select File <ChevronRight size={16} />
                    </div>
                </div>

                {/* 2. Camera Symbol (Camera 📸) */}
                <div className="group relative aspect-square bg-slate-50 dark:bg-black border-2 border-slate-100 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-500 hover:bg-green-50/30 dark:hover:bg-green-900/20 transition-all duration-300 rounded-3xl cursor-pointer flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1">
                    
                    {/* The Camera Symbol */}
                    <div className="text-6xl mb-6 drop-shadow-sm filter group-hover:scale-110 transition-transform duration-300">
                        📸
                    </div>
                    
                    <h3 className="font-bold text-slate-800 dark:text-white text-xl group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">Start Scan</h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">Live Camera</p>

                    <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-green-600 dark:text-green-400 font-bold text-sm flex items-center gap-1">
                        Open Camera <ChevronRight size={16} />
                    </div>
                </div>

            </div>

            {/* Footer Tips */}
            <div className="bg-emerald-50 dark:bg-black/50 rounded-2xl p-6 border border-emerald-100 dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-black border border-white p-2 rounded-full text-emerald-500 shadow-sm"><Layers size={18}/></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Spread evenly</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-black border border-white p-2 rounded-full text-emerald-500 shadow-sm"><Sun size={18}/></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Bright lighting</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-black border border-white p-2 rounded-full text-emerald-500 shadow-sm"><Focus size={18}/></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Steady focus</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default SeedAnalysis;