export interface IUserData {
  email: string;
  avatar: string;
  name: string;
}

export interface IUserDataServer {
  email: string;
  avatar: string;
  name: string;
  files: Array<IFile>;
  usedSpace: number;
  id: string;
}

export interface IFile {
  id: string;
  name: string;
  type: string;
  path: string;
  date?: string;
  size?: string | null;
  parent?: string;
}

export interface IFileServer {
  _id: string;
  name: string;
  type: string;
  path: string;
  createdAt: Date;
  size: number;
}

export interface IAuthData {
  email: string;
  password: string;
  name?: string;
}
