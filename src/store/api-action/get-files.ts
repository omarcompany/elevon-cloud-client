import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptFilesToClient } from '../../adapter';
import { api, store } from '../store';
import { setFiles } from '../action';

export const getFiles = createAsyncThunk('signup', async (id: string) => {
  try {
    const result = await api.get(`/files${id ? '?parent=' + id : ''}`);
    store.dispatch(setFiles(adaptFilesToClient(result.data)));
  } catch (error) {
    console.log(error);
  }
});

