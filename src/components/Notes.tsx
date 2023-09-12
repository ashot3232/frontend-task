import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { NoteType } from '../types';
import { fetchNotes } from '../api';
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
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const fetchNotesData = async () => {
      const data = await fetchNotes();
      setNotes(data);
    };

    fetchNotesData();
  }, []);

  const renderedNotes = notes.map((note) => <Note key={note.id} {...note} />);

  return (
    <Wrapper>
      <StyledBox>
        <AddIcon />
      </StyledBox>

      {renderedNotes}
    </Wrapper>
  );
}

export default Notes;
