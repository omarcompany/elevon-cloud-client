import { useAppSelector } from '../../../store/hooks';
import { DirPathItem } from './dir-path-item';

export const DirPath = () => {
  const dirStack = useAppSelector((state) => state.file.dirStack);

  return (
    <div className="dir__path">
      <DirPathItem />

      {dirStack?.map((file) => {
        return <DirPathItem file={file} key={file.id} />;
      })}
    </div>
  );
};
