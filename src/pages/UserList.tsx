import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

import { fetchUsers, useAppSelector } from '../store';
import Table from '../components/Table';
import { UserType } from '../types';
import { useThunk } from '../hooks/useThunk';

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function UserList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const { data } = useAppSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const columns = [
    {
      label: 'Name',
      key: 'name',
      sortValue: ({ firstName, lastName }: UserType) =>
        `${firstName} ${lastName}`,
      render: ({ id, firstName, lastName }: UserType) => {
        return (
          <Link to={id}>
            {firstName} {lastName}
          </Link>
        );
      },
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Age',
      key: 'age',
      sortValue: ({ age }: UserType) => age,
    },
    {
      label: 'Action',
      key: 'action',
      render: ({ id }: UserType) => {
        return (
          <TableContainer key={id}>
            <AiOutlineDelete />
          </TableContainer>
        );
      },
    },
  ];

  let content;
  if (isLoadingUsers) {
    content = <div>Loading...</div>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = <Table data={data} columns={columns} />;
  }

  return <div>{content}</div>;
}

export default UserList;
