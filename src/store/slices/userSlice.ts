import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/fetchUser';
import { UserType } from '../../types';

interface UserStateType {
  isLoading: boolean;
  data: UserType | null;
  error: string | null | undefined;
}

const initialState: UserStateType = {
  isLoading: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
