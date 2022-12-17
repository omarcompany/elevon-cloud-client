import { useAppSelector } from '../../../store/hooks';
import { DirPathItem } from './dir-path-item';

export const DirPath = () => {
  const dirStack = useAppSelector((state) => state.file.dirStack);

  return (
    <div className="dir__path">
      <DirPathItem isLast={dirStack.length === 0} />

      {dirStack?.map((file, index) => {
        return (
          <DirPathItem
            isLast={dirStack.length - 1 === index}
            file={file}
            key={file.id}
          />
        );
      })}
    </div>
  );
};
