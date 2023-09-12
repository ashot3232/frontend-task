import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

import Box from './Box';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Details = styled.div`
  max-height: 165px;
  overflow-y: auto;
`;

const Description = styled.span`
  display: block;
  color: #575757;
  font-size: 16px;
  margin-top: 5px;
`;

const BottomContent = styled.div`
  padding-top: 10px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
`;

const DeleteIcon = styled(AiOutlineDelete)`
  margin-right: 4px;
`;

interface NoteProps {
  title: string;
  description: string;
}

const Note: FC<NoteProps> = ({ title, description }) => {
  return (
    <StyledBox>
      <Details>
        <h3>{title}</h3>
        <Description>{description}</Description>
      </Details>
      <BottomContent>
        <DeleteIcon />
        Remove
      </BottomContent>
    </StyledBox>
  );
};

export default Note;
