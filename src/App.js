import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';


function App() {

   const [mode, SetMode] = useState('light');
 
   const toggleMode = ()=> {

    if(mode === 'light') {
      SetMode('dark'); 
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';

    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

   }


  return (
<>
<Navbar tittle="My Web" aboutText="About Us" mode={mode}  toggleMode={toggleMode} />
<div className="container my-3">
<Textform heading="Enter your text for analyze" />
</div>
<About />
</>
  );
}

export default App;
