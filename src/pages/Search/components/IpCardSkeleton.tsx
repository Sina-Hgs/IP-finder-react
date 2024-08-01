const IpCardSkeleton: React.FC = () => {
  return (
    <div className="w-[90%] bg-secondary text-sm text-darkPrimary flex justify-between p-4 animate-pulse">
      <div className="flex justify-evenly gap-3">
        <div className="flex flex-col flex-wrap items-start gap-2 max-h-[120px]">
          <div className="w-48 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-36 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-28 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-28 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="w-16 aspect-square rounded-md bg-gray-300 animate-pulse"></div>
    </div>
  );
};

export default IpCardSkeleton;
