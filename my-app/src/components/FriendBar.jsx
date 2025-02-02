import React from 'react';
import './FriendBar.css';

const friends = [
  { id: 1, name: 'Friend 1', img: '/public/icons/friend1.png', adventureId: 'adventure1' },
  { id: 2, name: 'Friend 2', img: '/public/icons/friend2.png', adventureId: 'adventure2' },
];

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
