import css from "./SearchBox.module.css";
import "./SearchWithClear.css";

import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBox = ({ searchText, onSearch }) => {
  const clearSearch = () => {
    onSearch("");
  };

  return (
    <form className={css.form} id="searchBox">
      <label className={css.label}>Search by name</label>
      <div className={css["input-container"]}>
        {/* <FaSearch className={css["icon"]} /> */}
        <FaSearch className="icon search-icon" />
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Typo name"
        />
        {searchText && (
          <FaTimes className="icon clear-icon" onClick={clearSearch} />
        )}
      </div>
    </form>
  );
};
export default SearchBox;
