import { useState } from "react"
import { adventures } from "../data"
import { ChevronLeft } from "lucide-react"

const AdventurePanel = ({ isOpen, onClose, onSelectAdventure, selectedAdventure }) => {
  const [viewingAdventure, setViewingAdventure] = useState(null)

  const getFirstStopImage = (adventure) => {
    if (adventure.stops && adventure.stops.length > 0 && adventure.stops[0].image) {
      return adventure.stops[0].image
    }
    return "/placeholder.svg?height=80&width=80" // Fallback image
  }

  const handleAdventureClick = (id) => {
    setViewingAdventure(adventures[id])
    onSelectAdventure(id)
  }

  const handleBackClick = () => {
    setViewingAdventure(null)
  }

  const renderTags = (tags) => (
    <div className="adventure-tags">
      {tags &&
        tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
    </div>
  )

  const renderAdventureList = () => (
    <>
      <div className="adventure-panel-header">
        <h2>Adventures</h2>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="adventure-items">
        {Object.entries(adventures).map(([id, adventure]) => (
          <div
            key={id}
            className={`adventure-item ${selectedAdventure === id ? "selected" : ""}`}
            onClick={() => handleAdventureClick(id)}
          >
            <img
              src={getFirstStopImage(adventure) || "/placeholder.svg"}
              alt={`First stop of ${adventure.name}`}
              className="adventure-image"
            />
            <div className="adventure-details">
              <h3>{adventure.name}</h3>
              <p>{adventure.description}</p>
              {renderTags(adventure.tags)}
            </div>
          </div>
        ))}
      </div>
    </>
  )

  const renderAdventureDetails = () => (
    <>
      <div className="adventure-panel-header">
        <button className="back-button" onClick={handleBackClick}>
          <ChevronLeft size={24} />
        </button>
        <h2>{viewingAdventure.name}</h2>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="adventure-items">
        {viewingAdventure.stops.map((stop) => (
          <div key={stop.id} className="stop-item">
            <img src={stop.image || "/placeholder.svg?height=60&width=60"} alt={stop.name} className="stop-image" />
            <div className="stop-details">
              <h3>{stop.name}</h3>
              <p>{stop.description}</p>
              {renderTags(stop.tags)}
            </div>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className={`adventure-panel ${isOpen ? "open" : ""}`}>
      {viewingAdventure ? renderAdventureDetails() : renderAdventureList()}
    </div>
  )
}

export default AdventurePanel

