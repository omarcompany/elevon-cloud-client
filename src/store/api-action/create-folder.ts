import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { getFiles } from './get-files';

interface INewDir {
  name: string;
  type: 'dir';
  parent?: string;
}

export const createFolder = createAsyncThunk(
  'mkdir',
  async ({ name, parent }: { name: string; parent?: string }) => {
    const dir: INewDir = { name, type: 'dir' };
    if (parent) {
      dir.parent = parent;
    }

    try {
      await api.post('/mkdir', dir);
      store.dispatch(getFiles(store.getState().file.currentDir));
    } catch (error) {
      console.log(error);
    }
  }
);
