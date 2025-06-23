// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Cloud } from 'lucide-react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cloud className="w-8 h-8" />
          <span className="text-xl font-bold">WeatherApp</span>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-4 py-2 rounded-lg ${currentPage === 'home' ? 'bg-purple-500' : 'hover:bg-blue-700'}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`px-4 py-2 rounded-lg ${currentPage === 'about' ? 'bg-purple-500' : 'hover:bg-blue-700'}`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`px-4 py-2 rounded-lg ${currentPage === 'contact' ? 'bg-purple-500' : 'hover:bg-blue-700'}`}
          >
            Contact
          </button>
        </div>
      </nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;