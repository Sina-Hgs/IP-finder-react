import { useState } from "react";
import Toast from "../../../components/Toast";
import CountdownTimer from "./CountdownTimer";

const OTPReset = () => {
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const showToast = () => {
    setToastVisible(true);
  };

  const removeToast = () => {
    setToastVisible(false);
  };
  return (
    <>
      <CountdownTimer handleSendAgain={showToast} />
      {toastVisible && (
        <Toast message="کد برای شما مجدد ارسال شد" onRemove={removeToast} />
      )}
    </>
  );
};

export default OTPReset;
