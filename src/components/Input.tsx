interface InputProps {
  placeholder: string;
  type: "text" | "number";
  required?: boolean;
}

const Input = ({ placeholder, type, required = false }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      required={required}
      className="rounded-lg border-primary border-[1px] text-right text-sm w-64 px-2 py-2 placeholder:text-darkSecondary
      focus:border-bluePrimary outline-none 
      "
    />
  );
};

export default Input;
