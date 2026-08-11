import {use, useState} from 'react';

const presets = [
  "#3B82F6", "#EF4444", "#10B981", "#F59E0B",
  "#8B5CF6", "#EC4899", "#14B8A6", "#F97316",
  "#c0cfb2", "#8ba888", "#44624a", "#74A12E"
];

function Colorpicker(){
    const [color, setColor] = useState("#3B82F6");
    function randomColor() {
        const random = Math.floor(Math.random() * presets.length);
        setColor(presets[random]);
    }
    return(
        <>
            <div className="mainColorBox" style={{ backgroundColor: color }}></div>
            <h5>Pick a preset color</h5>
            <div className="colorBoxes">
                {presets.map((c) => (
                    <div
                        key={c}
                        className="colorBox"
                        style={{ backgroundColor: c }}
                        onClick={() => setColor(c)}
                    ></div>
                ))}
            </div>
            <span className='currentcolorheading'>Current Color</span>
            <div class="button_wrapper">
                <div className="current-color-btn">{color}</div>
                <div className="current_colorBox" style={{ backgroundColor: color }}></div>
                <button className="randomColor" onClick={randomColor} >Random Color</button>
            </div>
                <span className='currentcolorheading'>Custom Color</span>
            <div className='customColor'>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
        </>
    )
}

export default Colorpicker