const Loading = () => {
  return (
    <div className="w-full h-full flex gap-2 items-center justify-center absolute top-42">
      <div className="font-bold text-3xl text-darkPrimary">Loading</div>
      <div className="flex justify-center items-center w-2 h-2 top-10 shadow-2xl bg-darkPrimary darkPrimary p-2 rounded-full  animate-bounce"></div>
      <div className="flex justify-center items-center w-2 h-2 top-10 shadow-2xl bg-darkPrimary darkPrimary p-2 rounded-full  animate-bounce"></div>
      <div className="flex justify-center items-center w-2 h-2 top-10 shadow-2xl bg-darkPrimary darkPrimary p-2 rounded-full  animate-bounce"></div>
    </div>
  );
};

export default Loading;
