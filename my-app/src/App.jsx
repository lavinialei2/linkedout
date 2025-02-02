// src/App.jsx
import React from 'react';
import Map from './components/Map';
import FriendBar from './components/FriendBar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">🌍 LinkedOut</header>
      <FriendBar />
      <div className="app-content">
        <Map />
      </div>
    </div>
  );
};

export default App;
