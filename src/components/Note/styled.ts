import styled from 'styled-components';
import Box from '../Box';
import { AiOutlineDelete } from 'react-icons/ai';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledDetails = styled.div`
  max-height: 165px;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledDescription = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text}
  font-size: 16px;
  margin-top: 5px;
`;

export const StyledBottomContent = styled.div`
  padding-top: 10px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledDeleteIcon = styled(AiOutlineDelete)`
  margin-right: 4px;
`;
