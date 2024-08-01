import { useRef, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/otp");
  };

  return (
    <form onSubmit={handleClick} className="flex flex-col items-center gap-6">
      <Input
        placeholder="شماره موبایل"
        type="number"
        required={true}
        regex={/^(?:\+98|0098|0)?9\d{9}$/}
        inputRef={phoneRef}
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
