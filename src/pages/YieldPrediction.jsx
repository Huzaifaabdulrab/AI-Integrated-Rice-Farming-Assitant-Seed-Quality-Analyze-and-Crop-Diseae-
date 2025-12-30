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
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Calculator className="text-purple-600" size={32} />
          Yield Estimator
        </h1>
        <p className="text-slate-500">Predict how much rice you can grow and your estimated profit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Input Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <form onSubmit={calculateYield} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Land Area (in Acres)</label>
              <input 
                type="number" 
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="E.g., 5"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Soil Type</label>
              <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none">
                <option>Clayey Soil (Best for Rice)</option>
                <option>Loamy Soil</option>
                <option>Sandy Soil</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all">
              Calculate Prediction
            </button>
          </form>
        </div>

        {/* Result Card */}
        <div className="bg-purple-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden">
            <Sprout className="absolute -bottom-10 -right-10 text-purple-800 w-64 h-64 rotate-12" />
            
            <h2 className="text-2xl font-bold mb-6 relative z-10">Estimation Result</h2>
            
            <div className="space-y-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-1 text-purple-200">
                        <Scale size={20} />
                        <span className="text-sm font-bold uppercase">Expected Production</span>
                    </div>
                    <p className="text-4xl font-bold">{prediction ? prediction.totalYield.toLocaleString() : 0} <span className="text-lg">kg</span></p>
                </div>

                <div className="bg-green-500/20 backdrop-blur-sm p-4 rounded-xl border border-green-500/30">
                    <div className="flex items-center gap-3 mb-1 text-green-200">
                        <DollarSign size={20} />
                        <span className="text-sm font-bold uppercase">Est. Revenue (PKR)</span>
                    </div>
                    <p className="text-4xl font-bold text-green-300">Rs {prediction ? prediction.totalProfit.toLocaleString() : 0}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;