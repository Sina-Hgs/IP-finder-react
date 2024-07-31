import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";

const LoginPage = () => {
  return (
    <Container
      hasLogo={true}
      hasBackButton={false}
      header="به پنل مدیریت تسک پادرو خوش آمدید"
      hero="برای ورود، لطفا شماره موبایل خود را وارد کنید"
    >
      <Input placeholder="شماره موبایل" type="number" />

      <Button variant="primary" onClick={() => {}} type="button">
        ارسال کد تایید
      </Button>

      <div className="text-sm flex gap-2 ">
        <Button type="button" variant="link" onClick={() => {}}>
          ثبت نام
        </Button>
        <p>حساب کاربری ندارید؟</p>
      </div>
    </Container>
  );
};

export default LoginPage;
