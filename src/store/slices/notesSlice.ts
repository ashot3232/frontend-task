import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNotes } from '../thunks/fetchNotes';
import { removeNote } from '../thunks/removeNote';
import { addNote } from '../thunks/addNote';
import { NoteType } from '../../types';

interface NotesStateType {
  isLoading: boolean;
  data: NoteType[];
  error: string | null | undefined;
}

const initialState: NotesStateType = {
  isLoading: false,
  data: [],
  error: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNotes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchNotes.fulfilled,
      (state, action: PayloadAction<NoteType[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(addNote.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addNote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addNote.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(removeNote.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeNote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((note) => {
        return note.id !== action.payload;
      });
    });
    builder.addCase(removeNote.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const notesReducer = notesSlice.reducer;
