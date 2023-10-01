import "./ProgressBar.css"

//numberOfSections and currentSection come from Section.jsx
export default function ProgressBar({numberOfSections, currentSection}) {

  return (<div className="progress-bar container is-flex is-align-items-center">

    <label className="has-text-right"><strong>Section&nbsp;{currentSection}/{numberOfSections}&nbsp;</strong></label>

    <progress 
      max={numberOfSections}
      value={currentSection}
      className="progress is-medium"
    ></progress>

  </div>)
}