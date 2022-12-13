import { AppRoute } from '../../const';

import { Link } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Return to main page</Link>
    </section>
  );
};
