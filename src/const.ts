import config from './config.json';

export enum AppRoute {
  Main = '/',
  Registration = '/signup',
  Login = '/signin',
  Profile = 'profile',
}

export enum ErrorMessage {
  Email = 'Incorrect email, e.g. name@mail.ru',
  Password = "Password must have at least a number and a letter and mustn't contain spaces",
  Name = "Name mustn't contain spaces",
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PopupType {
  NewFolder,
  DeletingConfirm,
  None,
}

export const BACKEND_URL = config.SERVER_URL;
