import React from 'react';
import { Sun, CloudRain } from 'lucide-react';
import { useAuth } from '../Context/AuthContext'; // Import useAuth

const Header = () => {
  const { user } = useAuth(); // Get user from AuthContext

  const getDisplayName = () => {
    if (user && user.displayName) {
      return user.displayName.split(' ')[0]; // Use first name if displayName exists
    }
    if (user && user.email) {
      return user.email.split('@')[0]; // Use email prefix if displayName is not available
    }
    return '';
  };

  const welcomeMessage = user ? `Good Morning, ${getDisplayName()}` : 'Welcome back!';
  const showWelcomeMessage = user || welcomeMessage === 'Welcome back!'; // Always show a message

  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 p-8 text-white shadow-xl shadow-green-900/20 dark:shadow-none relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400 opacity-20 rounded-full -ml-10 -mb-10 blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                {showWelcomeMessage && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-green-50 mb-4 border border-white/10">
                        <Sun size={16} className="text-yellow-300"/> {welcomeMessage}
                    </div>
                )}
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Optimize your harvest <br/> with <span className="text-green-300">AI Intelligence</span>
                </h1>
                <p className="text-green-100 max-w-lg text-lg opacity-90">
                    Monitor crop health, analyze seeds, and predict yields with 98% accuracy.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full md:w-auto min-w-[200px] text-center shadow-lg">
                <CloudRain size={40} className="mx-auto mb-2 text-blue-200"/>
                <p className="text-3xl font-bold">24°C</p>
                <p className="text-green-100 text-sm">Light Rain Expected</p>
            </div>
        </div>
    </div>
  );
};

export default Header;
