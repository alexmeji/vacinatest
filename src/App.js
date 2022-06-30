import React, { useState, useEffect } from 'react';
import './App.css';
import ListPlaces from './ListPlaces';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListPlaces />
      </header>
    </div>
  );
}

export default App;
