import { getFiles } from '../../../store/api-action/get-files';
import { IFile } from '../../../interfaces';
import { setCurrentDir, addDirToPath } from '../../../store/action';
import { store } from '../../../store/store';

export const File = ({ file }: { file: IFile }): JSX.Element => {
  const { name, date, type, size } = file;

  const fileSize = type === 'dir' ? '---' : size;

  const handleDoubleClick = () => {
    if (type === 'dir') {
      store.dispatch(addDirToPath(file))
      store.dispatch(setCurrentDir(file));
      store.dispatch(getFiles(file));
    }
  };

  return (
    <div onDoubleClick={handleDoubleClick} className="file">
      <div className="file__name">
        <img
          className="file__name__icon"
          src="./images/folder-icon.svg"
          alt="file icon"
        />
        <div className="file__name__text">{name}</div>
      </div>
      <div className="file__date">{date}</div>
      <div className="file__size">{fileSize}</div>
    </div>
  );
};
