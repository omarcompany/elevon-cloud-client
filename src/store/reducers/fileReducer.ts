import { createReducer } from '@reduxjs/toolkit';

import { IFile } from '../../interfaces';
import { moveToDir, setCurrentDir, addDirToPath, setFiles } from '../action';

interface IDefaultState {
  files: Array<IFile>;
  currentDir: IFile | null;
  dirStack: Array<IFile>;
}

export const defaultState: IDefaultState = {
  files: [],
  currentDir: null,
  dirStack: [],
};

export const fileReducer = createReducer(defaultState, (builder) => {
  builder.addCase(setFiles, (state, action) => {
    state.files = action.payload;
  });

  builder.addCase(setCurrentDir, (state, action) => {
    state.currentDir = action.payload;
  });

  builder.addCase(addDirToPath, (state, action) => {
    state.dirStack.push(action.payload);
  });

  builder.addCase(moveToDir, (state, action) => {
    const file = action.payload;
    if (!file) {
      state.dirStack = [];
      return;
    }

    if (file.id === state.currentDir?.id) {
      return;
    }

    const index = state.dirStack.findIndex((item) => item.id === file.id);

    if (!index) {
      state.dirStack = [];
      return;
    }

    if (index === 0) {
      state.dirStack.splice(1);
      return;
    }

    state.dirStack.splice(index + 1);
  });
});
