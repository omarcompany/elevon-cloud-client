import { getUid } from './getUid';
import { IActivatedUser, IDefaultUser, IFile } from '../../interfaces';

export const makeFakeDefaultUser = (): IDefaultUser => ({
  id: 'some-id',
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  isActivated: false,
});

export const makeFakeActivatedUser = (): IActivatedUser => ({
  id: 'some-id',
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  isActivated: true,
  diskSpace: 18 * 1024 * 1024,
  usedSpace: 0,
  avatar: '',
});

export const makeFakeFile = (path: string): IFile => {
  const randomId = getUid();
  return {
    id: randomId,
    name: `file ${randomId}`,
    type: 'txt',
    path,
  };
};

export const makeFakeFileList = (
  path: string,
  numbers: number = 7
): Array<IFile> => {
  return new Array(numbers).fill(null).map(() => makeFakeFile(path));
};
