import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import Note from './Note';
import Box from './Box';

const Wrapper = styled.div`
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

const AddIcon = styled(AiOutlinePlusCircle)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 78px;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
`;

function Notes() {
  return (
    <Wrapper>
      <StyledBox>
        <AddIcon />
      </StyledBox>

      <Note />
      <Note />
      <Note />
    </Wrapper>
  );
}

export default Notes;
