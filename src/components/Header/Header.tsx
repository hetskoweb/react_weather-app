import './Header.scss';
import PinIcon from './../../img/pin-icon.svg';
import { SearchBar } from '../SearchBar';
import { Settings } from '../Settings';

type Props = {
  city: string;
  country: string;
  handleSelectCity: (city: string) => void;
};

export const Header: React.FC<Props> = ({ city, country, handleSelectCity }) => {
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