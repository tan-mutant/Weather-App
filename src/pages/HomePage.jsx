import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import WeatherIcon from '../components/WeatherIcon';
import { MapPin, Thermometer, Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from 'lucide-react';
import { weatherService } from '../services/weatherService.js';
import { POPULAR_CITIES } from '../components/PopularCities.jsx';

const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const popularCities = POPULAR_CITIES;

  useEffect(() => {
    const loadDefaultCity = async () => {
      try {
        const defaultCity = popularCities[1]; // London
        const data = await weatherService.getWeatherByCoords(defaultCity.lat, defaultCity.lon);
        setWeatherData(data);
      } catch (error) {
        console.error('Error loading default city weather:', error);
      } finally {
        setLoading(false);
      }
    };
    loadDefaultCity();
  }, []);

  const handleCityChange = async (event) => {
    const selectedCity = popularCities[event.target.value];
    setLoading(true);
    try {
      const data = await weatherService.getWeatherByCoords(selectedCity.lat, selectedCity.lon);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex flex-col items-center justify-start p-8 min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-4xl bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">WeatherApp</h1>
        <p className="text-xl text-white/90 mb-8">Get current weather information for any city</p>
        
        <div className="w-full relative mb-8">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
            <select
              onChange={handleCityChange}
              className="w-full px-12 py-3 rounded-full border-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg appearance-none cursor-pointer"
              defaultValue="1"
            >
              {popularCities.map((city, index) => (
                <option key={`${city.name}-${city.country}`} value={index}>
                  {city.name}, {city.country}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-white">
            <div className="inline-block w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2">Loading weather data...</p>
          </div>
        ) : weatherData && (
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <div className="flex items-center justify-center">
                <WeatherIcon condition={weatherData.weather[0].main} size="w-24 h-24" />
                <div className="ml-4">
                  <p className="text-6xl font-bold text-gray-800">
                    {Math.round(weatherData.main.temp)}°C
                  </p>
                  <p className="text-xl text-gray-600 capitalize">
                    {weatherData.weather[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <WeatherCard
                title="Feels Like"
                value={`${Math.round(weatherData.main.feels_like)}°C`}
                icon={Thermometer}
              />
              <WeatherCard
                title="Humidity"
                value={`${weatherData.main.humidity}%`}
                icon={Droplets}
              />
              <WeatherCard
                title="Wind"
                value={`${weatherData.wind.speed} m/s`}
                icon={Wind}
              />
              <WeatherCard
                title="Visibility"
                value={`${(weatherData.visibility / 1000).toFixed(1)} km`}
                icon={Eye}
              />
              <WeatherCard
                title="Pressure"
                value={`${weatherData.main.pressure} hPa`}
                icon={Gauge}
              />
              <WeatherCard
                title="Sunrise/Sunset"
                value={`${formatTime(weatherData.sys.sunrise)} / ${formatTime(weatherData.sys.sunset)}`}
                icon={Sunrise}
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Min</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(weatherData.main.temp_min)}°C
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Current</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {Math.round(weatherData.main.temp)}°C
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Max</p>
                  <p className="text-2xl font-bold text-red-600">
                    {Math.round(weatherData.main.temp_max)}°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;