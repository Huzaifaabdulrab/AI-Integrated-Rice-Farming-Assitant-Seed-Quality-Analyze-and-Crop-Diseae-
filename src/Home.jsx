import React from 'react';
import { Sprout, Bug, TrendingUp, ArrowRight, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 md:p-10 w-full min-h-screen bg-[#f8fafc] dark:bg-slate-900 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto">
      
        {/* 2. Quick Actions */}
        <div className="flex justify-between items-end mb-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Quick Tools</h2>
                <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Select a tool to start</p>
            </div>
        </div>

        {/* 3. The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Card 1: Seed Analysis */}
            <Link to="/seed-analysis" className="group bg-white dark:bg-slate-800 border border-white p-8 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 transition-colors duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 dark:bg-green-900/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <Sprout size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Seed Analysis</h3>
                
                {/* 👇 Maine yahan <br /> lagaya hai. Ab ye 100% 2 lines banega */}
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    Check seed quality and germination <br /> probability instantly with AI tools.
                </p>
                
                {/* 'mt-auto' button ko hamesha bottom pe rakhega */}
                <span className="mt-auto flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-sm">
                    Analyze Now <ArrowRight size={16} />
                </span>
            </Link>

            {/* Card 2: Disease Detection */}
            <Link to="/disease-detection" className="group bg-white dark:bg-slate-800 border border-white p-8 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 dark:bg-red-900/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <Bug size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Disease Detection</h3>
                
                {/* 👇 Yahan bhi <br /> lagaya hai */}
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    Identify crop diseases early by <br /> uploading leaf photos instantly.
                </p>
                
                <span className="mt-auto flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                    Check Health <ArrowRight size={16} />
                </span>
            </Link>

            {/* Card 3: Yield Prediction */}
            <Link to="/yield-prediction" className="group bg-white dark:bg-slate-800 border border-white p-8 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-slate-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 dark:bg-yellow-900/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Yield Prediction</h3>
                
                {/* 👇 Yahan bhi <br /> lagaya hai */}
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    Estimate harvest quantity based on <br /> soil quality and weather data.
                </p>
                
                <span className="mt-auto flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-bold text-sm">
                    Predict Now <ArrowRight size={16} />
                </span>
            </Link>

            {/* Card 4: History */}
            <Link to="/history" className="group bg-white dark:bg-slate-800 border border-white p-8 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <History size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Activity History</h3>
                
                {/* 👇 Yahan bhi <br /> lagaya hai */}
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    View all your past scans, analysis <br /> reports, and yield data records.
                </p>
                
                <span className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    View Records <ArrowRight size={16} />
                </span>
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;