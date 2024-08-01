import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";
import OTPForm from "./components/OTPForm";
import Hero from "./components/Hero";
import { useState } from "react";
import Toast from "../../components/Toast";

const OTPPage = () => {
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );

  const navigate = useNavigate();

  const [otpValue, setOtpValue] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const showToast = () => {
    setToastVisible(true);
  };

  const removeToast = () => {
    setToastVisible(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otpValue == "1111") {
      navigate("/search");
    } else {
      setToastMessage("کد وارد شده اشتباه است");
      showToast();
    }
  };

  return (
    <>
      <Container
        hasBackButton={true}
        hasLogo={true}
        header="کد تایید را وارد کنید"
        hero={
          <Hero
            phoneNumber={phoneNumber}
            handleClick={() => {
              navigate("/");
            }}
          />
        }
      >
        <OTPForm
          handleSubmit={handleSubmit}
          otpValue={otpValue}
          setOtpValue={setOtpValue}
          showToast={showToast}
          setToastMessage={setToastMessage}
        />
      </Container>
      {toastVisible && <Toast message={toastMessage} onRemove={removeToast} />}
    </>
  );
};

export default OTPPage;
