import { useMutation } from "@tanstack/react-query";
import { getIPData } from "../../api/services/getIPData";

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
    <div className="App">
      <h1>Location Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
