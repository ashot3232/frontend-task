import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';

import { UserType } from '../../types';

type IdType = UserType['id'];

const removeUser = createAsyncThunk('users/remove', async (id: IdType) => {
  await api.delete(`/users/${id}`);

  return id;
});

export { removeUser };
