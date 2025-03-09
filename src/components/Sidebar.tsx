
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, MessageSquare, FileText, List, LayoutList } from 'lucide-react';
import Logo from './Logo';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Clock, label: 'Timetable', path: '/timetable' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: FileText, label: 'Result', path: '/result' },
    { icon: LayoutList, label: 'Courses', path: '/courses' },
    { icon: List, label: 'Attendance', path: '/attendance' },
  ];

  return (
    <div className="w-[220px] flex-shrink-0 h-screen bg-gradient-to-b from-purple-500 to-purple-600 p-4 flex flex-col">
      <div className="mb-6 ml-3">
        <Logo />
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <item.icon size={20} className="opacity-90" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
