import React from 'react';
import { weatherService } from '../services/weatherService.js';
import { MapPin } from 'lucide-react';

const CitySearch = ({ onCitySelect, className = '' }) => {
  const popularCities = weatherService.getPopularCities();

  const handleCitySelect = async (event) => {
    const selectedCity = popularCities[event.target.value];
    if (selectedCity) {
      try {
        const weatherData = await weatherService.getWeatherByCoords(selectedCity.lat, selectedCity.lon);
        onCitySelect(weatherData);
      } catch (error) {
        console.error('Error fetching weather for selected city:', error);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-center">
        <div className="relative w-full bg-white rounded-full shadow-lg">
          <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            onChange={handleCitySelect}
            className="w-full pl-16 pr-12 py-4 bg-transparent border-none rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer text-lg"
            defaultValue=""
          >
            <option value="" disabled>Select a city...</option>
            {popularCities.map((city, index) => (
              <option
                key={`${city.name}-${city.country}`}
                value={index}
                className="py-2"
              >
                {city.name}, {city.country}
              </option>
            ))}
          </select>
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySearch;