import { createReducer } from '@reduxjs/toolkit';

import { IFile } from '../../interfaces';
import {
  addDirToPath,
  addFile,
  moveToDir,
  removeFileFromState,
  setCurrentDir,
  setFiles,
  setSelectedFile,
} from '../action';

interface IDefaultState {
  files: Array<IFile>;
  currentDir: IFile | null;
  dirStack: Array<IFile>;
  selectedFile: IFile | null;
}

export const defaultState: IDefaultState = {
  files: [],
  currentDir: null,
  dirStack: [],
  selectedFile: null,
};

export const fileReducer = createReducer(defaultState, (builder) => {
  builder.addCase(setFiles, (state, action) => {
    state.files = action.payload;
  });

  builder.addCase(addFile, (state, action) => {
    state.files.push(action.payload);
  });

  builder.addCase(setCurrentDir, (state, action) => {
    state.currentDir = action.payload;
  });

  builder.addCase(addDirToPath, (state, action) => {
    state.dirStack.push(action.payload);
  });

  builder.addCase(moveToDir, (state, action) => {
    const file = action.payload;
    if (file === null) {
      state.dirStack = [];
      return;
    }

    if (file.id === state.currentDir?.id) {
      return;
    }

    const index = state.dirStack.findIndex((item) => item.id === file.id);

    if (index === -1) {
      state.dirStack = [];
      return;
    }

    state.dirStack.splice(index + 1);
  });

  builder.addCase(setSelectedFile, (state, action) => {
    state.selectedFile = action.payload;
  });

  builder.addCase(removeFileFromState, (state, action) => {
    const id = action.payload;
    const index = state.files.findIndex((item) => item.id === id);

    if (index !== -1) {
      state.files.splice(index, 1);
    }
  });
});
