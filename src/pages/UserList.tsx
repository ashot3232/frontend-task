import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../api';
import { UserType } from '../types';

function UserList() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    fetchUserData();
  }, []);

  const renderedUsers = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/users/${user.id}`}>
          {user.firstName} {user.lastName}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <ul>{renderedUsers}</ul>
    </div>
  );
}

export default UserList;
