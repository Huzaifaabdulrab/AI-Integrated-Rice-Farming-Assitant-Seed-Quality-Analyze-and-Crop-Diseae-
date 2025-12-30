import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from './Context/AuthContext'; // Import useAuth

import Sidebar from './components/Sidebar';
import Header from './components/Header'; // Import Header
import Home from './Home'; // This is the main content for the Dashboard (guest/logged-in)
import Login from './pages/Login';
import Signup from './pages/Signup';

// Protected Components (full content requires login)
import SeedAnalysis from './pages/SeedAnalysis';
import YieldPrediction from './pages/YieldPrediction';
import DiseaseScanner from './pages/DiseaseScanner';
import DiseaseDetection from './pages/DiseaseDetection'; // Assuming this is also a protected page
import SeedScanner from './pages/SeedScanner'; // Assuming this is also a protected page
import SeedInfo from './pages/SeedInfo'; // Assuming this is also a protected page
import DiseaseInfo from './pages/DiseaseInfo'; // Assuming this is also a protected page
import History from './pages/History'; // Assuming this is also a protected page

import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  const { user, loading } = useAuth(); // Use the authentication context

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900">
        <Loader2 className="animate-spin text-green-600" size={48} />
      </div>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-slate-50 dark:bg-gray-900 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto h-full relative">
          <Header /> {/* Render the Header component here */}
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/" element={<Home />} /> {/* Dashboard/Home always accessible, content adapts */}
            
            {/* Protected Routes */}
            <Route path="/seed-analysis" element={<ProtectedRoute><SeedAnalysis /></ProtectedRoute>} />
            <Route path="/yield-prediction" element={<ProtectedRoute><YieldPrediction /></ProtectedRoute>} />
            <Route path="/disease-scanner" element={<ProtectedRoute><DiseaseScanner /></ProtectedRoute>} />
            <Route path="/disease-detection" element={<ProtectedRoute><DiseaseDetection /></ProtectedRoute>} />
            <Route path="/seed-scanner" element={<ProtectedRoute><SeedScanner /></ProtectedRoute>} />
            <Route path="/seed-info" element={<ProtectedRoute><SeedInfo /></ProtectedRoute>} />
            <Route path="/disease-info" element={<ProtectedRoute><DiseaseInfo /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;