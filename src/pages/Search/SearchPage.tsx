import { useMutation } from "@tanstack/react-query";
import { getIPData } from "../../api/services/getIPData";
import Container from "../../components/Container";
import SearchInput from "./components/SearchInput";
import Hero from "./components/Hero";
import { useState } from "react";
import Toast from "../../components/Toast";
import { IPType } from "../../types/ipType";
import IpCard from "./components/IpCard";
import { ipV4Regex } from "./ipRegex";
import IpCardSkeleton from "./components/IpCardSkeleton";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [IPData, setIPData] = useState<IPType>();

  const getIP = useMutation({
    mutationFn: async (ip: string) => {
      const response = await getIPData(ip);
      if (response.location) {
        setIPData({
          ipAddress: `${inputValue} ${
            ipV4Regex.test(inputValue) ? "(IPv4)" : "(IPv6)"
          }`,
          city: response.location.city,
          country: response.location.country,
          lat: response.location.lat,
          lng: response.location.lng,
          region: response.location.region,
        });
      } else {
        showToast();
      }
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
          onSearch={() => {
            getIP.mutate(inputValue);
          }}
          isLoading={getIP.isPending}
          showToast={showToast}
        />

        {getIP.isPending && <IpCardSkeleton />}
        {getIP.isSuccess && IPData && <IpCard IPData={IPData} />}
      </Container>
      {toastVisible && (
        <Toast message={"آی‌پی وارد شده اشتباه است"} onRemove={removeToast} />
      )}
    </div>
  );
};

export default App;
