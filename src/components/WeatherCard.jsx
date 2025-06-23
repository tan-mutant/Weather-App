import React from 'react';

const WeatherCard = ({ title, value, icon: Icon, unit = '', className = '' }) => (
  <div className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow ${className}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-800">
          {value}
          <span className="text-sm font-normal text-gray-600 ml-1">{unit}</span>
        </p>
      </div>
      {Icon && <Icon className="w-8 h-8 text-blue-500" />}
    </div>
  </div>
);

export default WeatherCard;