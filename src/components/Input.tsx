import { MutableRefObject } from "react";

interface InputProps {
  placeholder: string;
  type: "text" | "number" | "tel";
  required?: boolean;
  regex: RegExp;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

const Input = ({
  placeholder,
  type,
  required = false,
  error,
  setError,
  regex,
  inputRef,
}: InputProps) => {
  const validateValue = (value: string) => {
    !regex.test(value)
      ? setError("شماره تلفن وارد شده اشتباه است")
      : setError(null);
  };

  return (
    <span className="flex flex-col items-end gap-1">
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        ref={inputRef}
        onChange={() => validateValue(inputRef.current!.value)}
        className={`rounded-lg border-primary border-[1px] text-right text-sm w-64 px-2 py-2 placeholder:text-darkSecondary
       outline-none transition-all ${
         error ? `border-error focus:border-error` : `focus:border-bluePrimary`
       }`}
      />
      <p className="text-sm text-error">{error}</p>
    </span>
  );
};

export default Input;
