import { AuthorizationStatus } from '../../const';
import {
  makeFakeActivatedUser,
  makeFakeDefaultUser,
} from '../../utils/mock/mock';
import { setActivatedUser, setAuthStatus, setDefaultUser } from '../action';
import { user } from './user';

const defaultUser = makeFakeDefaultUser();
const activatedUser = makeFakeActivatedUser();

describe('Reducer: user', () => {
  it('It should return default state', () => {
    const defaultState = {
      defaultUser: null,
      activatedUser: null,
      authStatus: AuthorizationStatus.Unknown,
    };

    expect(user(undefined, { type: 'Unknown' })).toEqual(defaultState);
  });

  it('It should change auth status to Auth', () => {
    const state = {
      defaultUser: null,
      activatedUser: null,
      authStatus: AuthorizationStatus.Unknown,
    };
    expect(user(state, setAuthStatus(AuthorizationStatus.Auth))).toEqual({
      ...state,
      authStatus: AuthorizationStatus.Auth,
    });
  });

  it('It should set default user', () => {
    const state = {
      defaultUser: null,
      activatedUser: null,
      authStatus: AuthorizationStatus.Unknown,
    };
    expect(user(state, setDefaultUser(defaultUser))).toEqual({
      ...state,
      defaultUser,
    });
  });

  it('It should set activated user', () => {
    const state = {
      defaultUser: null,
      activatedUser: null,
      authStatus: AuthorizationStatus.Unknown,
    };
    expect(user(state, setActivatedUser(activatedUser))).toEqual({
      ...state,
      activatedUser,
    });
  });
});
