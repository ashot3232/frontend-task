import React, { useEffect, useState } from 'react';
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 17px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 20%;
  background: #e9ecef;
  margin-top: 30px;
  margin-left: 5%;
`;

function UserList() {
  const [searchTerm, setSearchTerm] = useState('');
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
    content = (
      <Wrapper>
        <SearchInput
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Table data={getFilteredUsers(data, searchTerm)} columns={columns} />
      </Wrapper>
    );
  }

  return <div>{content}</div>;
}

const getFilteredUsers = (users: UserType[], searchTerm: string) => {
  return users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

export default UserList;
