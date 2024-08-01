import OTPInput from "./OTPInput";
import Button from "../../../components/Button";
import OTPReset from "./OTPReset";

interface OTPFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  otpValue: string;
  setOtpValue: React.Dispatch<React.SetStateAction<string>>;
  showToast: () => void;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

const OTPForm = ({
  handleSubmit,
  otpValue,
  setOtpValue,
  showToast,
  setToastMessage,
}: OTPFormProps) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
      <OTPInput
        length={4}
        onDone={(otp) => {
          setOtpValue(otp);
        }}
      />

      <OTPReset showToast={showToast} setToastMessage={setToastMessage} />

      <Button
        variant="primary"
        type="submit"
        disabled={otpValue.length == 4 ? false : true}
      >
        تایید
      </Button>
    </form>
  );
};

export default OTPForm;
