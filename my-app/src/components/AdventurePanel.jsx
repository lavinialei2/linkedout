import { useState } from "react"
import { ChevronLeft, Star, StarHalf, ChevronDown, ChevronUp } from "lucide-react"

const AdventurePanel = ({ isOpen, onClose, onSelectAdventure, selectedAdventure, adventures }) => {
  const [viewingAdventure, setViewingAdventure] = useState(null)
  const [expandedStops, setExpandedStops] = useState({})

  const getFirstStopImage = (adventure) => {
    if (adventure.stops && adventure.stops.length > 0 && adventure.stops[0].image) {
      return adventure.stops[0].image
    }
    return "/placeholder.svg?height=80&width=80" // Fallback image
  }

  const handleAdventureClick = (id) => {
    setViewingAdventure(adventures[id])
    setExpandedStops({})
    onSelectAdventure(id)
  }

  const handleBackClick = () => {
    setViewingAdventure(null)
    setExpandedStops({})
  }

  const toggleStopExpansion = (stopId) => {
    setExpandedStops((prev) => ({
      ...prev,
      [stopId]: !prev[stopId],
    }))
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

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    return (
      <div className="rating" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <Star fill="orange" key={i} className="star filled" size={16} />
        ))}
        {hasHalfStar && <StarHalf className="star filled" size={16} />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="star" size={16} />
        ))}
        <span className="rating-text">{rating.toFixed(1)}</span>
      </div>
    )
  }

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
            <div className="stop-header">
              <img src={stop.image || "/placeholder.svg?height=60&width=60"} alt={stop.name} className="stop-image" />
              <div className="stop-details">
                <h3>{stop.name}</h3>
                <p>{stop.description}</p>
                {renderTags(stop.tags)}
                <button className="see-more-button" onClick={() => toggleStopExpansion(stop.id)}>
                  {expandedStops[stop.id] ? (
                    <>
                      See less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      See more <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
            {expandedStops[stop.id] && (
              <div className="expanded-content">
                {renderRating(stop.rating)}
                <div className="comments-section">
                  <h4>Comments</h4>
                  {stop.comments && stop.comments.length > 0 ? (
                    <ul className="comments-list">
                      {stop.comments.map((comment, index) => (
                        <li key={index} className="comment">
                          {comment}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Render the Routes List */}
        <div className="routes-section">
          <h4>Bus routes taken:</h4>
          <ul className="routes-list">
            {viewingAdventure.routes.map((route, index) => (
              <li key={index} className="route-item">
                <span className="route-text">{route}</span>
                <hr className="route-line" />
              </li>
            ))}
          </ul>
        </div>
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

