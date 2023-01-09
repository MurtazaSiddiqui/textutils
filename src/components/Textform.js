import React, {useState} from 'react'

export default function Textform(props) {
const handleUpClick = (e)=>{
    // console.log('you have clicked upcase' + text);
    e.preventDefault();
    let newText = text.toLocaleUpperCase();
    setText(newText);
}

const handleOnChange = (e)=>{
    console.log('you have clicked On Change');
    setText(e.target.value);
}

const handleClearClick = (e)=>{
  let newText = "";
  e.preventDefault();
  setText(newText);
}

const handleLowClick = (e)=>{
  e.preventDefault();
  let newLowText = text.toLowerCase();
  setText(newLowText);
}

    const [text, setText] = useState('Enter your text here');
  return (
    <>
    <div  className='container'>
        <h1>{props.heading}</h1>
      <form action="">
      <div className="form-group">
    <textarea className="form-control" onChange={handleOnChange}  value={text} id="exampleFormControlTextarea1" rows="7"></textarea>
  </div>
  <button className='btn btn-primary' onClick={handleUpClick}>Convert to upper case</button>
  <button className="btn btn-success low-btn" onClick={handleLowClick}>Convert to lower case</button>
  <button className="btn btn-danger btn-clear mx-3" onClick={handleClearClick}>Clear Text</button>

      </form>
    </div>

    <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  )
}
