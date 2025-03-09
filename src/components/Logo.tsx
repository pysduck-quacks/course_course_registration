
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-1 transition-transform duration-300 hover:scale-105"
    >
      <div className="relative flex items-center">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
          BMU
        </div>
        <div className="w-9 h-9 -ml-2 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
          LMS
        </div>
      </div>
    </Link>
  );
};

export default Logo;
