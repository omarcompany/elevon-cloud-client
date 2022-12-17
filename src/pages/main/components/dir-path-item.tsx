import { getFiles } from '../../../store/api-action/get-files';
import { IFile } from '../../../interfaces';
import {
  moveToDir,
  setCurrentDir,
  setSelectedFile,
} from '../../../store/action';
import { store } from '../../../store/store';

interface IDirPathItemProps {
  isLast: boolean;
  file?: IFile;
}
export const DirPathItem = ({ isLast, file }: IDirPathItemProps) => {
  const clickHandler = () => {
    const dir = file ?? null;
    store.dispatch(moveToDir(dir));
    store.dispatch(setCurrentDir(dir));
    store.dispatch(setSelectedFile(null));
    store.dispatch(getFiles(dir));
  };
  return (
    <div className="dir__path__button-wrapper">
      <button className="dir__path__button" onClick={clickHandler}>
        {file?.name ?? 'Home'}
      </button>
      {!isLast && <p className="dir__path__next">{`>`}</p>}
    </div>
  );
};
