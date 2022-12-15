import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptFileToClient } from '../../adapter';
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
      const result = await api.post(`/files/upload`, formData);
      store.dispatch(addFile(adaptFileToClient(result.data)));
    } catch (error) {
      console.log(error);
    }
  }
);
