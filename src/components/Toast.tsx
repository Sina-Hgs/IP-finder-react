import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onRemove: () => void;
}

const Toast = ({ message, onRemove }: ToastProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleRemove = () => {
    setVisible(false);
    setTimeout(onRemove, 300);
  };

  return (
    <div
      className={`fixed top-5 left-5 text-sm bg-primary text-bluePrimary p-4 rounded-lg border-bluePrimary border-[1px] shadow-2xl transition-transform transform ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ transitionDuration: "300ms" }}
    >
      <div className="flex items-center justify-between">
        <div>{message}</div>
        <button className="pl-2 text-md" onClick={handleRemove}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Toast;
