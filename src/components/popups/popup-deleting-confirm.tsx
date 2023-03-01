import { FormEvent } from 'react';

import { closePopup, setSelectedFile } from '../../store/action';
import { deleteFile } from '../../store/api-action/delete-file';
import { Popup } from './popup';
import { store } from '../../store/store';
import { useAppSelector } from '../../store/hooks';

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
    <Popup title="Are you sure?" submitHandler={handleSubmit}>
      <div className="popup__buttons">
        <button
          className="popup__cancel"
          onClick={() => store.dispatch(closePopup())}
        >
          Cancel
        </button>
        <input
          className="popup__submit"
          type="submit"
          id="submit"
          name="popup__submit"
          value="Yes"
        />
      </div>
    </Popup>
  );
};
