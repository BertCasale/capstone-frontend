/*
https://bulma.io/documentation/components/dropdown/
Changed span to img; changed existing options to languages.
https://bulma.io/documentation/elements/image/
(added / to end of img in above).
Reference above for size options.
https://www.w3schools.com/html/html_filepaths.asp
img filepath
Altered code to work with state; Bulma documentation does not reflect toggling visibility by default.
*/
import {useState} from 'react';
import './globe.jpg';
import './LanguageButton.css';

export default function LanguageButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`dropdown ${isActive ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <figure className="image is-32x32">
            <img src="globe.jpg"/>
          </figure>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item is-active">
            English (US)
          </a>
          <a href="#" className="dropdown-item">
            简体中文
          </a>
          <a href="#" className="dropdown-item">
            中國傳統的
          </a>
          <a href="#" className="dropdown-item">
            Español
          </a>
          <a href="#" className="dropdown-item">
            عربي
          </a>
          <a href="#" className="dropdown-item">
            Português
          </a>
          <a href="#" className="dropdown-item">
            bahasa Indonesia
          </a>
          <a href="#" className="dropdown-item">
            Français
          </a>
          <a href="#" className="dropdown-item">
            日本語
          </a>
          <a href="#" className="dropdown-item">
            Русский
          </a>
          <a href="#" className="dropdown-item">
            Deutsch
          </a>
        </div>
      </div>
    </div>
  )
}