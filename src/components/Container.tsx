import BackButton from "../assets/icons/arrow-left.svg";
import Logo from "../assets/images/logo.svg";

interface ContainerProps {
  hasBackButton: boolean;
  hasLogo: boolean;
  header: string;
  hero: string;
  children: React.ReactNode;
}

const Container = ({
  hasBackButton,
  hasLogo,
  header,
  hero,
  children,
}: ContainerProps) => {
  return (
    <div className="bg-primary px-4 py-[42px] w-fit flex flex-col justify-center gap-8 rounded-2xl border-primary border-[1px]">
      {hasBackButton && <img src={BackButton} alt="back-button" />}
      {hasLogo && <img src={Logo} alt="back-button" />}
      <h2>{header}</h2>
      <p>{hero}</p>

      {children}
    </div>
  );
};

export default Container;
