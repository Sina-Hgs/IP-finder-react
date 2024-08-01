import { useRef, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = () => {
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>("");

  return (
    <form action="" className="flex flex-col items-center gap-6">
      <Input
        placeholder="شماره موبایل"
        type="number"
        required={true}
        regex={/^(?:\+98|0098|0)?9\d{9}$/}
        inputRef={phoneRef}
        error={error}
        setError={setError}
      />

      <Button
        variant="primary"
        onClick={() => {}}
        type="submit"
        disabled={error ? true : false}
      >
        ارسال کد تایید
      </Button>
    </form>
  );
};

export default LoginForm;
