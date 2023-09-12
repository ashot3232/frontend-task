import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, useAppSelector } from '../store';

import { UserType } from '../types';
import { useThunk } from '../hooks/useThunk';

function UserList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const { data } = useAppSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  let content;
  if (isLoadingUsers) {
    content = <div>Loading...</div>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user: UserType) => {
      return (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.firstName} {user.lastName}
          </Link>
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
}

export default UserList;
