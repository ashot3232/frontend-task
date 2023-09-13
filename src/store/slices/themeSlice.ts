import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface ThemeStateType {
  value: string;
}

const initialState: ThemeStateType = {
  value: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;

export const themeReducer = themeSlice.reducer;
