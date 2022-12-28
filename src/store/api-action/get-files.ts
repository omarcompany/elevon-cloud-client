import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptFilesToClient } from '../../adapter';
import { api, store } from '../store';
import { setFiles } from '../action';
import { IFile, IFileServer } from '../../interfaces';

export const getFiles = createAsyncThunk(
  'files/getFiles',
  async (file: IFile | null) => {
    try {
      const { data } = await api.get<IFileServer[]>(
        `/files${file ? '?parent=' + file.id : ''}`
      );
      store.dispatch(setFiles(adaptFilesToClient(data)));
    } catch (error) {
      console.log(error);
    }
  }
);
