import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { countryNames } from './constants/countryNames';
//@ts-ignore
import { getCurrentWeather } from './api/weather.js';

function App() {
  const [city, setCity] = useState(() => localStorage.getItem('city') || 'London');
  const [country, setCountry] = useState(() => localStorage.getItem('country') || 'United Kingdom');

  const handleSelectCity = (selectedCity: string) => {
    const [newCity, countryCode] = selectedCity.split(',').map(s => s.trim());
    const newCountry = countryNames[countryCode] || countryCode;

    setCity(newCity);
    setCountry(newCountry);

    localStorage.setItem('city', newCity);
    localStorage.setItem('country', newCountry);
  };

  return (
    <div className="app">
      <Header city={city} country={country} handleSelectCity={handleSelectCity} />
    </div>
  )
}

export default App
