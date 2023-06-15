import React from 'react';
import logo from './logo.svg';
import './App.css';
import CameraDisplay from './components/CameraDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CameraDisplay />
      </header>
    </div>
  );
}

export default App;
