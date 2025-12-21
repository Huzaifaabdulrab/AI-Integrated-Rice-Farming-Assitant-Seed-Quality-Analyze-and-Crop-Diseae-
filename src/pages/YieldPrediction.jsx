import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Sprout, Calculator, DollarSign, CloudRain, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const YieldPrediction = () => {
  const [formData, setFormData] = useState({
    crop: 'Wheat',
    area: '',
    soil: 'Loamy',
    season: 'Kharif'
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  // 1. Input Handle karna
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Calculation Simulation (Fake AI)
  const handleCalculate = (e) => {
    e.preventDefault();
    if (!formData.area) {
        alert("Please enter field area size");
        return;
    }

    setIsCalculating(true);

    // 2.5 Sec Fake Delay
    setTimeout(() => {
      // Logic: Area * Base Yield (Just for demo)
      const areaVal = parseFloat(formData.area);
      const estimatedYield = (areaVal * 1.2 * 1000).toFixed(0); // Example calculation
      const estimatedRevenue = (estimatedYield * 45).toLocaleString(); // Example price

      setResult({
        totalYield: `${estimatedYield} kg`,
        revenue: `Rs. ${estimatedRevenue}`,
        efficiency: "92%",
        weatherImpact: "Low Risk (Favorable)"
      });

      setIsCalculating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium mb-8">
            <ArrowLeft size={20} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 flex items-center justify-center gap-3">
               <TrendingUp className="text-yellow-500" /> AI Yield Prediction
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Enter your farm details to estimate production and potential revenue.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* LEFT: Input Form */}
            <div className="bg-white dark:bg-black border border-white rounded-3xl shadow-sm border-2 border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-6 flex items-center gap-2">
                    <Calculator size={20} className="text-blue-500"/> Farm Details
                </h3>

                <form onSubmit={handleCalculate} className="space-y-5">
                    
                    {/* Crop Selection */}
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Select Crop</label>
                        <select 
                            name="crop" 
                            value={formData.crop} 
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:border-yellow-500 transition-colors dark:text-white"
                        >
                            <option value="Wheat">Wheat (Gandum)</option>
                            <option value="Rice">Rice (Chawal)</option>
                            <option value="Corn">Corn (Makai)</option>
                            <option value="Cotton">Cotton (Kapaas)</option>
                        </select>
                    </div>

                    {/* Area Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Field Area (in Acres)</label>
                        <input 
                            type="number" 
                            name="area" 
                            value={formData.area}
                            onChange={handleInputChange}
                            placeholder="e.g. 5" 
                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:border-yellow-500 transition-colors dark:text-white"
                        />
                    </div>

                    {/* Soil Type */}
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Soil Type</label>
                        <select 
                            name="soil"
                            value={formData.soil}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-3 outline-none focus:border-yellow-500 transition-colors dark:text-white"
                        >
                            <option value="Loamy">Loamy (Zarkhez)</option>
                            <option value="Clay">Clay (Chikni Mitti)</option>
                            <option value="Sandy">Sandy (Retli)</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        disabled={isCalculating}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-yellow-500/30 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
                    >
                        {isCalculating ? "Calculating..." : "Predict Yield"}
                    </button>
                </form>
            </div>

            {/* RIGHT: Results Section */}
            <div className="bg-white dark:bg-black border border-white rounded-3xl shadow-sm border-2 border-slate-100 dark:border-slate-700 p-6 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 dark:bg-yellow-900/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>

                {!result && !isCalculating && (
                    <div className="text-center text-slate-400 relative z-10">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp size={32} />
                        </div>
                        <p>Fill the form to see AI predictions.</p>
                    </div>
                )}

                {isCalculating && (
                    <div className="text-center space-y-4 relative z-10">
                        <div className="w-12 h-12 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin mx-auto"></div>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">Analyzing Weather & Soil Data...</p>
                    </div>
                )}

                {/* --- RESULT DISPLAY --- */}
                {result && (
                    <div className="animate-fade-in-up relative z-10">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                            Prediction Results
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {/* Card 1: Total Yield */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl border border-green-100 dark:border-green-800">
                                <p className="text-sm text-green-600 dark:text-green-400 mb-1 flex items-center gap-1">
                                    <Sprout size={14}/> Expected Yield
                                </p>
                                <p className="text-2xl font-bold text-slate-800 dark:text-white">{result.totalYield}</p>
                            </div>

                            {/* Card 2: Revenue */}
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-2xl border border-yellow-100 dark:border-yellow-800">
                                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-1 flex items-center gap-1">
                                    <DollarSign size={14}/> Est. Revenue
                                </p>
                                <p className="text-2xl font-bold text-slate-800 dark:text-white">{result.revenue}</p>
                            </div>
                        </div>

                        {/* Extra Stats */}
                        <div className="space-y-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 dark:text-slate-300 flex items-center gap-2">
                                    <CloudRain size={16} className="text-blue-400"/> Weather Impact
                                </span>
                                <span className="font-bold text-green-600">{result.weatherImpact}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 dark:text-slate-300 flex items-center gap-2">
                                    <Droplets size={16} className="text-blue-600"/> Soil Efficiency
                                </span>
                                <span className="font-bold text-slate-700 dark:text-white">{result.efficiency}</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => {setResult(null); setFormData({...formData, area: ''});}}
                            className="w-full mt-6 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 py-2.5 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Calculate Again
                        </button>
                    </div>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;