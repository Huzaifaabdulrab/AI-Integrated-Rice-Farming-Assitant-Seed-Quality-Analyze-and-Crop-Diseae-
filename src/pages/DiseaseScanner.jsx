import React, { useState, useRef } from 'react';
import { ScanLine, Upload, AlertTriangle, CheckCircle } from 'lucide-react';

const DiseaseScanner = () => {
  const [scanning, setScanning] = useState(false);
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

  const handleScan = () => {
    if (!image) return;
    setScanning(true);
    
    setTimeout(() => {
      setScanning(false);
      setResult({
        disease: "Brown Spot",
        confidence: "89%",
        treatment: "Apply fungicides like Mancozeb. Improve soil nutrition by adding Potash."
      });
    }, 2500);
  };

  return (
    <div className="p-6 md:p-10 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-2">
            <ScanLine className="text-green-600 dark:text-green-500" size={36} />
            AI Disease Scanner
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Detect diseases early to save your crops.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Upload Area */}
            <div className="p-8 md:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />

              <div 
                onClick={() => fileInputRef.current.click()}
                className={`w-full h-96 bg-slate-50 dark:bg-slate-900/50 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden relative group
                  ${image ? 'border-green-500 dark:border-green-600' : 'border-slate-300 dark:border-slate-600 hover:border-green-500 dark:hover:border-green-600'}`}
              >
                {image ? (
                  <>
                    <img src={image} alt="Leaf Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-bold text-lg">Change Image</p>
                    </div>
                  </>
                ) : (
                  <>
                    <ScanLine className={`mb-5 text-green-600 dark:text-green-500 ${scanning ? 'animate-pulse' : ''}`} size={80} />
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">Click to Upload Leaf Image</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Supports JPG, PNG</p>
                  </>
                )}
              </div>

              <button 
                onClick={handleScan}
                disabled={scanning || !image}
                className={`w-full mt-8 font-bold py-4 rounded-2xl shadow-lg transition-all text-lg
                  ${!image || scanning 
                    ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-green-300 dark:shadow-green-900/30'
                  }`}
              >
                {scanning ? "Scanning Leaf..." : "Detect Disease"}
              </button>
            </div>

            {/* Results Area */}
            <div className="p-8 md:p-10 bg-slate-50/70 dark:bg-slate-900/70">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8">Diagnosis Report</h3>
              
              {!result ? (
                <div className="text-center py-20">
                  <div className="bg-slate-200 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl w-20 h-20 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-400">Upload an image to see results</p>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-2xl border border-red-200 dark:border-red-800">
                    <p className="text-xs font-bold uppercase text-red-600 dark:text-red-400 mb-2">Detected Disease</p>
                    <h2 className="text-3xl font-bold text-red-700 dark:text-red-300 flex items-center gap-3">
                      <AlertTriangle size={32} />
                      {result.disease}
                    </h2>
                    <p className="text-red-600 dark:text-red-400 font-semibold mt-2">
                      Confidence: {result.confidence}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner">
                    <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2 text-lg">
                      <CheckCircle className="text-green-600 dark:text-green-500" size={22} />
                      Recommended Treatment
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {result.treatment}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseScanner;