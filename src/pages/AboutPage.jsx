import React from 'react';
import { Cloud, Thermometer, Wind, Droplets } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Cloud className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">About WeatherApp</h1>
          <p className="text-xl text-gray-600">Your reliable weather companion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Thermometer className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Accurate Temperature</h3>
                  <p className="text-gray-600">Real-time temperature data with feels-like information</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Wind className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Wind Information</h3>
                  <p className="text-gray-600">Current wind speed and direction data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Humidity & Pressure</h3>
                  <p className="text-gray-600">Detailed atmospheric conditions</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Search weather by city name
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Use current location for weather
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Detailed weather metrics
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Sunrise and sunset times
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Responsive design for all devices
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Source</h2>
          <p className="text-gray-600 mb-4">
            Our weather data is powered by OpenWeatherMap, one of the most reliable weather data providers. 
            We fetch real-time weather information to ensure you get the most accurate and up-to-date conditions.
          </p>
          <p className="text-gray-600">
            The app is built with React and styled with Tailwind CSS, providing a modern and responsive 
            user experience across all devices.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Built with ❤️ for weather enthusiasts everywhere
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;