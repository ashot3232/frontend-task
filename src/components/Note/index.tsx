import React, { FC } from 'react';

import { removeNote } from '../../store';
import { useThunk } from '../../hooks/useThunk';
import {
  StyledBox,
  StyledDetails,
  StyledDescription,
  StyledBottomContent,
  StyledDeleteIcon,
} from './styled';

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
      <StyledDetails>
        <h3>{title}</h3>
        <StyledDescription>{description}</StyledDescription>
      </StyledDetails>
      <StyledBottomContent>
        {error && <div>Error deleting user.</div>}
        {isLoading && <div>Loading...</div>}
        {!error && !isLoading && (
          <div onClick={handleClick}>
            <StyledDeleteIcon />
            Remove
          </div>
        )}
      </StyledBottomContent>
    </StyledBox>
  );
};

export default Note;
