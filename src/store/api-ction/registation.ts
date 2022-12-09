import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUserData } from '../../interfaces';
import { api } from '../store';

export const singUp = createAsyncThunk(
  'signup',
  async ({ name, email, password }: IUserData) => {
    try {
      await api.post<string>('/signup', {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }
);
