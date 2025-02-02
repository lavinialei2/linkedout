import React from 'react';
import './Panel.css';

const Panel = ({ adventureId }) => {
  const adventure = adventureId ? adventures[adventureId] : null;

  if (!adventure) return null;

  return (
    <div className="panel">
      <h1>{adventure.name}</h1>
      <div>
        {adventure.stops.map((stop) => (
          <div key={stop.id}>
            <h3>{stop.name}</h3>
            <p>{stop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panel;
