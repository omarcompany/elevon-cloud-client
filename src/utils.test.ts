import { getTokenWithType } from './utils';

describe('Function: getTokenWithType', () => {
  it('it should return correct string with a token type', () => {
    const token = 'some-secret';
    expect(getTokenWithType(token)).toEqual(`Bearer ${token}`);
  });

  it('it should return error', () => {
    const token = 'some-secret';
    expect(getTokenWithType(token)).toEqual(`Bearer${token}`);
  });
});
