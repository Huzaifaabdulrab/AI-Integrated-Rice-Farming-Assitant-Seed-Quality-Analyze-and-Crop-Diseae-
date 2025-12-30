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
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <ScanLine className="text-green-600" size={32} />
          AI Disease Scanner
        </h1>
        <p className="text-slate-500">Detect diseases early to save your crops.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* === UPLOAD AREA === */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-center justify-center">
                
                {/* Hidden Input */}
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    className="hidden" 
                    accept="image/*"
                />

                {/* Clickable Area */}
                <div 
                    onClick={() => fileInputRef.current.click()}
                    className={`w-full h-80 bg-slate-50 border-2 border-dashed ${image ? 'border-green-500' : 'border-green-200'} rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition-all mb-6 overflow-hidden relative`}
                >
                    {image ? (
                        <>
                            <img src={image} alt="Leaf Preview" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <p className="text-white font-bold">Change Leaf Image</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <ScanLine className={`text-green-500 mb-4 ${scanning ? 'animate-pulse' : ''}`} size={64} />
                            <p className="text-slate-500 font-medium">Upload Leaf Image</p>
                        </>
                    )}
                </div>

                <button 
                    onClick={handleScan}
                    disabled={scanning || !image}
                    className={`w-full font-bold py-3 rounded-xl shadow-lg transition-all ${
                        !image ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' : 'bg-green-600 hover:bg-green-700 text-white shadow-green-200'
                    }`}
                >
                    {scanning ? "Scanning Leaf..." : "Detect Disease"}
                </button>
            </div>

            {/* Results Area (Same as before) */}
            <div className="p-8 bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Diagnosis Report</h3>
                
                {!result ? (
                    <div className="text-center text-slate-400 py-10">
                        <p>Waiting for image...</p>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                            <p className="text-xs text-red-500 font-bold uppercase mb-1">Detected Disease</p>
                            <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
                                <AlertTriangle size={24}/> {result.disease}
                            </h2>
                            <p className="text-sm text-red-400 font-medium mt-1">Confidence: {result.confidence}</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={18} /> Recommended Treatment
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {result.treatment}
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

export default DiseaseScanner;