import { Accordion } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomizedAccordions from './Components/Accordion/Accordion';

import ImgMediaCard from './Components/Cards/Cards';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Image from './Components/Image/Image';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';



function App() {
  return (
    <div >
      <Header/> 
      <Routes>
     
     <Route path='/' element={<Home/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/image' element={<Image/>} />
     <Route path='/CustomizedAccordions' element={<CustomizedAccordions/>} />
     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;



