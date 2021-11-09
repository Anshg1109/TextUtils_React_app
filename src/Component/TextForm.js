import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCLick = ()=>{
        // console.log("Uppercasewas clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLowCLick = ()=>{
        // console.log("Uppercasewas clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
    } 
    const handleclearCLick = ()=>{
        let newText= ('');
        setText(newText);
    } 
    const handleTitleCase = ()=>{
        let newText = (text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());
        setText(newText);
    } 

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("Your Text here");  //Correct way to change the state
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="mybox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={ handleOnChange } id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ handleUpCLick }>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={ handleLowCLick }>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={ handleclearCLick }>Clear Text</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={ handleTitleCase }>Title case</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preveiew</h2>
            <p>{text}</p>

        </div>
        </>
    );
}
