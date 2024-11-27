import { useState } from "react";
import { FC } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  // обробник події інпуту
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // що вводить користувач, передаємо в стейт
  };

  // обробник форми
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      // Перевірка на порожнє або null значення
      toast.error("Please enter a search query"); // Сповіщення
      return; // Вихід з функції
    }

    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={css.searchBar}>
      <form
        onSubmit={handleSubmit}
        className={css.searchForm}
        aria-label="Search"
      >
        <button type="submit" className={css.searchBtn}>
          <SearchIcon />
        </button>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={inputValue} // звязуємо стан з інпутом
          onChange={handleChange} // подія інпуту
          autoFocus
          className={css.searchInput}
        />
      </form>
    </header>
  );
};

export default SearchBar;
