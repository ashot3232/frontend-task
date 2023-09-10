import React from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 1</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserList;
