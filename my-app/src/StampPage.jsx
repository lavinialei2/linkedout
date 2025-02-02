import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './StampPage.css';
import mapIcon from '/icons/mapicon.png';

const StampPage = () => {
  const navigate = useNavigate(); 

  const handleMapClick = () => {
    navigate('/map'); 
  };

  return (
    <div className="app-container">
      <button className="map-button" onClick={handleMapClick}>
        <img src={mapIcon} alt="Map Icon" className="map-icon" />
      </button>
      <img
        src={'/icons/stamp.png'}
        alt="Stamp-page"
        className="image"
      />
    </div>
  );
};

export default StampPage;
