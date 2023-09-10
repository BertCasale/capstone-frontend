import artwork from "../../assets/images/GrayscaleShades.jpg"
import "./GrayscaleValue.css";
import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

//setCompleted, completed, and setAttempted come from section
export default function ConvergingLines({ setCompleted }) {

  function handlePuzzleSolved() {
    setCompleted(true);
  }

  return (<div className="converging-lines">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">

        <JigsawPuzzle
          imageSrc={artwork}
          rows={1}
          columns={9}
          onSolved={handlePuzzleSolved}
          className="artwork"
        />

      </div>
      
    </div>

  </div>)
}