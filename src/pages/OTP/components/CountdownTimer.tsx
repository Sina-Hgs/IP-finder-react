import { useEffect, useState } from "react";
import Button from "../../../components/Button";

interface CountdownTimerProps {
  handleSendAgain: () => void;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};

const CountdownTimer = ({ handleSendAgain }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [showLink, setShowLink] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowLink(true);
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-row-reverse justify-between items-center text-sm">
      <p className="text-sm text-darkSecondary">کد را دریافت نکردید؟</p>
      {showLink ? (
        <Button type="button" variant="link" onClick={() => handleSendAgain()}>
          ارسال مجدد
        </Button>
      ) : (
        <p className="text-bluePrimary">{formatTime(timeLeft)}</p>
      )}
    </div>
  );
};

export default CountdownTimer;
