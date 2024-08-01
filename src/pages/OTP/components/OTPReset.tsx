import CountdownTimer from "./CountdownTimer";

interface OTPResetProps {
  showToast: () => void;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

const OTPReset = ({ showToast, setToastMessage }: OTPResetProps) => {
  const handleSendAgain = () => {
    setToastMessage("کد برای شما مجدد ارسال شد");
    showToast();
  };
  return (
    <>
      <CountdownTimer handleSendAgain={handleSendAgain} />
    </>
  );
};

export default OTPReset;
