import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Container from "../../components/Container";
import LoginForm from "./components/LoginForm";
import { RootState } from "../../store/store";
import SignUp from "./components/SignUp";

const LoginPage = () => {
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );
  console.log(phoneNumber, "phone");

  return (
    <Container
      hasLogo={true}
      hasBackButton={false}
      header="به پنل مدیریت تسک پادرو خوش آمدید"
      hero="برای ورود، لطفا شماره موبایل خود را وارد کنید"
    >
      <LoginForm phoneNumber={phoneNumber} />

      <SignUp />
    </Container>
  );
};

export default LoginPage;
