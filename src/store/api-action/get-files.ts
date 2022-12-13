import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptFilesToClient } from '../../adapter';
import { api, store } from '../store';
import { setFiles } from '../action';
import { IFile } from '../../interfaces';

export const getFiles = createAsyncThunk(
  'signup',
  async (file: IFile | null) => {
    try {
      const result = await api.get(`/files${file ? '?parent=' + file.id : ''}`);
      store.dispatch(setFiles(adaptFilesToClient(result.data)));
    } catch (error) {
      console.log(error);
    }
  }
);
