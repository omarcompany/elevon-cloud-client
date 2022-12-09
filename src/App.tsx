import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from './const';
import { LoginPage } from './pages/login/login-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import { RegistrationPage } from './pages/registration/registration-page';

function App() {
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
