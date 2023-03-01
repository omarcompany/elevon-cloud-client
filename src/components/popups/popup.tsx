import { FormEvent } from 'react';

import { closePopup } from '../../store/action';
import { PortalProvider } from './portal-provider';
import { store } from '../../store/store';

interface IPopupProps {
  title: string;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
}

export function Popup({ title, submitHandler, children }: IPopupProps) {
  return (
    <PortalProvider>
      <div className="popup-wrapper">
        <div className="popup">
          <form
            className="popup-form"
            onSubmit={(event) => {
              submitHandler(event);
              store.dispatch(closePopup());
            }}
          >
            <p className="popup__header">{title}</p>

            {children}
          </form>
        </div>
      </div>
    </PortalProvider>
  );
}
