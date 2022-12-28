import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../store';

export const signOut = createAsyncThunk('signout', async () => {
  try {
    await api.post('/signout');
  } catch (error) {
    console.log(error);
  }
});
