import React from 'react';
import './FriendBar.css';
import { useNavigate } from 'react-router-dom'; 

import { friends } from '../data';

const FriendBar = ({ onSelectAdventure }) => {
  const navigate = useNavigate(); 

  const handleAddFriend = () => {
    navigate('/addFriend'); 
  };

  return (
    <div className="friend-bar">
      {friends.map((friend) => (
        <div
          key={friend.id}
          className="friend-icon"
          onClick={() => onSelectAdventure(friend.adventureId)}
        >
          <img src={friend.img} alt={friend.name} />
        </div>
      ))}

      <button className="add-friend-btn" onClick={handleAddFriend}>
        +
      </button>
    </div>
  );
};

export default FriendBar;
