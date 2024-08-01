import { KeyboardEvent } from "react";
import inputSearchIcon from "../../../assets/icons/searchIconSecondary.svg";
import ButtonSearchIcon from "../../../assets/icons/searchIcon.svg";
import Button from "../../../components/Button";
import { ipRegex } from "../ipRegex";

interface SearchInputProps {
  onSearch: (query: string) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  showToast: () => void;
}

const SearchInput = ({
  inputValue,
  setInputValue,
  onSearch,
  isLoading,
  showToast,
}: SearchInputProps) => {
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      ipRegex.test(inputValue.trim())
        ? onSearch(inputValue.trim())
        : showToast();
    }
    console.log("searching");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <Button onClick={handleSearch} variant="search" disabled={isLoading}>
        <img src={ButtonSearchIcon} alt="search-logo" className="w-4" />
      </Button>
      <div className="relative w-[60%]">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="جستجو"
          className="w-full py-2 pl-4 pr-10 focus:outline-none  focus:border-bluePrimary rounded-r-lg border-primary border-[1px] text-right text-sm px-2 placeholder:text-darkSecondary
       outline-none transition-all"
        />
        <img
          src={inputSearchIcon}
          className="absolute right-3 w-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          alt="search-logo"
        />
      </div>
    </div>
  );
};

export default SearchInput;
