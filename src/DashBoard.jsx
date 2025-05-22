import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import UserCard from './components/UserCard';
import UserDetail from './components/UserDetail';
import Login from './components/Login';  // import login


const DashBoard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('HR');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) return; // don't fetch if not logged in

    axios
      .get(`http://localhost:8080/api/users/role/${selectedRole}`)
      .then((response) => {
        setUsers(response.data);
        setSelectedUser(null);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setUsers([]);
      });
  }, [selectedRole, isLoggedIn]);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app-container">
      <div className="app-header">AVR Dashboard</div>
      <div className="main">
        <Sidebar onRoleSelect={setSelectedRole} selectedRole={selectedRole} />
        <div className="content">
          {selectedUser ? (
            <UserDetail user={selectedUser} />
          ) : (
            <div className="user-list">
              {users.map((user) => (
                <UserCard key={user.id} user={user} onSelect={setSelectedUser} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

