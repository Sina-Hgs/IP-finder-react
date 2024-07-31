interface ButtonProps {
  variant: "primary" | "simple" | "link";
  onClick?: () => void;
  children?: string | React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({ variant, children, onClick, type }: ButtonProps) => {
  const styleVariants = {
    primary:
      "py-2 rounded-lg w-full bg-gradient-to-r text-center from-bluePrimary to-blueSecondary text-md text-lightPrimary hover:opacity-90",
    simple: "hover:opacity-80",
    link: "underline text-bluePrimary hover:opacity-90",
  };

  return (
    <button type={type} onClick={onClick} className={styleVariants[variant]}>
      {children}
    </button>
  );
};

export default Button;
