import React, { FC, Fragment, useState, useEffect } from 'react';

import { getIcons } from './helpers';
import {
  TableContainer,
  StyledTable,
  StyledTableCell,
  StyledPagination,
  StyledPaginationInfo,
  StyledPaginationButton,
  StyledTableHeader,
  StyledTableRow,
  StyledSortableTableHeader,
  StyledSortableTableHeaderContent,
} from './styled';

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

const itemsPerPage = 10;

const Table: FC<TableProps> = ({ data, columns }) => {
  const [sortOrder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortOrder, sortBy]);

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
        <StyledSortableTableHeader
          key={column.key}
          onClick={() => handleClick(column.label)}
        >
          <StyledSortableTableHeaderContent>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </StyledSortableTableHeaderContent>
        </StyledSortableTableHeader>
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

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay = sortedData.slice(startIndex, endIndex);

  const renderedRows = dataToDisplay.map((item) => {
    return (
      <StyledTableRow key={item.id}>
        {columns.map(({ key, render }) => {
          if (!render) {
            return (
              <StyledTableCell key={key}>{item[key as string]}</StyledTableCell>
            );
          }
          return <StyledTableCell key={key}>{render(item)}</StyledTableCell>;
        })}
      </StyledTableRow>
    );
  });

  const renderedHeaders = updatedColumns.map(({ label, header }) => {
    if (header) {
      return <Fragment key={label}>{header()}</Fragment>;
    }

    return <StyledTableHeader key={label}>{label}</StyledTableHeader>;
  });

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <StyledTableRow>{renderedHeaders}</StyledTableRow>
        </thead>
        <tbody>{renderedRows}</tbody>
      </StyledTable>
      <StyledPagination>
        <StyledPaginationButton
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </StyledPaginationButton>
        <StyledPaginationInfo>
          Page {currentPage} of {totalPages}
        </StyledPaginationInfo>
        <StyledPaginationButton
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </StyledPaginationButton>
      </StyledPagination>
    </TableContainer>
  );
};

export default Table;
