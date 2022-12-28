import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptFileToClient } from '../../adapter';
import { IFileServer } from '../../interfaces';
import { addFile } from '../action';

import { api, store } from '../store';

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
      const { data } = await api.post<IFileServer>('/mkdir', dir);
      store.dispatch(addFile(adaptFileToClient(data)));
    } catch (error) {
      console.log(error);
    }
  }
);
