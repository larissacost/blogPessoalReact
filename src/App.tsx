import React from 'react';
import './App.css';
import NavBar from './components/estaticos/navbar/NavBar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
