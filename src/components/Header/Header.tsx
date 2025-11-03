import { useState } from 'react';
import './Header.scss';
import PinIcon from './../../img/pin-icon.svg';
import { SearchBar } from '../SearchBar';
import { countryNames } from '../../constants/countryNames';
import { Settings } from '../Settings';

export const Header = () => {
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
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__place">
            <span className="icon">
              <img src={PinIcon} alt="pin-icon" />
            </span>
            <b>{city},</b> {country}
          </div>
          <div className="header__search">
            <SearchBar onSelectCity={handleSelectCity} />
          </div>
          <div className="header__settings">
            <Settings />
          </div>
        </div>
      </div>
    </header>
  );
};