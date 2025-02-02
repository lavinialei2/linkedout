import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Map.css"
import { useMapboxDirections } from "./hooks/useMapboxDirections"

const isValidCoordinate = (coord) => {
  return Array.isArray(coord) && coord.length === 2 && typeof coord[0] === "number" && typeof coord[1] === "number"
}

const Map = ({ selectedAdventure, adventures }) => {
  const [highlightedAdventure, setHighlightedAdventure] = useState(null)

  const darkRainbowColors = ["#8B0000", "#FF8C00", "#9B870C", "#006400", "#00008B", "#4B0082", "#9400D3"]

  const PanToAdventure = ({ coordinates }) => {
    const map = useMap()
    useEffect(() => {
      if (coordinates && coordinates.length > 0) {
        const bounds = coordinates.map(([lat, lng]) => [lat, lng])
        map.fitBounds(bounds, { padding: [50, 50] })
      }
    }, [coordinates, map])
    return null
  }

  const adventureRoutes = Object.entries(adventures).reduce((acc, [id, adventure]) => {
    const { route, isLoading, error } = useMapboxDirections(adventure.route)
    acc[id] = { route, isLoading, error }
    return acc
  }, {})

  useEffect(() => {
    if (selectedAdventure) {
      setHighlightedAdventure(adventures[selectedAdventure])
    }
  }, [selectedAdventure, adventures])

  console.log("Adventure routes:", adventureRoutes)

  return (
    <MapContainer center={[34.0522, -118.2437]} zoom={10} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {Object.entries(adventures).map(([id, adventure], index) => {
        const color = darkRainbowColors[index % darkRainbowColors.length]
        const isSelected = highlightedAdventure?.name === adventure.name
        const opacity = isSelected ? 1 : 0.7

        const { route, isLoading, error } = adventureRoutes[id]

        console.log(`Rendering adventure ${id}:`, { route, isLoading, error })

        return (
          <React.Fragment key={adventure.name}>
            {isLoading && <p>Loading route for {adventure.name}...</p>}
            {error && (
              <p>
                Error loading route for {adventure.name}: {error}
              </p>
            )}
            {!isLoading && !error && route && route.length > 0 && (
              <>
                {route.every(isValidCoordinate) ? (
                  <Polyline
                    positions={route}
                    pathOptions={{
                      color: isSelected ? "#ff000d" : color,
                      weight: isSelected ? 5 : 3,
                      opacity: opacity,
                    }}
                  />
                ) : (
                  <p>Invalid route data for {adventure.name}</p>
                )}
              </>
            )}
            {adventure.stops.map((stop) => (
              <Marker key={stop.id} position={stop.coordinates}>
                <Popup>
                  <div className="popup-content">
                    <img
                      src={stop.image || "/placeholder.svg?height=150&width=250"}
                      alt={stop.name}
                      className="popup-image"
                    />
                    <h2>{stop.name}</h2>
                    <p>{stop.description}</p>
                    <div className="popup-tags">
                      {stop.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </React.Fragment>
        )
      })}

      {highlightedAdventure && <PanToAdventure coordinates={highlightedAdventure.route} />}
    </MapContainer>
  )
}

export default Map

