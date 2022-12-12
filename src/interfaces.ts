export interface IUserData {
  email: string;
  password: string;
  name?: string;
}

export interface IFile {
  id: string;
  name: string;
  type: string;
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
