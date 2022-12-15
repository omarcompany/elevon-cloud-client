import { useEffect } from 'react';

import { getFiles } from '../../../store/api-action/get-files';
import { File } from './file';
import { FileListHeader } from './file-list-header';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const FileList = (): JSX.Element => {
  const { currentDir, files } = useAppSelector((state) => {
    return state.file;
  });

  useEffect(() => {
    store.dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <div className="filelist">
      <FileListHeader />
      <div className="filelist__board">
        {files.map((file) => {
          return <File key={file.id} file={file} />;
        })}
      </div>
    </div>
  );
};
