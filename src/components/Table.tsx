import React, { FC } from 'react';
import styled from 'styled-components';
import { UserType } from '../types';

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin-top: 40px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

interface TableProps {
  data: UserType[];
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <div>
      <TableContainer>
        <StyledTable>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
          {data.map((user) => {
            return (
              <TableRow>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            );
          })}
        </StyledTable>
      </TableContainer>
    </div>
  );
};

export default Table;
