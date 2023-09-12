import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NoteType } from '../../types';

const addNote = createAsyncThunk('notes/add', async (note: NoteType) => {
  const response = await axios.post('http://localhost:3004/notes', note);

  return response.data;
});

export { addNote };
