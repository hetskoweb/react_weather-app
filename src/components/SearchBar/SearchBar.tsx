import { useEffect, useState } from 'react';
// @ts-ignore
import { searchCities } from './../../api/weather.js';
import './SearchBar.scss';
import MagnifierIcon from './../../img/magnifier-icon.svg';

type Props = {
  onSelectCity: (city: string) => void;
}

type City = {
  name: string;
  country: string;
  state?: string;
}

export const SearchBar: React.FC<Props> = ({ onSelectCity }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<City[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(() => {
      searchCities(query)
        .then((data: City[]) => {
          setSuggestions(data);
          console.log(data);
        })
        .catch((err: unknown) => console.error("Error:", err));

    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);


  return (
    <div className="searchbar">
      <div className="searchbar__wrapper">
        <span className="icon">
          <img src={MagnifierIcon} alt="magnifier-icon" />
        </span>
        <input
          type="text"
          className="searchbar__input"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="searchbar__suggestions">
          {suggestions.map((city, index) => (
            <li
              key={index}
              className="searchbar__suggestion"
              onClick={() => {
                onSelectCity(`${city.name}, ${city.country}`);
                setQuery("");
                setSuggestions([]);
              }}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};