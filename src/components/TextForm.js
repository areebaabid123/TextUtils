import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");

        // setText("You have click on handleUpClick")

    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");

        // setText("You have click on handleLoClick")

    }

    const handleClearClick = () => {
        let newText ='';
        setText(newText)
        props.showAlert("Cleared text", "success");

        // setText("You have click on handleLoClick")

    }



    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "Enter the txt here2"; wrong way to change the state
    // setText = "Enter the txt here2"; correct way to change the state

    return (
        <>
        
            <div className='container'style={{color: props.mode==='dark'?'white': 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white' , color: props.mode==='dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-dark mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-dark mx-1" onClick={handleClearClick} >Clear text</button>

            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white': 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here..."}</p>

            </div>
        </>
    )
}
export default TextForm
