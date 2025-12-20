// src/pages/SeedAnalysis.jsx
import React from 'react';

const SeedAnalysis = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-900 mb-4">Seed Analysis</h1>
      <div className="bg-white p-10 rounded-xl border border-gray-200 text-center shadow-sm">
        <p className="text-gray-500 mb-4">Upload your seed image here</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default SeedAnalysis;