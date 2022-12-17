import { DirPath } from './dir-path';
import { FileMenu } from './file-menu';

export const FileListHeader = (): JSX.Element => {
  return (
    <div className="filelist__header">
      <div className="filelist__header__menu">
        <DirPath />
        <FileMenu />
      </div>
      <div className="filelist__header__bar">
        <p className="filelist__header__bar__label">Name</p>
        <p className="filelist__header__bar__label">Date</p>
        <p className="filelist__header__bar__label">Size</p>
      </div>
    </div>
  );
};
