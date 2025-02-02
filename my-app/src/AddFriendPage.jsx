import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddFriendPage.css";

const suggestedFriends = [
  {
    id: 1,
    name: "Alice",
    tags: ["concerts", "Los Angeles", "wheelchair accessible"],
    recentAdventure: "Walt Disney Concert Hall",
    img: "icons/friend1.png",
  },
  {
    id: 2,
    name: "Bob",
    tags: ["outdoors", "beach"],
    recentAdventure: "Venice Beach",
    img: "icons/friend2.png",
  },
  {
    id: 3,
    name: "Charlie",
    tags: ["restaurant", "japanese", "women-owned"],
    recentAdventure: "Mitsuwa Marketplace",
    img: "icons/friend4.png",
  },
];

const AddFriendPage = () => {
  const [friendName, setFriendName] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleInviteFriend = () => {
    if (selectedFriend) {
      console.log("Invited Friend:", selectedFriend.name);
      setConfirmed(true);

      setTimeout(() => {
        setConfirmed(false);
        setSelectedFriend(null);
      }, 1500);
    }
  };

  const handleCloseClick = () => {
    navigate("/map");
  };

  const filteredFriends = suggestedFriends.filter((friend) =>
    friend.name.toLowerCase().includes(friendName.toLowerCase()) ||
    friend.tags.some((tag) => tag.toLowerCase().includes(friendName.toLowerCase()))
  );

  return (
    <div className="add-friend-container">
      <div className="friend-card">
        <header className="friend-header">
          <h2>Invite a Friend</h2>
        </header>

        {confirmed && (
          <div className="success-popup">
            <p>Invitation Sent!</p>
          </div>
        )}

        <div className="friend-form">
          <input
            type="text"
            placeholder="Search by name or keywords..."
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            className="friend-input"
          />
        </div>

        <div className="suggested-friends">
          <h3>Suggested Friends</h3>
          {filteredFriends.map((friend) => (
            <div
              key={friend.id}
              className={`suggested-friend ${
                selectedFriend?.id === friend.id ? "selected" : ""
              }`}
              onClick={() => setSelectedFriend(friend)}
            >
              <img src={friend.img} alt={friend.name} className="friend-icon" />
              <div className="friend-info">
                <h4>{friend.name}</h4>
                <p>Recent Adventure: {friend.recentAdventure}</p>
                <div className="tags">
                  {friend.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="friend-actions">
          <button className="close-btn" onClick={handleCloseClick}>
            Close
          </button>
          <button
            className="submit-btn"
            onClick={handleInviteFriend}
            disabled={!selectedFriend}
          >
            {confirmed ? "Confirmed" : "Invite Friend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFriendPage;
