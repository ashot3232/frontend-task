import { configureStore, ThunkDispatch, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { usersReducer } from './slices/usersSlice';
import { notesReducer } from './slices/notesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    notes: notesReducer,
  },
});

export * from './thunks/fetchUsers';
export * from './thunks/fetchNotes';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
