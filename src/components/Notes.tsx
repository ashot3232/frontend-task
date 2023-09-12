import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { NoteType } from '../types';
import Note from './Note';
import Box from './Box';
import AddNote from './AddNote';
import { useThunk } from '../hooks/useThunk';
import { fetchNotes, useAppSelector } from '../store';

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
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [doFetchNotes, isLoadingUsers, loadingUsersError] =
    useThunk(fetchNotes);

  const { data } = useAppSelector((state) => {
    return state.notes;
  });

  useEffect(() => {
    doFetchNotes();
  }, [doFetchNotes]);

  let content;
  if (isLoadingUsers) {
    content = <div>Loading...</div>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((note: NoteType) => <Note key={note.id} {...note} />);
  }

  return (
    <Wrapper>
      {showAddForm && <AddNote onClose={() => setShowAddForm(false)} />}
      <StyledBox>
        <AddIcon onClick={() => setShowAddForm(true)} />
      </StyledBox>

      {content}
    </Wrapper>
  );
}

export default Notes;
