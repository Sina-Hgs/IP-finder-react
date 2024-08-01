import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../../../store/slices/loginSlice";

const LoginForm = (phoneNumber: any) => {
  const [inputValue, setInputValue] = useState<string | undefined>(
    phoneNumber.phoneNumber
  );
  const [error, setError] = useState<string | null>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (inputValue) dispatch(setPhoneNumber(inputValue));
    navigate("/otp");
  };

  return (
    <form onSubmit={handleClick} className="flex flex-col items-center gap-6">
      <Input
        placeholder="شماره موبایل"
        type="tel"
        required={true}
        regex={/^(?:\+98|0098|0)?9\d{9}$/}
        inputValue={inputValue}
        setInputValue={setInputValue}
        error={error}
        setError={setError}
      />

      <Button variant="primary" type="submit" disabled={error ? true : false}>
        ارسال کد تایید
      </Button>
    </form>
  );
};

export default LoginForm;
