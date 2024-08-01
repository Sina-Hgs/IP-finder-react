import { useMutation } from "@tanstack/react-query";
import { getIPData } from "../../api/services/getIPData";
import Container from "../../components/Container";
import SearchInput from "./components/SearchInput";
import Hero from "./components/Hero";
import { useState } from "react";
import Toast from "../../components/Toast";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const getIP = useMutation({
    mutationFn: async (ip: string) => {
      const response = await getIPData(ip);
      console.log(response, "list");
      return response;
    },
    mutationKey: ["IP-data"],
  });

  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const showToast = () => {
    setToastVisible(true);
  };

  const removeToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="bg-blocks">
      <Container
        hasBackButton={false}
        hasLogo={false}
        header="آی پی مد نظر خود را پیدا کنید"
        hero={<Hero />}
      >
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearch={() => getIP.mutate(inputValue)}
          isLoading={getIP.isPending}
          showToast={showToast}
        />
      </Container>
      {toastVisible && (
        <Toast message={"آی‌پی وارد شده اشتباه است"} onRemove={removeToast} />
      )}
    </div>
  );
};

export default App;
