import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App(props) {
  return (  
    <>
      <div className="App">
        <Link to="tel:010-0000-0000">010-0000-0000</Link>
      </div>
    </>
  );
}

export default App;
