import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

import { removeNote } from '../store';
import Box from './Box';
import { useThunk } from '../hooks/useThunk';

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
  id: string;
  title: string;
  description: string;
}

const Note: FC<NoteProps> = ({ id, title, description }) => {
  const [doRemoveNote, isLoading, error] = useThunk(removeNote);

  const handleClick = () => {
    doRemoveNote(id);
  };

  return (
    <StyledBox>
      <Details>
        <h3>{title}</h3>
        <Description>{description}</Description>
      </Details>
      <BottomContent>
        {error && <div>Error deleting user.</div>}
        {isLoading && <div>Loading...</div>}
        {!error && !isLoading && (
          <div onClick={handleClick}>
            <DeleteIcon />
            Remove
          </div>
        )}
      </BottomContent>
    </StyledBox>
  );
};

export default Note;
