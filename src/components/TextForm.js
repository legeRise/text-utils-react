import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('')


    console.log(props.theme)


    const checkIfEmpty = () => {
        if (text.trim() === "") {
            props.showAlert("Please write something", "warning");
            return true;
        }
        return false;
      
    }
    

    const handleUpperClick = () => {
        if (checkIfEmpty()) return;
        let uppertext = text.toUpperCase();
        setText(uppertext)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLowerClick = () => {
        if (checkIfEmpty()) return;
        let lowertext = text.toLowerCase();
        setText(lowertext)
        props.showAlert("Converted to LowerCase","success")
    }

    const handleClearClick = () => {
    if (checkIfEmpty()) return;
        setText("")
        props.showAlert("Text Cleared!","success")
        
    }

    const handleTitleClick = () => {
        if (checkIfEmpty()) return;
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
        props.showAlert("Converted to TitleCase","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const theme_colors = {
        light: { color: 'black', backgroundColor : 'white' },
        dark: { color: 'white', backgroundColor : '#cff4fc' },
        primary: { color: 'white', backgroundColor : 'white' },
        success: { color: 'white', backgroundColor : 'white' },
        danger: { color: 'white', backgroundColor : 'white' }
      };
      

    return (
        <>
        <div className='container my-3'>
            <h1 style={{'color' : theme_colors[props.theme].color}}>{props.heading}</h1>
            <div>
                <div className="mb-1">
                    <textarea className="form-control" id="textbox" rows="8" value={text} onChange={handleOnChange} 
                    style={{'backgroundColor' : theme_colors[props.theme].backgroundColor}}></textarea>
                </div>
            </div>
            <div className="container d-flex justify-content-end" >
                <p className='mx-3' style={{'color' : theme_colors[props.theme].color}}> Number of Characters: {text.length}</p>
                <p style={{'color' : theme_colors[props.theme].color}}> Number of Words: {text.trim().split(/\s+/).filter(word => word !== "").length}</p>
            </div>                                      

            <button className={`btn btn-${props.theme === 'light'? 'dark' : 'light'} mx-2 my-1`} onClick={handleUpperClick}>Convert to UpperCase</button>
            <button className={`btn btn-${props.theme === 'light'? 'dark' : 'light'} mx-2 my-1`} onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className={`btn btn-${props.theme === 'light'? 'dark' : 'light'} mx-2 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-${props.theme === 'light'? 'dark' : 'light'} mx-2 my-1`} onClick={handleTitleClick}>Conver to TitleCase</button>
        </div>
        </>
    )
}

export default TextForm
