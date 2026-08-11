import {useState} from 'react';


const MAX = 200;
function CharCounter(){
    const [text, setText] = useState("")

    const chars = text.length;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim()).length;
    const lines = text === "" ? 0 : text.split("\n").length;
    const percent = Math.min((chars / MAX) * 100, 100);

    function clear(){
        setText("");
    }


    return(
        <>
            <h1>Character Counter</h1>

            <textarea
                className="textarea_counter"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Your text..."
                maxLength={MAX}
            />
            <div className="box-wrapper">
                <span className="inner-box">
                    <span>{chars}</span>
                    <p>Characters</p>
                </span>
                <span className="inner-box">
                    <span>{words}</span>
                    <p>Words</p>
                </span>
                <span className="inner-box">
                    <span>{sentences}</span>
                    <p>Sentences</p>
                </span>
                <span className="inner-box">
                    <span>{lines}</span>
                    <p>Lines</p>
                </span>
            </div>
            <div className="wordCount">
                <span>Total Words: </span>
                <span>{chars} / {MAX}</span>
            </div>
            <button onClick={clear}>Clear</button>

        </>
    )
}

export default CharCounter; 