import { TOKEN_TYPE } from "../const";

export const getTokenWithType = (token: string) => {
  return `${TOKEN_TYPE}${token}`;
};
