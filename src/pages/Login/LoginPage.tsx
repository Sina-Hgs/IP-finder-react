import Container from "../../components/Container";

const LoginPage = () => {
  return (
    <Container
      hasLogo={true}
      hasBackButton={true}
      header="THIS IS THE HEADER"
      hero="THIS IS THE HERO"
    >
      iM THE CHILD
    </Container>
  );
};

export default LoginPage;
