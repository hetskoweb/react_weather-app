const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "http://api.openweathermap.org/geo/1.0";

export function getCurrentWeather(city) {
  return fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=en`)
    .then(res => {
      if (!res.ok) {
        throw new Error('error in receiving data from api');
      }

      return res.json();
    })
    .catch(err => {
      throw err;
    })
}

export function searchCities(query, limit = 5) {
  return fetch(`${GEO_URL}/direct?q=${encodeURIComponent(query)}&limit=${limit}&appid=${API_KEY}`)
    .then(res => {
      if (!res.ok) throw new Error("Error fetching city data");
      return res.json();
    });
}