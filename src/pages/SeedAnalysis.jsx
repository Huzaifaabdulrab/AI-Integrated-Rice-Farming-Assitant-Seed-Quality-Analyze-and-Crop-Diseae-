import React, { useState, useRef } from 'react';
import { Upload, Microscope, CheckCircle, AlertCircle, X } from 'lucide-react';

const SeedAnalysis = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!image) return;
    setAnalyzing(true);
    
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        quality: "Good",
        purity: "92%",
        moisture: "12%",
        recommendation: "Suitable for planting. Treat with fungicide before sowing."
      });
    }, 2000);
  };

  return (
    <div className="p-6 md:p-10 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-2">
            <Microscope className="text-blue-600 dark:text-blue-400" size={36} />
            Seed Quality Analyzer
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Upload an image of your rice seeds to check their quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Upload Section */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 text-center">
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*"
            />

            <div 
              onClick={() => fileInputRef.current.click()}
              className={`w-full h-80 bg-slate-50 dark:bg-slate-900/50 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center mb-8 cursor-pointer transition-all overflow-hidden relative group
                ${image ? 'border-blue-500 dark:border-blue-600' : 'border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30'}`}
            >
              {image ? (
                <>
                  <img src={image} alt="Seed Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold text-lg">Change Image</p>
                  </div>
                </>
              ) : (
                <>
                  <Upload className="text-slate-400 dark:text-slate-500 mb-4" size={56} />
                  <p className="text-slate-600 dark:text-slate-300 font-medium text-lg mb-1">Click to upload seed image</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">JPG, PNG supported</p>
                </>
              )}
            </div>

            <button 
              onClick={handleAnalyze}
              disabled={analyzing || !image}
              className={`w-full font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg
                ${!image || analyzing 
                  ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-blue-500/30 dark:shadow-blue-900/30'
                }`}
            >
              {analyzing ? "Analyzing..." : "Check Quality"}
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Analysis Report</h2>
            
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 min-h-[250px]">
                <AlertCircle size={56} className="mb-4 opacity-60" />
                <p className="text-lg">Upload an image to start analysis</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-green-50 dark:bg-green-900/30 rounded-2xl border border-green-100 dark:border-green-800">
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">Overall Quality</span>
                  <span className="text-green-700 dark:text-green-400 font-bold text-xl flex items-center gap-2">
                    <CheckCircle size={24} /> {result.quality}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Purity</p>
                    <p className="text-3xl font-bold text-slate-800 dark:text-white">{result.purity}</p>
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Moisture</p>
                    <p className="text-3xl font-bold text-slate-800 dark:text-white">{result.moisture}</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Recommendation:</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedAnalysis;