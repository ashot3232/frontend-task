import React, { useEffect, useState } from 'react';

import { NoteType } from '../../types';
import Note from '../Note';
import AddNote from '../AddNote';
import { useThunk } from '../../hooks/useThunk';
import { fetchNotes, useAppSelector } from '../../store';
import { Wrapper, AddIcon, StyledBox, StyledText } from './styled';

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
      <StyledBox onClick={() => setShowAddForm(true)}>
        <AddIcon />
        <StyledText>Add new note</StyledText>
      </StyledBox>

      {content}
    </Wrapper>
  );
}

export default Notes;
