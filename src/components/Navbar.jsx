import React from 'react';
import { Cloud, Home, Info, Mail } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Cloud className="w-8 h-8 text-white mr-2" />
            <span className="text-xl font-bold text-white">WeatherApp</span>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;