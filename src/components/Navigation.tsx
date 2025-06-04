
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-gradient">
            Skén:nen
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors hover:text-gray-600 ${
                isActive('/') ? 'text-black font-semibold' : 'text-black'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/resources" 
              className={`text-base font-medium transition-colors hover:text-gray-600 ${
                isActive('/resources') ? 'text-black font-semibold' : 'text-black'
              }`}
            >
              Resources
            </Link>
            <Link 
              to="/community" 
              className={`text-base font-medium transition-colors hover:text-gray-600 ${
                isActive('/community') ? 'text-black font-semibold' : 'text-black'
              }`}
            >
              Community
            </Link>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-2">
              <Link to="/" className={`text-xs ${isActive('/') ? 'text-black font-semibold' : 'text-black'}`}>
                Home
              </Link>
              <Link to="/resources" className={`text-xs ${isActive('/resources') ? 'text-black font-semibold' : 'text-black'}`}>
                Resources
              </Link>
              <Link to="/community" className={`text-xs ${isActive('/community') ? 'text-black font-semibold' : 'text-black'}`}>
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
