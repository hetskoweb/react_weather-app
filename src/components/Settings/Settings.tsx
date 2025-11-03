import './Settings.scss';
import MoonIcon from './../../img/moon-icon.svg';
import SettingsIcon from './../../img/settings-icon.svg';

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__btn settings__btn--theme">
        <span className="icon">
          <img src={MoonIcon} alt='theme-icon' />
        </span>
      </div>
      <div className="settings__btn settings__btn--measurement">
        <span className="icon">
          <img src={SettingsIcon} alt="settings-icon" />
        </span>
      </div>
    </div>
  );
};