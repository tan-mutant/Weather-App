import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, Zap } from 'lucide-react';

const WeatherIcon = ({ condition, size = 'w-16 h-16' }) => {
  const getIcon = () => {
    const weather = condition?.toLowerCase() || '';
    
    if (weather.includes('rain') || weather.includes('drizzle')) {
      return <CloudRain className={`${size} text-blue-500`} />;
    }
    if (weather.includes('snow')) {
      return <CloudSnow className={`${size} text-blue-300`} />;
    }
    if (weather.includes('thunder') || weather.includes('storm')) {
      return <Zap className={`${size} text-yellow-500`} />;
    }
    if (weather.includes('cloud')) {
      return <Cloud className={`${size} text-gray-500`} />;
    }
    return <Sun className={`${size} text-yellow-500`} />;
  };
  
  return (
    <div className="flex justify-center">
      {getIcon()}
    </div>
  );
};

export default WeatherIcon;