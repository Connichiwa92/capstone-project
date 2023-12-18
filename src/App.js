import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
// import Header from './components/Header';
import Footer from './components/Footer';
// import Menu from './components/Menu';
import Booking from './components/Booking';
import Homepage from './components/Homepage';


function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path ="/" element={<Homepage/>}/>
        <Route path ="/booking" element={<Booking/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
