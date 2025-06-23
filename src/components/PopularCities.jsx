import { API_CONFIG } from '../utils/apiConfig.js';

// Popular cities data
export const POPULAR_CITIES = [
  { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
  { name: 'London', country: 'GB', lat: 51.5074, lon: -0.1278 },
  { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
  { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
  { name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
  { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708 },
  { name: 'Singapore', country: 'SG', lat: 1.3521, lon: 103.8198 },
  { name: 'Mumbai', country: 'IN', lat: 19.0760, lon: 72.8777 },
  { name: 'Los Angeles', country: 'US', lat: 34.0522, lon: -118.2437 },
  { name: 'Berlin', country: 'DE', lat: 52.5200, lon: 13.4050 },
  { name: 'Moscow', country: 'RU', lat: 55.7558, lon: 37.6176 },
  { name: 'Cairo', country: 'EG', lat: 30.0444, lon: 31.2357 },
  { name: 'Beijing', country: 'CN', lat: 39.9042, lon: 116.4074 },
  { name: 'São Paulo', country: 'BR', lat: -23.5505, lon: -46.6333 },
  { name: 'Toronto', country: 'CA', lat: 43.6532, lon: -79.3832 },
  { name: 'Mexico City', country: 'MX', lat: 19.4326, lon: -99.1332 },
  { name: 'Bangkok', country: 'TH', lat: 13.7563, lon: 100.5018 },
  { name: 'Seoul', country: 'KR', lat: 37.5665, lon: 126.9780 },
  { name: 'Istanbul', country: 'TR', lat: 41.0082, lon: 28.9784 },
  { name: 'Rome', country: 'IT', lat: 41.9028, lon: 12.4964 }
];

export const weatherService = {
  // Get current weather by city name
  getCurrentWeather: async (cityName) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/weather?q=${cityName}&appid=${API_CONFIG.API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('Weather data not found');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get weather by coordinates
  getWeatherByCoords: async (lat, lon) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_CONFIG.API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('Weather data not found');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get 5-day forecast
  getForecast: async (cityName) => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/forecast?q=${cityName}&appid=${API_CONFIG.API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('Forecast data not found');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get weather for multiple cities
  getMultipleCitiesWeather: async (cities) => {
    try {
      const promises = cities.map(city => 
        fetch(`${API_CONFIG.BASE_URL}/weather?q=${city}&appid=${API_CONFIG.API_KEY}&units=metric`)
          .then(response => response.ok ? response.json() : null)
          .catch(() => null)
      );
      
      const results = await Promise.all(promises);
      return results.filter(result => result !== null);
    } catch (error) {
      throw error;
    }
  },

  // Get popular cities weather
  getPopularCitiesWeather: async () => {
    try {
      const promises = POPULAR_CITIES.slice(0, 10).map(city => 
        fetch(`${API_CONFIG.BASE_URL}/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_CONFIG.API_KEY}&units=metric`)
          .then(response => response.ok ? response.json() : null)
          .catch(() => null)
      );
      
      const results = await Promise.all(promises);
      return results.filter(result => result !== null);
    } catch (error) {
      throw error;
    }
  },

  // Search cities by name
  searchCities: async (query) => {
    try {
      const response = await fetch(
        `${API_CONFIG.GEO_URL}/direct?q=${query}&limit=5&appid=${API_CONFIG.API_KEY}`
      );
      if (!response.ok) throw new Error('City search failed');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get popular cities list
  getPopularCities: () => {
    return POPULAR_CITIES;
  },

  // Get weather for a specific popular city
  getPopularCityWeather: async (cityName) => {
    const city = POPULAR_CITIES.find(c => c.name.toLowerCase() === cityName.toLowerCase());
    if (city) {
      return await weatherService.getWeatherByCoords(city.lat, city.lon);
    }
    throw new Error('City not found in popular cities list');
  }
};