import { FileList } from './components/file-list';
import { Navbar } from '../../components/navbar';
import { openPopup } from '../../store/action';
import { PopupType } from '../../const';
import { store } from '../../store/store';
import { FileUploader } from './components/file-uploader';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <FileList />
      <button
        onClick={() => {
          store.dispatch(openPopup(PopupType.NewFolder));
        }}
      >
        New folder
      </button>
      <FileUploader />
    </>
  );
};
