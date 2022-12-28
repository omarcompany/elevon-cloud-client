import { Route, Routes } from 'react-router-dom';

import { ActivationNeedPage } from './pages/activation-need/activation-need-page';
import { AppRoute } from './const';
import { browserHistory } from './browser-history';
import { getUserData } from './store/api-action/get-user-data';
import { HistoryRouter } from './components/history-router/history-router';
import { LoginPage } from './pages/login/login-page';
import { MainPage } from './pages/main/main-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import { PopupManager } from './components/popups/popup-manager';
import { PrivateRoute } from './components/private-route';
import { ProfilePage } from './pages/profile/profile-page';
import { RegistrationPage } from './pages/registration/registration-page';
import { store } from './store/store';

store.dispatch(getUserData());

function App() {
  return (
    <>
      <PopupManager />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Profile}
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Registration} element={<RegistrationPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.ActivationNeed}
            element={<ActivationNeedPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
