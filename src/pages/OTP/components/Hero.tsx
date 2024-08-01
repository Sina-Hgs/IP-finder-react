import Button from "../../../components/Button";

interface HeroProps {
  phoneNumber: string;
  handleClick: () => void;
}

const Hero = ({ phoneNumber, handleClick }: HeroProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p>کد تایید برای شماره {phoneNumber} پیامک شد</p>
      <Button variant="link" type="button" onClick={handleClick}>
        تغییر شماره همراه
      </Button>
    </div>
  );
};

export default Hero;
