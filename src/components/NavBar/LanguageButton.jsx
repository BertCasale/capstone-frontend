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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
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


   //Close profile Menu on outide click------------------
   useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isActive && !e.target.closest('.dropdown-trigger')) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isActive]);

  //console.log(`Language: ${language}`);
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
          <Link
            href="#"
            className={`dropdown-item ${language === "1" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("1")}
          >
            English (US)
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "2" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("2")}
          >
            简体中文
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "3" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("3")}
          >
            中國傳統的
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "4" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("4")}
          >
            Español
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "5" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("5")}
          >
            عربي
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "6" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("6")}
          >
            Português
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "7" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("7")}
          >
            bahasa Indonesia
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "8" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("8")}
          >
            Français
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "9" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("9")}
          >
            日本語
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "10" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("10")}
          >
            Русский
          </Link>
          <Link
            href="#"
            className={`dropdown-item ${language === "11" ? "is-active" : ""}`}
            onClick={() => handleLanguageChange("11")}
          >
            Deutsch
          </Link>
        </div>
      </div>
    </div>
  )
}