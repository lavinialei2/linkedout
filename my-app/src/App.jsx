import React, { useState } from 'react';
import Map from './components/map';
import FriendBar from './components/FriendBar';
import './App.css';

const App = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const handleSelectAdventure = (adventureId) => {
    setSelectedAdventure(adventureId);
  };

  return (
    <div className="app-container">
      <header className="app-header">🌍 LinkedOut</header>
      <FriendBar onSelectAdventure={handleSelectAdventure} />
      <div className="app-content">
        <Map selectedAdventure={selectedAdventure} />
      </div>
    </div>
  );
};

export default App;
