import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserType } from '../../types';
import { api } from '../../api';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await api.get<UserType[]>('/api/users');
  return response.data;
});

export { fetchUsers };
