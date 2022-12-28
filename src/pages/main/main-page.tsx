import { FileList } from './components/file-list';
import { MainNavbar } from './components/main-navbar';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <MainNavbar />
      <FileList />
    </>
  );
};
