interface InputProps {
  placeholder: string;
  type: "text" | "number";
}

const Input = ({ placeholder, type }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="rounded-lg border-primary border-[1px] text-right text-sm w-64 px-2 py-2 placeholder:text-darkSecondary
      focus:border-bluePrimary outline-none 
      "
    />
  );
};

export default Input;
