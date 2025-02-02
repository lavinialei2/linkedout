import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Map from "./components/Map"
import FriendBar from "./components/FriendBar"
import AdventurePanel from "./components/AdventurePanel"
import "./MapPage.css"
import stampIcon from "/icons/stampbookicon.png"
import listIcon from "/icons/button.png"
import { adventures } from "./data"
import { Search } from "lucide-react"

const MapPage = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null)
  const [isAdventurePanelOpen, setIsAdventurePanelOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredAdventures, setFilteredAdventures] = useState(adventures)
  const navigate = useNavigate()

  const handleSelectAdventure = (adventureId) => {
    setSelectedAdventure(adventureId)
  }

  const handleStampClick = () => {
    navigate("/stampbook")
  }

  const toggleAdventurePanel = () => {
    setIsAdventurePanelOpen(!isAdventurePanelOpen)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const filtered = Object.entries(adventures).filter(([id, adventure]) => {
      const tags = adventure.stops.flatMap((stop) => stop.tags || [])
      return tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    setFilteredAdventures(Object.fromEntries(filtered))
  }, [searchTerm])

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="menu-icon" onClick={handleStampClick}>
          <img src={stampIcon || "/placeholder.svg"} alt="Stamp Icon" className="stamp-icon" />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by tag, location, people..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <Search className="search-icon" size={20} />
        </div>
      </header>
      <FriendBar onSelectAdventure={handleSelectAdventure} />
      <div className="app-content">
        <Map selectedAdventure={selectedAdventure} adventures={filteredAdventures} />
        <AdventurePanel
          isOpen={isAdventurePanelOpen}
          onClose={() => setIsAdventurePanelOpen(false)}
          onSelectAdventure={handleSelectAdventure}
          selectedAdventure={selectedAdventure}
          adventures={filteredAdventures}
        />
        <button className="floating-button" onClick={toggleAdventurePanel}>
          <img src={listIcon || "/placeholder.svg?height=24&width=24"} alt="List Icon" className="list-icon" />
        </button>
      </div>
    </div>
  )
}

export default MapPage

