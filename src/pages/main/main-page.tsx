import { FileList } from './components/file-list';
import { Navbar } from '../../components/navbar';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <FileList />
    </>
  );
};
