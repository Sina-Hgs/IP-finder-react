import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = () => {
  return (
    <form action="" className="flex flex-col items-center gap-6">
      <Input placeholder="شماره موبایل" type="number" required={true} />

      <Button variant="primary" onClick={() => {}} type="submit">
        ارسال کد تایید
      </Button>
    </form>
  );
};

export default LoginForm;
