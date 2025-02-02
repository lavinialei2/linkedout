import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { adventures } from '../data';
import './Map.css';

const Map = ({ selectedAdventure }) => {
  const [highlightedAdventure, setHighlightedAdventure] = useState(null);

  // Darker versions of the rainbow colors
  const darkRainbowColors = [
    '#8B0000', // Dark Red
    '#FF8C00', // Dark Orange
    '#9B870C', // Dark Yellow
    '#006400', // Dark Green
    '#00008B', // Dark Blue
    '#4B0082', // Dark Indigo
    '#9400D3', // Dark Violet
  ];

  const PanToAdventure = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
      if (coordinates && coordinates.length > 0) {
        const bounds = coordinates.map(([lat, lng]) => [lat, lng]);
        map.fitBounds(bounds, { padding: [5, 5] });
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
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {Object.values(adventures).map((adventure, index) => {
        const color = darkRainbowColors[index % darkRainbowColors.length]; // Cycle through dark rainbow colors
        return (
          <React.Fragment key={adventure.name}>
            <Polyline
              positions={adventure.route}
              color={highlightedAdventure?.name === adventure.name ? '#8B0000' : color} // Highlight selected route in dark red
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
        );
      })}

      {highlightedAdventure && <PanToAdventure coordinates={highlightedAdventure.route} />}
    </MapContainer>
  );
};

export default Map;
