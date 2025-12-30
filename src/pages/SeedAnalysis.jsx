import React, { useState, useRef } from 'react';
import { Upload, Microscope, CheckCircle, AlertCircle, X } from 'lucide-react';

const SeedAnalysis = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null); // Image store karne ke liye
  const fileInputRef = useRef(null); // Hidden input ko click karne ke liye

  // Image Select Karne Ka Function
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setResult(null); // Purana result hata do agar nayi image hai
    }
  };

  const handleAnalyze = () => {
    if (!image) return; // Agar image nahi hai to kuch mat karo
    setAnalyzing(true);
    
    // Fake AI Delay
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
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Microscope className="text-blue-600" size={32} />
          Seed Quality Analyzer
        </h1>
        <p className="text-slate-500">Upload an image of your rice seeds to check their quality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* === UPLOAD SECTION === */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
          
          {/* Asli Input (Hidden) */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
            accept="image/*"
          />

          {/* Upload Box (Clickable) */}
          <div 
            onClick={() => fileInputRef.current.click()} // Yahan click karne se input trigger hoga
            className={`w-full h-64 bg-slate-50 border-2 border-dashed ${image ? 'border-blue-500' : 'border-slate-300'} rounded-2xl flex flex-col items-center justify-center mb-6 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all overflow-hidden relative`}
          >
            {image ? (
                // Agar Image Select Ho Gayi Hai
                <>
                    <img src={image} alt="Seed Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white font-bold">Change Image</p>
                    </div>
                </>
            ) : (
                // Agar Image Nahi Hai
                <>
                    <Upload className="text-slate-400 mb-2" size={48} />
                    <p className="text-slate-500 font-medium">Click to upload seed image</p>
                    <p className="text-xs text-slate-400 mt-1">JPG, PNG supported</p>
                </>
            )}
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={analyzing || !image}
            className={`w-full font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                !image ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {analyzing ? "Analyzing..." : "Check Quality"}
          </button>
        </div>

        {/* Results Section (Same as before) */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Analysis Report</h2>
          {!result ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 min-h-[200px]">
              <AlertCircle size={48} className="mb-2 opacity-50" />
              <p>Upload an image to start analysis.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="text-slate-600 font-medium">Overall Quality</span>
                <span className="text-green-700 font-bold text-lg flex items-center gap-2">
                  <CheckCircle size={20} /> {result.quality}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold">Purity</p>
                  <p className="text-2xl font-bold text-slate-800">{result.purity}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold">Moisture</p>
                  <p className="text-2xl font-bold text-slate-800">{result.moisture}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 mb-2">Recommendation:</p>
                <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {result.recommendation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeedAnalysis;