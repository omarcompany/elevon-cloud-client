import { FormEvent } from 'react';

import { closePopup, setSelectedFile } from '../../store/action';
import { PortalProvider } from './portal-provider';
import { store } from '../../store/store';
import { useAppSelector } from '../../store/hooks';
import { deleteFile } from '../../store/api-action/delete-file';

export const PopupDeletingConfirm = (): JSX.Element | null => {
  const { isOpen, selectedFile } = useAppSelector((store) => {
    return {
      selectedFile: store.file.selectedFile,
      isOpen: store.popup.isOpen,
    };
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile?.id) {
      store.dispatch(deleteFile(selectedFile?.id));
      store.dispatch(setSelectedFile(null));
    }

    store.dispatch(closePopup());
  };

  return !isOpen ? null : (
    <PortalProvider>
      <form className="popup" onSubmit={handleSubmit}>
        <div className="popup__header">
          <p className="popup__header__title">Are you sure?</p>
        </div>
        <input
          className="popup__input-submit"
          type="submit"
          id="submit"
          name="popup_input_submit"
          value="Yes"
        />
        <button onClick={() => store.dispatch(closePopup())}>x</button>
      </form>
    </PortalProvider>
  );
};
