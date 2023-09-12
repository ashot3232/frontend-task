import React, { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

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

const SortableTableHeader = styled(TableHeader)`
  cursor: pointer;

  &:hover {
    background: #04aa6de0;
  }
`;

const SortableTableHeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const IconWrapper = styled.div`
  display: block;
  margin-right: 10px;
`;

interface Column {
  key: string;
  label: string;
  sortValue?(item: any): any;
  render?(item: any): React.ReactNode;
  header?(): React.ReactNode;
}

interface TableProps {
  data: any[];
  columns: Column[];
}

const Table: FC<TableProps> = ({ data, columns }) => {
  const [sortOrder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedColumns = columns.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <SortableTableHeader
          key={column.key}
          onClick={() => handleClick(column.label)}
        >
          <SortableTableHeaderContent>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </SortableTableHeaderContent>
        </SortableTableHeader>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = columns.find(
      (column) => column.label === sortBy,
    ) as Column;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue && sortValue(a);
      const valueB = sortValue && sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      }

      return (valueA - valueB) * reverseOrder;
    });
  }

  const renderedRows = sortedData.map((item) => {
    return (
      <TableRow key={item.id}>
        {columns.map(({ key, render }) => {
          if (!render) {
            return <TableCell key={key}>{item[key as string]}</TableCell>;
          }
          return <TableCell key={key}>{render(item)}</TableCell>;
        })}
      </TableRow>
    );
  });

  const renderedHeaders = updatedColumns.map(({ label, header }) => {
    if (header) {
      return <Fragment key={label}>{header()}</Fragment>;
    }

    return <TableHeader key={label}>{label}</TableHeader>;
  });

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>{renderedHeaders}</TableRow>
        </thead>
        <tbody>{renderedRows}</tbody>
      </StyledTable>
    </TableContainer>
  );
};

function getIcons(label: string, sortBy: any, sortOrder: any) {
  const upDownIcons = (
    <div>
      <IconWrapper>
        <GoTriangleUp />
      </IconWrapper>
      <IconWrapper>
        <GoTriangleDown />
      </IconWrapper>
    </div>
  );

  if (label !== sortBy) {
    return upDownIcons;
  }

  if (sortOrder === null) {
    return upDownIcons;
  } else if (sortOrder === 'asc') {
    return (
      <IconWrapper>
        <GoTriangleUp />
      </IconWrapper>
    );
  } else if (sortOrder === 'desc') {
    return (
      <IconWrapper>
        <GoTriangleDown />
      </IconWrapper>
    );
  }
}

export default Table;
