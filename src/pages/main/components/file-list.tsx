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
      {files.map((file) => {
        return (
          <File
            key={file.id}
            id={file.id}
            name={file.name}
            type={file.type}
            date={file.date ?? '---'}
            size={file.size ?? '---'}
          />
        );
      })}
    </div>
  );
};
