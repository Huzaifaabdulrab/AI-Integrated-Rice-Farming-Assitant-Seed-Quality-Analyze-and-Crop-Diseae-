import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 
import { Loader2 } from 'lucide-react';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Signup from './pages/Signup';

// === YAHAN CHANGES KIYE HAIN (Real imports lagaye hain) ===
import SeedAnalyzer from './pages/SeedAnalysis';
import YieldPrediction from './pages/YieldPrediction';
import DiseaseScanner from './pages/DiseaseScanner';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-green-600" size={48} />
      </div>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        
        {user && <Sidebar />}

        <div className="flex-1 overflow-y-auto h-full relative">
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />

            <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            
            {/* Ab ye routes Asli Pages kholenge */}
            <Route path="/seed-analyzer" element={user ? <SeedAnalyzer /> : <Navigate to="/login" />} />
            <Route path="/yield-prediction" element={user ? <YieldPrediction /> : <Navigate to="/login" />} />
            <Route path="/disease-scanner" element={user ? <DiseaseScanner /> : <Navigate to="/login" />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;