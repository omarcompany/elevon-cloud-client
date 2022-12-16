import {
  addDirToPath,
  setCurrentDir,
  setSelectedFile,
} from '../../../store/action';
import { getFiles } from '../../../store/api-action/get-files';
import { IFile } from '../../../interfaces';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const File = ({ file }: { file: IFile }): JSX.Element => {
  const { id, name, date, type, size } = file;

  const selectedFile = useAppSelector((store) => store.file.selectedFile);

  const isSelected = selectedFile ? selectedFile?.id === id : false;

  const fileSize = type === 'dir' ? '---' : size;

  const icon =
    type === 'dir' ? './images/folder-icon.svg' : './images/file-icon.svg';

  const handleOnClick = () => {
    store.dispatch(setSelectedFile(file));
  };

  const handleDoubleClick = () => {
    if (type === 'dir') {
      store.dispatch(addDirToPath(file));
      store.dispatch(setCurrentDir(file));
      store.dispatch(setSelectedFile(null));
      store.dispatch(getFiles(file));
    }
  };

  return (
    <div
      onClick={handleOnClick}
      onDoubleClick={handleDoubleClick}
      className={`file ${isSelected && 'file__selected'}`}
    >
      <div className="file__name">
        <img
          height={32}
          width={32}
          className="file__name__icon"
          src={icon}
          alt="file icon"
        />
        <div className="file__name__text">{name}</div>
      </div>
      <div className="file__date">{date}</div>
      <div className="file__size">{fileSize}</div>
    </div>
  );
};
