import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptFileToClient } from '../../adapter';
import { IFileServer } from '../../interfaces';
import { addFile } from '../action';
import { api, store } from '../store';

interface IUploadFile {
  file: File;
  parent: string | null;
}

export const uploadFile = createAsyncThunk(
  'files/upload-file',
  async ({ file, parent }: IUploadFile) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (parent) {
        formData.append('parent', parent);
      }
      const { data } = await api.post<IFileServer>(`/files/upload`, formData);
      store.dispatch(addFile(adaptFileToClient(data)));
    } catch (error) {
      console.log(error);
    }
  }
);
