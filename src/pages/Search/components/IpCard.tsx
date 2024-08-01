import { IPType } from "../../../types/ipType";

interface IpCardProps {
  IPData: IPType;
}

const IpCard = ({ IPData }: IpCardProps) => {
  return (
    <div className="w-[90%] bg-secondary text-sm text-darkPrimary flex justify-between items-start p-4 animate-slideIn max-[700px]:flex-col gap-4">
      <div className="flex justify-evenly gap-3">
        <div className="flex flex-col flex-wrap items-start gap-2 max-h-[120px] max-[700px]:max-h-full">
          <span>Ip Address: {IPData.ipAddress}</span>
          <span>Country: {IPData.country}</span>
          <span>Region: {IPData.region}</span>
          <span>City: {IPData.city}</span>
          <span>Latitude: {IPData.lat}</span>
          <span>Longitude: {IPData.lng}</span>
        </div>
      </div>
      <div className="w-16 aspect-square rounded-md bg-primary max-[700px]:self-center"></div>
    </div>
  );
};

export default IpCard;
