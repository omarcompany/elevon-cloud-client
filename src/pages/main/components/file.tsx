import { getFiles } from '../../../store/api-action/get-files';
import { setCurrentDir } from '../../../store/action';
import { store } from '../../../store/store';

interface IFileProps {
  id: string;
  name: string;
  date: string;
  type: string;
  size: string | null;
}

export const File = ({
  id,
  name,
  date,
  type,
  size,
}: IFileProps): JSX.Element => {
  const fileSize = type === 'dir' ? '---' : size;

  const handleDoubleClick = () => {
    if (type === 'dir') {
      store.dispatch(setCurrentDir(id));
      store.dispatch(getFiles(id));
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
