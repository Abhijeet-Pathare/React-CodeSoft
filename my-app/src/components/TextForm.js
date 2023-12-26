import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');


    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
    }
    const handleDeleteTextClick = () =>{
        setText("");
    }


    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea type="text" className="form-control" id="exampleFormCOntrolTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteTextClick}>Delete Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <b><p>{text.split(" ").length} words, {text.length} charaacters</p></b>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
