import ReactDOM from 'react-dom';

const popupRootElement = document.getElementById('popup-root') as HTMLElement;

export const PortalProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  if (!popupRootElement) return null;

  return ReactDOM.createPortal(children, popupRootElement);
};
