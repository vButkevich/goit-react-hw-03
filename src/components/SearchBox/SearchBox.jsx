import css from "./SearchBox.module.css";

import { FaSearch } from "react-icons/fa";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <form className={css.form}>
      <label className={css.label}>Search by name</label>
      <div className={css["input-container"]}>
        <FaSearch className={css["icon"]} />
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          placeholder="Typo name"
        />
      </div>
    </form>
  );
};
export default SearchBox;
