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

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Text Copied ");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        }
        

    const [text, setText] = useState('');
    // setText("Your Text here");  //Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="mybox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={ handleOnChange } style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ handleUpCLick }>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={ handleLowCLick }>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={ handleclearCLick }>Clear Text</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={ handleTitleCase }>Title case</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={ handleCopy }>Copy Text</button>
            <button className="btn btn-primary mx-1 mt-1" onClick={ handleExtraSpaces }>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preveiew</h2>
            <p>{text.length>0 ? text:"Enter Something First"}</p>

        </div>
        </>
    );
}
