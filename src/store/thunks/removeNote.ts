import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';

import { NoteType } from '../../types';

type IdType = NoteType['id'];

const removeNote = createAsyncThunk('notes/remove', async (id: IdType) => {
  await api.delete(`/api/notes/${id}`);

  return id;
});

export { removeNote };
