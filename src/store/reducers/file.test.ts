import { addFile, removeFileFromState, setFiles } from '../action';
import { file } from './file';
import { makeFakeFile, makeFakeFileList } from '../../utils/mock/mock';

describe('Reducer: file', () => {
  it('It should return default state', () => {
    const defaultState = {
      files: [],
      currentDir: null,
      dirStack: [],
      selectedFile: null,
    };

    expect(file(undefined, { type: 'Unknown' })).toEqual(defaultState);
  });

  it('It should set files', () => {
    const defaultState = {
      files: [],
      currentDir: null,
      dirStack: [],
      selectedFile: null,
    };
    let fileCounter = 6;
    const files = makeFakeFileList('', fileCounter);
    expect(file(defaultState, setFiles(files))).toEqual({
      ...defaultState,
      files,
    });
  });

  it('It should add file', () => {
    const defaultState = {
      files: [],
      currentDir: null,
      dirStack: [],
      selectedFile: null,
    };
    const newFile = makeFakeFile('');
    expect(file(defaultState, addFile(newFile))).toEqual({
      ...defaultState,
      files: [newFile],
    });
  });

  it('It should remove last file from state', () => {
    const fileList = makeFakeFileList('', 4);
    const defaultState = {
      files: fileList,
      currentDir: null,
      dirStack: [],
      selectedFile: null,
    };
    const removedFile = fileList.pop();

    expect(
      file(defaultState, removeFileFromState(removedFile?.id || ''))
    ).toEqual({
      ...defaultState,
      files: [...fileList],
    });
  });

  it('It should remove first file from state', () => {
    const fileList = makeFakeFileList('', 4);
    const defaultState = {
      files: fileList,
      currentDir: null,
      dirStack: [],
      selectedFile: null,
    };
    const removedFile = fileList.shift();

    expect(
      file(defaultState, removeFileFromState(removedFile?.id || ''))
    ).toEqual({
      ...defaultState,
      files: [...fileList],
    });
  });
});
