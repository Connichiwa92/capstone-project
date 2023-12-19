import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
// import Header from './components/Header';
import Footer from './components/Footer';
// import Menu from './components/Menu';
// import BookingPage from './components/BookingPage';
// import Homepage from './components/Homepage';
import Main from './components/Main';


function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
