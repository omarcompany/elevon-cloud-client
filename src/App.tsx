import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from './const';
import { LoginPage } from './pages/login/login-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import { RegistrationPage } from './pages/registration/registration-page';

import { getToken } from './services/token';
import { setAuthStatus } from './store/action';
import { store } from './store/store';

function App() {
  if (getToken()) {
    store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Registration} element={<RegistrationPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
