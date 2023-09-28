import './globe.jpeg';
/*
https://bulma.io/documentation/components/dropdown/
Changed span to img; changed existing options to languages.
https://bulma.io/documentation/elements/image/
(added / to end of img in above).
Reference above for size options.
https://www.w3schools.com/html/html_filepaths.asp
img filepath
*/

export default function LanguageButton() {
  return (
    <div class="dropdown is-active">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <figure class="image is-32x32">
            <img src="globe.jpeg"/>
          </figure>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item is-active">
            English (US)
          </a>
          <a href="#" class="dropdown-item">
            简体中文
          </a>
          <a class="dropdown-item">
            中國傳統的
          </a>
          <a href="#" class="dropdown-item">
            Español
          </a>
          <a href="#" class="dropdown-item">
            عربي
          </a>
          <a href="#" class="dropdown-item">
            Português
          </a>
          <a href="#" class="dropdown-item">
            bahasa Indonesia
          </a>
          <a href="#" class="dropdown-item">
            Français
          </a>
          <a href="#" class="dropdown-item">
            日本語
          </a>
          <a href="#" class="dropdown-item">
            Русский
          </a>
          <a href="#" class="dropdown-item">
            Deutsch
          </a>
        </div>
      </div>
    </div>
  )
}