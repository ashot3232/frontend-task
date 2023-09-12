import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { UserType } from '../../types';
import { removeUser } from '../thunks/removeUser';

interface UsersStateType {
  isLoading: boolean;
  data: UserType[];
  error: string | null | undefined;
}

const initialState: UsersStateType = {
  isLoading: false,
  data: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserType[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((note) => {
        return note.id !== action.payload;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const usersReducer = usersSlice.reducer;
