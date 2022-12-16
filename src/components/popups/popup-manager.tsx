import { PopupDeletingConfirm } from './popup-deleting-confirm';
import { PopupNewFolder } from './popup-new-folder';
import { PopupType } from '../../const';
import { useAppSelector } from '../../store/hooks';

export const PopupManager = (): JSX.Element | null => {
  const { isOpen, popupType } = useAppSelector((store) => ({
    isOpen: store.popup.isOpen,
    popupType: store.popup.popupType,
  }));

  if (!isOpen) return null;

  switch (popupType) {
    case PopupType.NewFolder:
      return <PopupNewFolder />;
    case PopupType.DeletingConfirm:
      return <PopupDeletingConfirm />;
    case PopupType.None:
      return null;
    default:
      return null;
  }
};
