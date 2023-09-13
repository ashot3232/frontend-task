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
import { Nullable, SortOrder, Column, HasId } from '../../types';

interface TableProps<T extends HasId> {
  data: T[];
  columns: Column<T>[];
}

const itemsPerPage = 10;

function Table<T extends HasId>({ data, columns }: TableProps<T>) {
  const [sortOrder, setSortOrder] = useState<Nullable<SortOrder>>(null);
  const [sortBy, setSortBy] = useState<Nullable<string>>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortOrder, sortBy]);

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder(SortOrder.ASC);
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder(SortOrder.ASC);
      setSortBy(label);
    } else if (sortOrder === SortOrder.ASC) {
      setSortOrder(SortOrder.DESC);
      setSortBy(label);
    } else if (SortOrder.DESC) {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedColumns = columns.map((column: Column<T>) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <StyledSortableTableHeader onClick={() => handleClick(column.label)}>
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
      (column: Column<T>) => column.label === sortBy,
    ) as Column<T>;
    sortedData = [...data].sort((a, b) => {
      if (sortValue) {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === SortOrder.ASC ? 1 : -1;

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          return (valueA - valueB) * reverseOrder;
        }
      }

      return 1;
    });
  }

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToDisplay = sortedData.slice(startIndex, endIndex);

  const renderedRows = dataToDisplay.map((item: T) => {
    return (
      <StyledTableRow key={item.id}>
        {columns.map(({ key, render }: Column<T>) => {
          if (!render) {
            return <StyledTableCell key={key}>{item[key]}</StyledTableCell>;
          }
          return <StyledTableCell key={key}>{render(item)}</StyledTableCell>;
        })}
      </StyledTableRow>
    );
  });

  const renderedHeaders = updatedColumns.map(({ label, header }: Column<T>) => {
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
}

export default Table;
