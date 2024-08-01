import { useMutation } from "@tanstack/react-query";
import { getIPData } from "../../api/services/getIPData";
import Container from "../../components/Container";
import SearchInput from "./components/SearchInput";
import Hero from "./components/Hero";

const App: React.FC = () => {
  const { data, error, isPending } = useMutation({
    mutationFn: async () => {
      const response = await getIPData("3.126.70.218");
      console.log(response, "list");
      return response;
    },
    mutationKey: ["IP-data"],
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <Container
        hasBackButton={false}
        hasLogo={false}
        header="آی پی مد نظر خود را پیدا کنید"
        hero={<Hero />}
      >
        <SearchInput />
      </Container>
    </div>
  );
};

export default App;
