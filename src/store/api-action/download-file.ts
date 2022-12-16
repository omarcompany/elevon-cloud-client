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
      const link = document.createElement('a');
      link.href = URL.createObjectURL(result.data);
      link.download = file.name;
      link.click();
    } catch (error) {
      console.log(error);
    }
  }
);
