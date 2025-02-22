import { useNavigate } from "react-router-dom";
import BackButton from "../assets/icons/arrow-left.svg";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";

interface ContainerProps {
  hasBackButton: boolean;
  hasLogo: boolean;
  header: string;
  hero: string | React.ReactNode;
  children: React.ReactNode;
}

const Container = ({
  hasBackButton,
  hasLogo,
  header,
  hero,
  children,
}: ContainerProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary px-4 py-[42px] w-fit h-fit max-w-[80%] flex flex-col justify-center items-center gap-8 rounded-2xl border-primary border-[1px] relative m-auto top-24 transition-all max-[450px]:top-12">
      <div className="text-center flex flex-col justify-center items-center gap-1">
        {hasLogo && <img src={Logo} alt="back-button" className="w-16 pb-2" />}
        {hasBackButton && (
          <Button
            type="button"
            variant="simple"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={BackButton}
              alt="back-button"
              className="absolute top-9 left-4"
            />
          </Button>
        )}
        <h2 className="text-md text-darkPrimary mb-1">{header}</h2>
        <div className="text-sm text-darkSecondary">{hero}</div>
      </div>

      {children}
    </div>
  );
};

export default Container;
