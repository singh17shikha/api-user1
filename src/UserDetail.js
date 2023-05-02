import React from 'react';
import './UserDetail.css';

const UserDetail = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.first_name} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;
