import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { adventures } from '../data';
import './Map.css';

const Map = ({ selectedAdventure }) => {
  const [highlightedAdventure, setHighlightedAdventure] = useState(null);

  const PanToAdventure = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
      if (coordinates && coordinates.length > 0) {
        const bounds = coordinates.map(([lat, lng]) => [lat, lng]);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }, [coordinates, map]);
    return null;
  };

  useEffect(() => {
    if (selectedAdventure) {
      setHighlightedAdventure(adventures[selectedAdventure]);
    }
  }, [selectedAdventure]);

  return (
    <MapContainer
      center={[34.0522, -118.2437]}
      zoom={13}
      style={{ width: '100%', height: '100%' }} /* Full height within .app-content */
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {Object.values(adventures).map((adventure) => (
        <React.Fragment key={adventure.name}>
          <Polyline
            positions={adventure.route}
            color={highlightedAdventure?.name === adventure.name ? 'red' : 'blue'}
            weight={highlightedAdventure?.name === adventure.name ? 5 : 3}
          />
          {adventure.stops.map((stop) => (
            <Marker key={stop.id} position={stop.coordinates}>
              <Popup>
                <div className="popup-content">
                  <img src={stop.image} alt={stop.name} className="popup-image" />
                  <h2>{stop.name}</h2>
                  <p>{stop.description}</p>
                  <div className="popup-tags">
                    {stop.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </React.Fragment>
      ))}

      {highlightedAdventure && <PanToAdventure coordinates={highlightedAdventure.route} />}
    </MapContainer>
  );
};

export default Map;
