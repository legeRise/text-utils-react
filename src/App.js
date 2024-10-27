import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const toggleTheme = (theme) => {
    removeThemes()
    if (theme === 'dark') {
      console.log(theme)
      setTheme('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Theme Enabled Successfully!","success")
    } 

    else if ( theme === 'primary') {
      console.log(theme)
      setTheme('primary')
      document.body.classList.add('bg-primary')
      showAlert("Blue Theme Enabled Successfully!","success")
    }
    else if (  theme === 'success') {
      console.log(theme)
      setTheme('success')
      document.body.classList.add('bg-success')
      showAlert("Green Theme Enabled Successfully!","success")
    }
    else if ( theme === 'danger') {
      console.log(theme)
      setTheme('danger')
      document.body.classList.add('bg-danger')
      showAlert("Red Theme Enabled Successfully!","success")
    }
    else if ( theme === 'light'){
      console.log(theme)
      setTheme('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Theme Enabled Successfully!","success")
    } 
  }


  const removeThemes = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
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
   <BrowserRouter>
   <Navbar title="TextUtils" theme={theme} toggleTheme={toggleTheme} />  
   <Alert alert={alert} />
    <Routes>
     <Route path='/' element={<TextForm heading="Enter Text to Analyze" theme={theme} showAlert={showAlert} />} />
     <Route path='/about' element={<About/>} />
    </Routes>
   </BrowserRouter>
  </>
  )
}

export default App;
