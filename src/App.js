import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
       setMode('dark')
       document.body.style.backgroundColor = '#042743'
       showAlert("Dark Mode Enabled Successfully!","success")
    } 
    else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light Mode Enabled Successfully!","success")
    } 
    }
  

  const showAlert = (message,type) => {
    setAlert({
      type : type,
      message : message
    })

    setTimeout(() => {
      setAlert("")
    }, 1500);
    
  }
  
  
  return (
  <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />    
   <Alert alert={alert} />
   <div className="container my-3"><TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} /></div>
   {/* <About/> */}

  </>
  )
}

export default App;
