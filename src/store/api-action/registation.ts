import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthData } from '../../interfaces';
import { api } from '../store';

export const singUp = createAsyncThunk(
  'signup',
  async ({ name, email, password }: IAuthData) => {
    try {
      await api.post('/signup', {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }
);
