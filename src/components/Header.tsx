
import React from 'react';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6">
      <h1 className="text-xl font-medium text-purple-dark">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <button className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
          <Bell size={20} />
        </button>
        <button className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
