import './Toolbar.css'
import { BsSquare, BsCircle } from 'react-icons/bs'
import { AiOutlineLine } from 'react-icons/ai'
import { LuEraser } from 'react-icons/lu'


export default function Toolbar({ clearCanvas, handleColorChange, handleLineWidthChange, toggleEraseMode, eraseMode, undoAction, lineMode, toggleLineMode, rectangleMode, toggleRectangleMode, circleMode, toggleCircleMode, fillMode, toggleFillMode }) {

  return (
    <section className="toolbar">

      <div className="row">

        <label className="label-title">Shapes</label>
        <ul className="options">

          <li className={`option tool ${rectangleMode && 'active'}`} onClick={toggleRectangleMode}>
            <BsSquare/>
            <span>Rectangle</span>
          </li>

          <li className={`option tool ${circleMode && 'active'}`} onClick={toggleCircleMode}>
            <BsCircle/>
            <span>Circle</span>
          </li>

          <li className={`option tool ${lineMode && 'active'}`} onClick={toggleLineMode}>
            <AiOutlineLine/>
            <span>Line</span>
          </li>

          <li className="option">
            <input type="checkbox" id="fill-color" onClick={toggleFillMode}/> 
            {/* have to uncheck checkbox when eraseMode is toggled on */}
            <label htmlFor="fill-color">Fill color</label>
            
          </li>

        </ul>

      </div>

      <div className="row">

        <label className="label-title">Options</label>
        <ul className="options">
          
          <li className='option'>
            <label htmlFor="color-picker">Color</label>
            <input 
              name="color-picker" 
              id="color-picker" 
              type={"color"} 
              defaultValue={'#ff690b'}
              onChange={(e) => handleColorChange(e)}
            />
          </li>

          <li className={`option tool ${eraseMode && 'active'}`} onClick={toggleEraseMode}>
            {/* have to uncheck fill color checkbox when eraseMode is toggled on */}
            <LuEraser/>
            <span>Eraser</span>
          </li>

          <li className='option'>
            <input  
              id="line-width" 
              type="range" 
              defaultValue="5" 
              onChange={handleLineWidthChange} 
              max="30" 
              min="1"
            />
          </li>

        </ul>

      </div>

      <div className="row buttons">

        <button className="undo-action" onClick={() => undoAction()}>Undo</button>

        <button className="clear-canvas" onClick={clearCanvas}>Clear</button>

        {/* <button className="save-img">Save as Image</button> */}

      </div>

    </section>
  )
}
