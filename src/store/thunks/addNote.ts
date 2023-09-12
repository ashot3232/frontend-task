import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { NoteType } from '../../types';

const addNote = createAsyncThunk('notes/add', async (note: NoteType) => {
  const response = await api.post('/api/notes', note);

  return response.data;
});

export { addNote };
