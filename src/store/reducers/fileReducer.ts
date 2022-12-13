import { createReducer } from '@reduxjs/toolkit';

import { IFile } from '../../interfaces';
import { setCurrentDir, setFiles } from '../action';

interface IDefaultState {
  files: Array<IFile>;
  currentDir: string;
}

export const defaultState: IDefaultState = {
  files: [],
  currentDir: '',
};

export const fileReducer = createReducer(defaultState, (builder) => {
  builder.addCase(setFiles, (state, action) => {
    state.files = action.payload;
  });
  builder.addCase(setCurrentDir, (state, action) => {
    state.currentDir = action.payload;
  });
});
