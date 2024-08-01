import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";
import OTPForm from "./components/OTPForm";
import Hero from "./components/Hero";

const OTPPage = () => {
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );

  const navigate = useNavigate();

  return (
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
      <OTPForm />
    </Container>
  );
};

export default OTPPage;
