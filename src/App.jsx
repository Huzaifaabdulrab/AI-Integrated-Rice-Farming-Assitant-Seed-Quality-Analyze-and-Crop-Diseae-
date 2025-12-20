import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './Context/ThemeContext'; 

// Import Pages
import Home from './pages/Home';
import History from './pages/History';
import YieldPrediction from './pages/YieldPrediction';
import SeedInfo from './pages/SeedInfo';
import SeedScanner from './pages/SeedScanner';
import DiseaseInfo from './pages/DiseaseInfo';
import DiseaseScanner from './pages/DiseaseScanner';

const App = () => {
  return (
    <ThemeProvider> 
      <Router>
        {/* Main Wrapper */}
        <div className="flex bg-slate-50 dark:bg-slate-900 min-h-screen w-full overflow-x-hidden">
          
          <Sidebar />

          {/* Content Wrapper - Isme 'w-full' aur 'overflow-x-hidden' zaroori hai */}
          <div className="flex-1 md:ml-64 w-full min-h-screen relative overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seed" element={<SeedInfo />} />
              <Route path="/seed-scan" element={<SeedScanner />} />
              <Route path="/disease" element={<DiseaseInfo />} />
              <Route path="/disease-scan" element={<DiseaseScanner />} />
              <Route path="/yield" element={<YieldPrediction />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>

        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;