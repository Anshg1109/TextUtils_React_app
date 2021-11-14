import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCLick = ()=>{
        // console.log("Uppercasewas clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "Success");
    }
    const handleLowCLick = ()=>{
        // console.log("Uppercasewas clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerrcase!", "Success");

    } 
    const handleclearCLick = ()=>{
        let newText= ('');
        setText(newText);
        props.showAlert("Text Cleared!", "Success");
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
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed", "success");
        }
        

    const [text, setText] = useState('');
    // setText("Your Text here");  //Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="mybox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={ handleOnChange } style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ handleUpCLick }>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ handleLowCLick }>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ handleclearCLick }>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ handleTitleCase }>Title case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ handleCopy }>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ handleExtraSpaces }>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preveiew</h2>
            <p>{text.length>0 ? text:"Enter Something First"}</p>

        </div>
        </>
    );
}
