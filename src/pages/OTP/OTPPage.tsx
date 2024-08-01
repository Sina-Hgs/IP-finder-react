import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const OTPPage = () => {
  const phoneNumber = useSelector(
    (state: RootState) => state.login.phoneNumber
  );

  console.log(phoneNumber);
  return <div>{phoneNumber}</div>;
};

export default OTPPage;
