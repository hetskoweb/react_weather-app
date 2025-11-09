import { useEffect, useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { countryNames } from './constants/countryNames';
//@ts-ignore
import { getCurrentWeather } from './api/weather.js';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather.js';
import type { WeatherData } from './types/weather.js';
import { Loader } from './components/Loader/Loader.js';

function App() {
  const [city, setCity] = useState(() => localStorage.getItem('city') || 'London');
  const [country, setCountry] = useState(() => localStorage.getItem('country') || 'United Kingdom');
  const [weatherData, setWeatherData] = useState<WeatherData | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSelectCity = (selectedCity: string) => {
    const [newCity, countryCode] = selectedCity.split(',').map(s => s.trim());
    const newCountry = countryNames[countryCode] || countryCode;

    setCity(newCity);
    setCountry(newCountry);

    localStorage.setItem('city', newCity);
    localStorage.setItem('country', newCountry);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);

    getCurrentWeather(city)
      .then(((data: WeatherData) => setWeatherData(data)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [city]);

  console.log(weatherData);

  return (
    <div className="app">
      <Header city={city} country={country} handleSelectCity={handleSelectCity} />
      <div className="weather">
        {loading && (
          <Loader />
        )}
        {error && (
          <div className="weather__error">Unexpectable error occured</div>
        )}
        {!loading && !error && weatherData && (
          <CurrentWeather data={weatherData} />
        )}
      </div>
    </div>
  )
}

export default App
