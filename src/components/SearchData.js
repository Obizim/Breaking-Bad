import React, { useState } from "react";
import { Search } from "./Datalist/DataStyles";

const SearchData = ({ getQuery }) => {
  const [term, setTerm] = useState("");

  function onSearch(q) {
    setTerm(q);
    getQuery(q);
  }
  return (
    <Search className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search for a Character</label>
          <input
            type="text"
            value={term}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </form>
    </Search>
  );
};
export default SearchData;
