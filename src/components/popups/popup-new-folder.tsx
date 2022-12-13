import { FormEvent, useRef } from 'react';

import { closePopup } from '../../store/action';
import { createFolder } from '../../store/api-action/create-folder';
import { PortalProvider } from './portal-provider';
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const folderName = nameRef.current?.value || 'untitled';

    store.dispatch(createFolder({ name: folderName, parent: currentDir?.id }));
    store.dispatch(closePopup());
  };

  return !isOpen ? null : (
    <PortalProvider>
      <form className="popup" onSubmit={handleSubmit}>
        <div className="popup__header">
          <p className="popup__header__title">Create a new folder</p>
          <button
            className="popup__header__close-button"
            type="button"
            title="Close"
            onClick={() => {
              store.dispatch(closePopup());
            }}
          >
            x
          </button>
        </div>
        <input
          className="popup__input-text"
          type="text"
          id="name"
          name="popup_input_name"
          placeholder="New folder..."
          ref={nameRef}
        />
        <input
          className="popup__input-submit"
          type="submit"
          id="submit"
          name="popup_input_submit"
          value="Create"
        />
      </form>
    </PortalProvider>
  );
};
