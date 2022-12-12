import { Navbar } from '../../components/navbar';
import { FileList } from './components/file-list';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <FileList />
    </>
  );
};
