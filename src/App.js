import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Booking from './components/Booking';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Menu/>
      <Footer/>
      <Booking/>
    </>
  );
}

export default App;
