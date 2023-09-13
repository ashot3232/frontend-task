import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 250px;
  border-radius: 5px;
  padding: 15px 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.colors.boxBackground};
`;
