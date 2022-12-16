import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from './const';
import { getToken } from './services/token';
import { LoginPage } from './pages/login/login-page';
import { MainPage } from './pages/main/main-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import { PopupManager } from './components/popups/popup-manager';
import { PrivateRoute } from './components/private-route';
import { RegistrationPage } from './pages/registration/registration-page';
import { setAuthStatus } from './store/action';
import { store } from './store/store';

function App() {
  if (getToken()) {
    store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  }

  return (
    <>
      <PopupManager />
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Registration} element={<RegistrationPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
