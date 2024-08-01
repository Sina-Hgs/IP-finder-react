import { useMutation } from "@tanstack/react-query";
import { getIPData } from "../../api/services/getIPData";
import Container from "../../components/Container";
import SearchInput from "./components/SearchInput";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Toast from "../../components/Toast";
import { IPType } from "../../types/ipType";
import IpCard from "./components/IpCard";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [IPData, setIPData] = useState<IPType | undefined>(undefined);

  const getIP = useMutation({
    mutationFn: async (ip: string) => {
      const response = await getIPData(ip);
      console.log(response.location, "list");
      setIPData({
        ipAddress: inputValue,
        city: response.location.city,
        country: response.location.country,
        lat: response.location.lat,
        lng: response.location.lng,
        region: response.location.region,
      });
      return response.location as IPType;
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

  useEffect(() => {
    console.log(IPData);
  }, [getIP.data]);

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
        {IPData && <IpCard IPData={IPData} />}
      </Container>
      {toastVisible && (
        <Toast message={"آی‌پی وارد شده اشتباه است"} onRemove={removeToast} />
      )}
    </div>
  );
};

export default App;
