import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineDelete } from 'react-icons/ai';

import { fetchUsers, removeUser, useAppSelector } from '../store';
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
  const [doRemoveUser] = useThunk(removeUser);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const { data } = useAppSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserRemove = (user: UserType) => {
    window.confirm(
      `Are you sure you want to remove ${user.firstName} ${user.lastName}`,
    ) && doRemoveUser(user.id);
  };

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
      render: (user: UserType) => {
        return (
          <TableContainer key={user.id}>
            <AiOutlineDelete onClick={() => handleUserRemove(user)} />
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: '100%',
        transition: { duration: 1.2 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      {content}
    </motion.div>
  );
}

const getFilteredUsers = (users: UserType[], searchTerm: string) => {
  return users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

export default UserList;
