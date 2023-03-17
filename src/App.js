import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Greetings from './components/Greetings';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import { Routes, Route, Link} from 'react-router-dom';




  function App(){

    return (

      <>
      <nav>

        <Link to="/" >Homepage</Link> 
        <Link to="/about-me" >About me</Link> 
       
      </nav>

      <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/about-me' element = {<AboutMe />} />
      </Routes>

    
        

        
      </>
    );

  }


export default App;
