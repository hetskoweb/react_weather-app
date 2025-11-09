import { WEATHER_ICON_URL } from '../../constants/weather';
import type { WeatherData } from '../../types/weather';
import './CurrentWeather.scss';
import WindIcon from './../../img/wind-icon.svg';
import HumidityIcon from './../../img/humidity-icon.svg';
import PressureIcon from './../../img/pressure-icon.svg';
import CloudsIcon from './../../img/clouds-icon.svg';
import VisibilityIcon from './../../img/visibility-icon.svg';

type Props = {
  data: WeatherData;
}

export const CurrentWeather: React.FC<Props> = ({ data }) => {
  const {
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind: { speed },
    clouds: { all: cloudsCover },
    visibility,
  } = data;
  return (
    <div className="current-weather">
      <div className="container">
        <div className="current-weather__wrapper">
          <div className="summary">
            <div className="summary__img">
              <img src={`${WEATHER_ICON_URL}${weather[0].icon}@2x.png`} alt={weather[0].description} />
            </div>
            <div className="summary__temp">{Math.round(temp)} °C</div>
            <div className="summary__feels">feels like {Math.round(feels_like)}°C</div>
            <div className="summary__description">{weather[0].description}</div>
          </div>
          <div className="widget">
            <div className="widget__item">
              <div className="widget__value">
                <span className="icon">
                  <img src={WindIcon} alt="widget-icon" />
                </span>
                {Number(speed.toFixed(1))} mph
              </div>
              <div className="widget__name">Wind</div>
            </div>
            <div className="widget__item">
              <div className="widget__value">
                <span className="icon">
                  <img src={HumidityIcon} alt="widget-icon" />
                </span>
                {Math.round(humidity)} %
              </div>
              <div className="widget__name">Humidity</div>
            </div>
            <div className="widget__item">
              <div className="widget__value">
                <span className="icon">
                  <img src={PressureIcon} alt="widget-icon" />
                </span>
                {Math.round(pressure)} hPa
              </div>
              <div className="widget__name">Pressure</div>
            </div>
            <div className="widget__item">
              <div className="widget__value">
                <span className="icon">
                  <img src={CloudsIcon} alt="widget-icon" />
                </span>
                {Math.round(cloudsCover)} %
              </div>
              <div className="widget__name">Clouds cover</div>
            </div>
            <div className="widget__item">
              <div className="widget__value">
                <span className="icon">
                  <img src={VisibilityIcon} alt="widget-icon" />
                </span>
                {(visibility / 1000).toFixed(1)} km
              </div>
              <div className="widget__name">Visibility</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
