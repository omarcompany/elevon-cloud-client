import { Middleware } from 'redux';

import { browserHistory } from '../../browser-history';
import { rootReducer } from '../reducers/index';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === 'global/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
