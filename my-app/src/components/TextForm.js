import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');


    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea type="text" className="form-control" id="exampleFormCOntrolTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
