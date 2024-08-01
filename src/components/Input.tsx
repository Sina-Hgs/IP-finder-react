import { MutableRefObject, useEffect, useState } from "react";

interface InputProps {
  placeholder: string;
  type: "text" | "number";
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
    if (!regex.test(value)) {
      console.log(value, "value");

      setError("شماره تلفن وارد شده اشتباه است");
    } else {
      console.log(value);
      setError(null);
      // dispatch
    }
  };

  return (
    <span className="flex flex-col items-end gap-1">
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        ref={inputRef}
        onChange={() => validateValue(inputRef.current!.value)}
        className="rounded-lg border-primary border-[1px] text-right text-sm w-64 px-2 py-2 placeholder:text-darkSecondary
      focus:border-bluePrimary outline-none transition-all"
      />
      <p className="text-sm text-error">{error}</p>
    </span>
  );
};

export default Input;
