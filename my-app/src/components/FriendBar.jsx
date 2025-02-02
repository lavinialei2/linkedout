import React from 'react';
import './FriendBar.css';
import { friends } from '../data';

const FriendBar = ({ onSelectAdventure }) => {
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
    </div>
  );
};

export default FriendBar;
