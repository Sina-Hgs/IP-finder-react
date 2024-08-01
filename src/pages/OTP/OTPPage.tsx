import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import OTPForm from "./components/OTPForm";

const OTPPage = () => {
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (phoneNumber.length == 0) navigate("/");
  }, [phoneNumber]);
  return (
    <Container
      hasBackButton={true}
      hasLogo={true}
      header="کد تایید را وارد کنید"
      hero={
        <div className="flex flex-col items-center gap-1">
          <p>کد تایید برای شماره {phoneNumber} پیامک شد</p>
          <Button
            variant="link"
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            تغییر شماره همراه
          </Button>
        </div>
      }
    >
      <OTPForm />
    </Container>
  );
};

export default OTPPage;
