import React  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Techstack from './Pages/Techstack';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/tech-stack' element={<Techstack/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
      <div className='App'>
        <Navbar/>
  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
