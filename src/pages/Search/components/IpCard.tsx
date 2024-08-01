import { IPType } from "../../../types/ipType";

interface IpCardProps {
  IPData: IPType ;
}

const IpCard = ({ IPData }: IpCardProps) => {
  return (
    <div className="w-[90%] bg-secondary text-sm text-darkPrimary flex justify-between p-4 animate-slideIn">
      <div className="flex justify-evenly gap-3">
        <div className="flex flex-col flex-wrap items-start gap-2 max-h-[120px]">
          <span>Ip Address: {IPData.ipAddress}</span>
          <span>Country: {IPData.country}</span>
          <span>Region: {IPData.region}</span>
          <span>City: {IPData.city}</span>
          <span>Latitude: {IPData.lat}</span>
          <span>Longitude: {IPData.lng}</span>
        </div>
      </div>
      <div className="w-16 aspect-square rounded-md bg-primary"></div>
    </div>
  );
};

export default IpCard;
