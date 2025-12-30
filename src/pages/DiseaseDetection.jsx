import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload, X, ArrowRight, Loader2, Bug, AlertTriangle, ShieldCheck, Leaf, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setAnalysisResult(null);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      const mockResult = {
        plantName: "Tomato (Tamatar)",
        diseaseName: "Early Blight Detection",
        confidence: 96,
        severity: "Moderate",
        isHealthy: false,
        treatments: [
          "Use fungicides containing Copper or Mancozeb.",
          "Remove infected lower leaves immediately.",
          "Improve air circulation and avoid overhead watering."
        ]
      };

      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-500 transition-colors font-medium mb-8"
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-3 flex items-center justify-center gap-4">
            <Bug className="text-red-600 dark:text-red-500" size={40} />
            Crop Disease Detection
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Upload a photo of the affected leaf to identify the disease and get remedies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: Upload Section */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
            {!selectedImage ? (
              <div 
                onClick={triggerFileInput}
                className="border-3 border-dashed border-slate-300 dark:border-slate-600 rounded-3xl p-12 text-center cursor-pointer hover:border-red-500 dark:hover:border-red-500 hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-all duration-300 group h-96 flex flex-col items-center justify-center"
              >
                <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload size={36} />
                </div>
                <p className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Click to Upload Leaf Photo</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">JPG, PNG supported • Max 10MB</p>
              </div>
            ) : (
              <div className="relative h-96 rounded-3xl overflow-hidden border-4 border-red-500 dark:border-red-600 shadow-xl">
                <button 
                  onClick={removeImage} 
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg z-10 transition-all"
                >
                  <X size={20} />
                </button>
                <img src={selectedImage} alt="Leaf Scan" className="w-full h-full object-cover" />
              </div>
            )}

            {/* Analyze Button */}
            {selectedImage && !analysisResult && (
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="mt-8 w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-red-500/30 dark:shadow-red-900/30 flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Diagnosing Issue...
                  </>
                ) : (
                  <>
                    Identify Disease <ArrowRight size={20} />
                  </>
                )}
              </button>
            )}
          </div>

          {/* RIGHT: Result Section */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 min-h-[500px] flex flex-col justify-center">
            
            {!analysisResult && !isAnalyzing && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="text-green-600 dark:text-green-500" size={40} />
                </div>
                <p className="text-xl text-slate-500 dark:text-slate-400">Upload a leaf photo to see diagnosis</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center space-y-6 py-20">
                <Loader2 size={64} className="animate-spin text-red-600 dark:text-red-500 mx-auto" />
                <p className="text-2xl font-bold text-slate-700 dark:text-white">Analyzing Symptoms...</p>
                <p className="text-slate-600 dark:text-slate-400">Checking for fungal, bacterial, and viral patterns.</p>
              </div>
            )}

            {/* Result Display */}
            {analysisResult && (
              <div className="space-y-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Diagnosis Report</span>
                  <span className="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold border border-red-300 dark:border-red-800">
                    {analysisResult.plantName}
                  </span>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 border-l-8 border-red-600 dark:border-red-500 p-6 rounded-r-2xl">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3 mb-2">
                    <AlertTriangle className="text-red-600 dark:text-red-400" size={36} />
                    {analysisResult.diseaseName}
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300">
                    Confidence: <span className="font-bold text-red-600 dark:text-red-400">{analysisResult.confidence}%</span> • 
                    Severity: <span className="font-bold text-red-600 dark:text-red-400 ml-2">{analysisResult.severity}</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                    <Pill className="text-blue-600 dark:text-blue-400" size={24} />
                    Recommended Cure
                  </h3>
                  <ul className="space-y-4">
                    {analysisResult.treatments.map((item, index) => (
                      <li key={index} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <ShieldCheck className="text-green-600 dark:text-green-500 shrink-0 mt-0.5" size={22} />
                        <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => { setAnalysisResult(null); setSelectedImage(null); }}
                  className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 py-3.5 rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  Check Another Leaf
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;