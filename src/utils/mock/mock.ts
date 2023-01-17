import { IActivatedUser, IDefaultUser } from '../../interfaces';

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
