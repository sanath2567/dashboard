import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onSelect }) => {
  return (
    <div className="user-card" onClick={() => onSelect(user)}>
      <img src={user.photoUrl} alt={user.name} />
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;
