import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserType } from '../../types';
import { api } from '../../api';

type IdType = UserType['id'];

const fetchUser = createAsyncThunk('user/fetch', async (id: IdType) => {
  const response = await api.get<UserType>(`/users/${id}`);
  return response.data;
});

export { fetchUser };
