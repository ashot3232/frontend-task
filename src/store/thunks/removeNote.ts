import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NoteType } from '../../types';

type IdType = NoteType['id'];

const removeNote = createAsyncThunk('notes/remove', async (id: IdType) => {
  await axios.delete(`http://localhost:3004/notes/${id}`);

  return id;
});

export { removeNote };
