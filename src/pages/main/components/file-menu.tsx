import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';
import { downloadFile } from '../../../store/api-action/download-file';

export const FileMenu = (): JSX.Element => {
  const selectedFile = useAppSelector((store) => store.file.selectedFile);

  const isMenuHidden = selectedFile === null;

  const isDownloadIconHidden = selectedFile?.type === 'dir';

  const downloadClickHandler = () => {
    if (selectedFile) {
      store.dispatch(downloadFile(selectedFile));
    }
  };

  return (
    <div className={`file-menu ${isMenuHidden && 'visually-hidden'}`}>
      <img
        className={`file-menu__icon ${
          isDownloadIconHidden && 'visually-hidden'
        }`}
        alt="download"
        src="./images/download.svg"
        onClick={downloadClickHandler}
      />
      <img
        className="file-menu__icon"
        alt="trash"
        src="./images/trash-icon.svg"
      />
    </div>
  );
};
