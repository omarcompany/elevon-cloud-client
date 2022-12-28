export interface IDefaultUser {
  id: string;
  name: string;
  email: string;
  isActivated: boolean;
}

export interface IActivatedUser extends IDefaultUser {
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  accessToken?: string;
}

export interface IDefaultUserServer {
  id: string;
  name: string;
  email: string;
  isActivated: boolean;
}

export interface IActivatedUserServer extends IDefaultUserServer {
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  accessToken?: string;
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
