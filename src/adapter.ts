import { IFile, IFileServer, IUserData, IUserDataServer } from './interfaces';

const convertBytes = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  if (i === 0) {
    return bytes + ' ' + sizes[i];
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};

export const adaptFilesToClient = (files: Array<IFileServer>): Array<IFile> => {
  return files.map((file) => adaptFileToClient(file));
};

export const adaptFileToClient = (file: IFileServer): IFile => {
  const size = file.type === 'dir' ? null : convertBytes(file.size);
  return {
    id: file._id,
    name: file.name,
    date: file.createdAt.toString(),
    type: file.type,
    size,
    path: file.path,
  };
};

export const adaptUserToClient = (user: IUserDataServer): IUserData => {
  return {
    email: user.email,
    avatar: user.avatar,
    name: user.name,
  };
};
