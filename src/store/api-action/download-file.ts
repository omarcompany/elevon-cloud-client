import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../store';
import { IFile } from '../../interfaces';

export const downloadFile = createAsyncThunk(
  'files/download',
  async (file: IFile) => {
    try {
      const result = await api.get(`/files/download/${file.id}`, {
        responseType: 'blob',
      });
      const aElement = document.createElement('a');
      aElement.setAttribute('download', file.name);

      const href = URL.createObjectURL(result.data);
      aElement.href = href;
      aElement.click();
      URL.revokeObjectURL(href);
    } catch (error) {
      console.log(error);
    }
  }
);
