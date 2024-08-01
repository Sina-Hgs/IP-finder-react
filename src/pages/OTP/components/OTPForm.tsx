import { useState } from "react";
import OTPInput from "./OTPInput";
import Button from "../../../components/Button";

const OTPForm = () => {
  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otpValue == "1111") {
      console.log("right");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <OTPInput
        length={4}
        onDone={(otp) => {
          setOtpValue(otp);
        }}
      />
      <Button
        variant="primary"
        type="submit"
        disabled={otpValue.length == 4 ? false : true}
      >
        ارسال کد تایید
      </Button>
    </form>
  );
};

export default OTPForm;
