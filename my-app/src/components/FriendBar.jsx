import React from 'react';
import './FriendBar.css';

const friends = [
  { id: 1, name: 'Friend 1', img: '/assets/icons/friend1.png' },
  { id: 2, name: 'Friend 2', img: '/assets/icons/friend2.png' },
  { id: 3, name: 'Friend 3', img: '/assets/icons/friend3.png' },
  { id: 4, name: 'Friend 4', img: '/assets/icons/friend4.png' },
  { id: 5, name: 'Friend 5', img: '/assets/icons/friend5.png' },
  { id: 6, name: 'Friend 6', img: '/assets/icons/friend6.png' },
];

const FriendBar = () => {
  return (
    <div className="friend-bar">
      {friends.map((friend) => (
        <div key={friend.id} className="friend-icon">
          <img src={friend.img} alt={friend.name} />
        </div>
      ))}
    </div>
  );
};

export default FriendBar;
