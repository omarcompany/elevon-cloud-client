interface IAuthFormInputProps {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
  className?: string;
}

export const AuthFormInput = ({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  inputRef,
  className,
}: IAuthFormInputProps) => {
  return (
    <input
      className={className ?? 'auth__form__input'}
      type={type}
      id={id}
      name={`auth__form__${name}`}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChange={onChange}
    />
  );
};
