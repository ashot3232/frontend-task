import { configureStore, ThunkDispatch, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { usersReducer } from './slices/usersSlice';
import { userReducer } from './slices/userSlice';
import { notesReducer } from './slices/notesSlice';
import { themeReducer } from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    users: usersReducer,
    notes: notesReducer,
  },
});

export * from './thunks/fetchUsers';
export * from './thunks/fetchUser';
export * from './thunks/fetchNotes';
export * from './thunks/addNote';
export * from './thunks/removeNote';
export * from './thunks/removeUser';
export * from './slices/themeSlice';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
