import "./ProgressBar.css"

//numberOfSections and currentSection come from Section.jsx
export default function ProgressBar({numberOfSections, currentSection, lessonTitle}) {

  return (<div className="progress-bar is-flex is-flex-direction-column is-align-items-center">

    <label className="has-text-center"><strong>{lessonTitle}&nbsp;{currentSection}/{numberOfSections}&nbsp;</strong></label>

    <progress 
      max={numberOfSections}
      value={currentSection}
      className="progress is-medium"
    ></progress>

  </div>)
}