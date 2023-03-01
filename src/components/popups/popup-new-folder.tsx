import { FormEvent, useRef } from 'react';

import { closePopup } from '../../store/action';
import { createFolder } from '../../store/api-action/create-folder';
import { Popup } from './popup';
import { store } from '../../store/store';
import { useAppSelector } from '../../store/hooks';

export const PopupNewFolder = (): JSX.Element | null => {
  const { isOpen, currentDir } = useAppSelector((store) => {
    return {
      currentDir: store.file.currentDir,
      isOpen: store.popup.isOpen,
    };
  });

  const nameRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const folderName = nameRef.current?.value || 'untitled';

    store.dispatch(createFolder({ name: folderName, parent: currentDir?.id }));
    store.dispatch(closePopup());
  };

  return !isOpen ? null : (
    <Popup title={'Create a new folder'} submitHandler={submitHandler}>
      <>
        <label className="popup__label">
          <input
            className="popup__input"
            type="text"
            id={`popup__label__new-folder}`}
            name="popup__label"
            placeholder={'New folder...'}
            ref={nameRef}
          />
        </label>
        <div className="popup__buttons">
          <button
            className="popup__cancel"
            type="button"
            title="Close"
            onClick={() => {
              store.dispatch(closePopup());
            }}
          >
            Cancel
          </button>
          <input
            className="popup__submit"
            type="submit"
            id="submit"
            name="popup_input_submit"
            value="Create"
          />
        </div>
      </>
    </Popup>
  );
};
