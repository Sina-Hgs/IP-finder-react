import { useState, useRef } from "react";

interface OTPInputProps {
  length: number;
  onDone: (otp: string) => void;
}

const OTPInput = ({ length, onDone }: OTPInputProps) => {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOTP] = useState<string[]>(new Array(length).fill(""));

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && inputRef.current[index - 1]) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);

    if (e.target.value && inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
    if (newOTP.length === length) onDone(newOTP.join(""));
  };

  const handlePasteData = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    const pasteValues = pasteData.slice(0, length).split("");
    const newOTP = [...otp];

    pasteValues.forEach((value, index) => {
      if (inputRef.current[index]) {
        newOTP[index] = value;
      }
    });

    setOTP(newOTP);

    const otpValue = otp.join("");
    if (otpValue.length === length) onDone(otpValue);
  };

  return (
    <div className="w-full flex items-center justify-center gap-x-2">
      {otp.map((value, index) => (
        <input
          required
          key={index}
          type="string"
          className="rounded-lg border-primary border-[1px] text-centertext-sm w-14 h-10 placeholder:text-darkSecondary
       outline-none transition-all focus:border-bluePrimary"
          maxLength={1}
          value={value}
          onPaste={handlePasteData}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => {
            inputRef.current[index] = ref;
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
