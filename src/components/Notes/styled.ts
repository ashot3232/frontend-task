import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Box from '../Box';
import React from 'react';

export const Wrapper = styled.div`
  margin: 50px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, 265px);

  @media (max-width: 660px) {
    margin: 15px;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

export const AddIcon = styled(AiOutlinePlusCircle)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 78px;
`;

export const StyledBox = styled(Box)<React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-top: 20px;
`;
