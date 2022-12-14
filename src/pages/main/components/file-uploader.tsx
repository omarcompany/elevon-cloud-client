import { uploadFile } from '../../../store/api-action/upload-file';
import { useAppSelector } from '../../../store/hooks';
import { store } from '../../../store/store';

export const FileUploader = (): JSX.Element => {
  const currentDir = useAppSelector((store) => store.file.currentDir);

  const fileUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    Array.prototype.forEach.call(event.target.files, (file) => {
      const parent = currentDir ? currentDir.id : null;
      store.dispatch(uploadFile({ file, parent }));
    });
  };

  return (
    <label className="file__upload__label">
      Upload file
      <input
        className="file__upload__input"
        id="file__upload__input"
        type="file"
        onChange={fileUploadHandler}
      />
    </label>
  );
};
