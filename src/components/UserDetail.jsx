import React from 'react';
import './UserDetail.css';

const UserDetail = ({ user }) => {
  return (
    <div className="user-detail">
      <img src={user.photoUrl} alt={user.name} />
      <h2>{user.name}</h2>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default UserDetail;
