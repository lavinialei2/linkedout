import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Map from "./components/Map"
import FriendBar from "./components/FriendBar"
import AdventurePanel from "./components/AdventurePanel"
import "./MapPage.css"
import stampIcon from "/icons/stampbookicon.png"
import logo from "/icons/linkedout.png"
import listIcon from "/icons/button.png"

const MapPage = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null)
  const [isAdventurePanelOpen, setIsAdventurePanelOpen] = useState(false)
  const navigate = useNavigate()

  const handleSelectAdventure = (adventureId) => {
    setSelectedAdventure(adventureId)
    // Remove this line to keep the panel open when an adventure is selected
    // setIsAdventurePanelOpen(false);
  }

  const handleStampClick = () => {
    navigate("/stampbook")
  }

  const toggleAdventurePanel = () => {
    setIsAdventurePanelOpen(!isAdventurePanelOpen)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="menu-icon" onClick={handleStampClick}>
          <img src={stampIcon || "/placeholder.svg"} alt="Stamp Icon" className="stamp-icon" />
        </div>
        <img src={logo || "/placeholder.svg"} alt="Logo" className="logo-icon" />
      </header>
      <FriendBar onSelectAdventure={handleSelectAdventure} />
      <div className="app-content">
        <Map selectedAdventure={selectedAdventure} />
        <AdventurePanel
          isOpen={isAdventurePanelOpen}
          onClose={() => setIsAdventurePanelOpen(false)}
          onSelectAdventure={handleSelectAdventure}
          selectedAdventure={selectedAdventure}
        />
        <button className="floating-button" onClick={toggleAdventurePanel}>
          <img src={listIcon || "/placeholder.svg?height=24&width=24"} alt="List Icon" className="list-icon" />
        </button>
      </div>
    </div>
  )
}

export default MapPage

