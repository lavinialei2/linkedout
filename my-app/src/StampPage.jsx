import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StampPage.css';

const StampPage = () => {

  return (
    <div className="app-container">
        <img
          src={'/icons/stamp.png'}
          alt={`Stamp-page`}
          className="slide-image"
        />
    </div>
  );
};

export default StampPage;
