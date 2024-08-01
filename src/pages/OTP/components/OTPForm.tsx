import { useState } from "react";
import OTPInput from "./OTPInput";
import Button from "../../../components/Button";
import OTPReset from "./OTPReset";

const OTPForm = () => {
  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otpValue == "1111") {
      console.log("right");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <OTPInput
        length={4}
        onDone={(otp) => {
          setOtpValue(otp);
        }}
      />

      <OTPReset />

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
