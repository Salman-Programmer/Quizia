import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Copyright from './components/Copyright';


function App() {
  return (
    <div className="App">
      <h1>Quizia</h1>
      <Quiz />
      <Copyright />
    </div>
  );
}

export default App;
