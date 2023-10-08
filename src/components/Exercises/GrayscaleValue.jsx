import artwork from "../../assets/images/GrayscaleShades.jpg"
import "./GrayscaleValue.css";
import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

//setCompleted come from section
export default function GrayscaleValue({ setCompleted }) {

  function handlePuzzleSolved() {
    setCompleted(true);
  }

  return (<div className="grayscale-value">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">
          <JigsawPuzzle
            imageSrc={artwork}
            rows={1}
            columns={5}
            onSolved={handlePuzzleSolved}
            className="artwork"
          />
       

      </div>
      
    </div>

  </div>)
}