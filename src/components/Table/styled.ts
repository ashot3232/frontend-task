import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin-top: 20px;
`;

export const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;

export const StyledSortableTableHeader = styled(StyledTableHeader)`
  cursor: pointer;

  &:hover {
    background: #04aa6de0;
  }
`;

export const StyledSortableTableHeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.boxBackground};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const StyledIconWrapper = styled.div`
  display: block;
  margin-right: 10px;
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const StyledPaginationButton = styled.button`
  background-color: #04aa6d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #03a05e;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export const StyledPaginationInfo = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;
