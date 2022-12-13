import { getFiles } from '../../../store/api-action/get-files';
import { IFile } from '../../../interfaces';
import { moveToDir, setCurrentDir } from '../../../store/action';
import { store } from '../../../store/store';

export const DirPathItem = ({ file }: { file?: IFile }) => {
  const clickHandler = () => {
    const dir = file ?? null;
    store.dispatch(moveToDir(dir));
    store.dispatch(setCurrentDir(dir));
    store.dispatch(getFiles(dir));
  };
  return (
    <p className="dir__path__item" onClick={clickHandler}>
      {file?.name ?? 'Home'}
    </p>
  );
};
