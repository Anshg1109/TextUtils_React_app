import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCLick = ()=>{
        // console.log("Uppercasewas clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // setText("Your Text here");  //Correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="mybox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={ handleOnChange } id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={ handleUpCLick }>Convert to Uppercase</button>
        </div>
    );
}
