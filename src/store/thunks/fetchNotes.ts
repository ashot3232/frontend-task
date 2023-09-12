import { createAsyncThunk } from '@reduxjs/toolkit';

import { NoteType } from '../../types';
import { api } from '../../api';

const fetchNotes = createAsyncThunk('notes/fetch', async () => {
  const response = await api.get<NoteType[]>('/api/notes');
  return response.data;
});

export { fetchNotes };
