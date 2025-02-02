import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Map from './components/Map';
import FriendBar from './components/FriendBar';
import './MapPage.css';
import stampIcon from '/icons/stampbookicon.png';
import logo from '/icons/linkedout.png';


const MapPage = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const handleSelectAdventure = (adventureId) => {
    setSelectedAdventure(adventureId);
  };


  const navigate = useNavigate(); 

  const handleStampClick = () => {
    navigate('/stampbook'); 
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="menu-icon" onClick={handleStampClick}>
          <img src={stampIcon} alt="Stamp Icon" className="stamp-icon" />
        </div>
        <img src={logo} alt="Logo" className="logo-icon" />
      </header>
      <FriendBar onSelectAdventure={handleSelectAdventure} />
      <div className="app-content">
        <Map selectedAdventure={selectedAdventure} />
      </div>
    </div>
  );
};

export default MapPage;
