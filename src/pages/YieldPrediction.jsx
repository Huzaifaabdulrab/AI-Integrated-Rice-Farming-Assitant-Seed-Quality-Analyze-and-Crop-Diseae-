// src/pages/YieldPrediction.jsx
import React, { useState } from 'react';
import { Sprout, Calculator, DollarSign, Scale } from 'lucide-react';

const YieldPrediction = () => {
  const [area, setArea] = useState('');
  const [prediction, setPrediction] = useState(null);

  const calculateYield = (e) => {
    e.preventDefault();
    // Simple Mock Formula (1 Acre = ~1200kg Rice)
    const estYield = area * 1200; 
    const estProfit = estYield * 150; // Suppose 150 Rs per Kg

    setPrediction({
      totalYield: estYield,
      totalProfit: estProfit,
    });
  };

  return (
    <div className="p-6 md:p-10 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-2">
            <Calculator className="text-purple-600 dark:text-purple-400" size={36} />
            Yield Estimator
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Predict how much rice you can grow and your estimated profit.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Input Form Card */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
            <form onSubmit={calculateYield} className="space-y-7">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Land Area (in Acres)
                </label>
                <input 
                  type="number" 
                  required
                  className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 outline-none text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                  placeholder="E.g., 5"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Soil Type
                </label>
                <select className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-2xl outline-none text-slate-800 dark:text-white transition-all">
                  <option>Clayey Soil (Best for Rice)</option>
                  <option>Loamy Soil</option>
                  <option>Sandy Soil</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/20"
              >
                Calculate Prediction
              </button>
            </form>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 dark:from-purple-950 dark:to-purple-900 text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden">
            <Sprout className="absolute -bottom-12 -right-12 text-purple-800 dark:text-purple-900/50 w-72 h-72 rotate-12 opacity-60" />
            
            <h2 className="text-2xl font-bold mb-8 relative z-10">Estimation Result</h2>
            
            <div className="space-y-7 relative z-10">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-2 text-purple-200">
                  <Scale size={24} />
                  <span className="text-sm font-bold uppercase tracking-wider">Expected Production</span>
                </div>
                <p className="text-4xl font-bold">
                  {prediction ? prediction.totalYield.toLocaleString() : '0'} 
                  <span className="text-xl font-normal ml-2">kg</span>
                </p>
              </div>

              <div className="bg-green-500/20 dark:bg-green-600/20 backdrop-blur-md p-6 rounded-2xl border border-green-400/30 dark:border-green-500/30">
                <div className="flex items-center gap-3 mb-2 text-green-200">
                  <DollarSign size={24} />
                  <span className="text-sm font-bold uppercase tracking-wider">Est. Revenue (PKR)</span>
                </div>
                <p className="text-4xl font-bold text-green-300 dark:text-green-200">
                  Rs {prediction ? prediction.totalProfit.toLocaleString() : '0'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;