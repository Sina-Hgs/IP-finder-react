import { useEffect } from "react";

interface InputProps {
  placeholder: string;
  type: "text" | "number" | "tel";
  required?: boolean;
  regex: RegExp;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  inputValue: string | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Input = ({
  placeholder,
  type,
  required = false,
  error,
  setError,
  regex,
  inputValue,
  setInputValue,
}: InputProps) => {
  const validateValue = (value: string) => {
    !regex.test(value)
      ? setError("شماره تلفن وارد شده اشتباه است")
      : setError(null);
  };

  useEffect(() => {
    if (inputValue) validateValue(inputValue);
  }, [inputValue]);

  return (
    <span className="flex flex-col  items-end gap-1">
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`rounded-lg border-primary border-[1px] text-right text-sm w-64 px-2 py-2 placeholder:text-darkSecondary
       outline-none transition-all max-[450px]:w-[100%] ${
         error ? `border-error focus:border-error` : `focus:border-bluePrimary`
       }`}
      />
      <p className="text-sm text-error">{error}</p>
    </span>
  );
};

export default Input;
