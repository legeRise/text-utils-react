import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpperClick = () => {
        let uppertext = text.toUpperCase();
        setText(uppertext)
    }

    const handleLowerClick = () => {
        let lowertext = text.toLowerCase();
        setText(lowertext)
    }

    const handleClearClick = () => {
        setText("")
    }

    const handleTitleClick = () => {
        let wordsArray = text.split(" ");
        let titletext = ""
        wordsArray.forEach(word => {
            if (word.length > 2) {
                let capital= word[0].toUpperCase()
                let new_word = capital + word.slice(1);
                titletext = titletext + new_word + " "
            }
            else{
                titletext = titletext + word + " "
            }
        });
        setText(titletext)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <h1 style={{'color' : props.mode === 'dark'? 'white':'black'}}>{props.heading}</h1>
            <div>
                <div className="mb-1">
                    <textarea className="form-control" id="textbox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
            </div>
            <div className="container d-flex justify-content-end" >
                <p className='mx-3' style={{'color' : props.mode === 'dark'? 'white':'black'}}> Number of Characters: {text.length}</p>
                <p style={{'color' : props.mode === 'dark'? 'white':'black'}}> Number of Words: {text.split(" ").length -1}</p>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Conver to TitleCase</button>
        </>
    )
}

export default TextForm
