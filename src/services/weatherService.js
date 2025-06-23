import { API_CONFIG } from '../utils/apiConfig.js';

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
  }
};