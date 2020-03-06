import React from 'react';
import './App.css';
import './EZContentDemo/EZContentDemo.js'
import EZContentDemo from './EZContentDemo/EZContentDemo';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" />
      <header className="App-header">
        <EZContentDemo />
      </header>
    </div>
  );
}

export default App;
