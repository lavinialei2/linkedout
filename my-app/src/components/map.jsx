import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { adventures } from '../data/adventures';

const Map = ({ selectedAdventure }) => {
  const [adventureData, setAdventureData] = useState(null);

  React.useEffect(() => {
    if (selectedAdventure) {
      setAdventureData(adventures[selectedAdventure]);
    }
  }, [selectedAdventure]);

  return (
    <MapContainer
      center={[34.0522, -118.2437]} 
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {adventureData && (
        <>
          <Polyline positions={adventureData.route} color="blue" weight={4} />

          {adventureData.stops.map((stop) => (
            <Marker key={stop.id} position={stop.coordinates}>
              <Popup>
                <b>{stop.name}</b>
                <p>Type: {stop.type}</p>
              </Popup>
            </Marker>
          ))}
        </>
      )}
    </MapContainer>
  );
};

export default Map;
