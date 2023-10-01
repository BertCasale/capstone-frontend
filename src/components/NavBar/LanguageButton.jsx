/*
https://bulma.io/documentation/components/dropdown/
Changed span to img; changed existing options to languages.
https://bulma.io/documentation/elements/image/
(added / to end of img in above).
Reference above for size options.
https://www.w3schools.com/html/html_filepaths.asp
img filepath
Altered code to work with state; Bulma documentation does not reflect toggling visibility by default.
Bulma column is-vcentered or such apparently only works for columns.
css absolute positioning requires defining containers.
Therefore I simply resized button - jl.
*/
import { useState, useEffect } from 'react';
import './LanguageButton.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function LanguageButton({ language, setLanguage }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const renderIfActive = () => {
    //console.log("output", `dropdown ${isActive ? 'is-active' : ''}`)
    return `dropdown ${isActive ? 'is-active' : ''}`
  }

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsActive(!isActive);
  }

  useEffect(() => {
    setIsActive(false)
  }, [])

  console.log(`Language: ${language}`);
  return (
    <div className={renderIfActive()}>
      <div className="dropdown-trigger">
        <button className="button is-medium globeIcon" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleDropdown}>
          <FontAwesomeIcon className="vertical-center" icon={faGlobe} />
          {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'\u2304'}</span> */}
          {/* <span className="icon is-small">
            <i className="fas fa-globe"></i>
          </span> */}
          {/* <figure className="image is-32x32">
            <i className="fas fa-solid fa-globe globeIcon"></i>
          </figure> */}
          <span className="icon is-medium">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a
            href="#"
            className={`dropdown-item ${language === "1" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("1")}
          >
            English (US)
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "2" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("2")}
          >
            简体中文
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "3" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("3")}
          >
            中國傳統的
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "4" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("4")}
          >
            Español
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "5" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("5")}
          >
            عربي
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "6" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("6")}
          >
            Português
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "7" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("7")}
          >
            bahasa Indonesia
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "8" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("8")}
          >
            Français
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "9" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("9")}
          >
            日本語
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "10" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("10")}
          >
            Русский
          </a>
          <a
            href="#"
            className={`dropdown-item ${language === "11" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("11")}
          >
            Deutsch
          </a>
        </div>
      </div>
    </div>
  )
}