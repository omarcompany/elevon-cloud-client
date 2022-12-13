import { FileList } from './components/file-list';
import { Navbar } from '../../components/navbar';
import { openPopup } from '../../store/action';
import { PopupType } from '../../const';
import { store } from '../../store/store';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <button
        onClick={() => {
          store.dispatch(openPopup(PopupType.NewFolder));
        }}
      >
        New folder
      </button>
      <FileList />
    </>
  );
};
