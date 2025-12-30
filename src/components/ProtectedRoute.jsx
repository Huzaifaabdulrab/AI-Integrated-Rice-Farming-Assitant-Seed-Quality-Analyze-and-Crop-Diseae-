import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import useAuth
import { Loader2 } from 'lucide-react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900">
        <Loader2 className="animate-spin text-green-600" size={48} />
      </div>
    );
  }

  if (!user) {
    // Save the current location they were trying to access
    localStorage.setItem('redirectPath', location.pathname);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
