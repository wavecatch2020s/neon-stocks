import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { useSelector } from "react-redux";

const SearchContainer = () => {
  const stocksList = useSelector((state) => state.stocks.stocksList);
  const [foundResults, setFoundResults] = useState("");

  const searchFilter = (e) => {
    if (e.target.value) {
      const filteredlist = stocksList.filter(
        (stock) =>
          stock.name.toLowerCase().includes(e.target.value) ||
          stock.ticker.toLowerCase().includes(e.target.value)
      );
      console.log(e.target.value);
      console.log(filteredlist);
      setFoundResults(filteredlist);
    }
  };

  const hideSearchResults = (e) => {
    setTimeout(() => {
      setFoundResults("");
      e.target.value = "";
    }, 250);
    console.log("hide results");
  };

  // console.log(stocksList);

  return (
    <div className="search-container">
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={searchFilter}
        onBlur={hideSearchResults}
        autoComplete="off"
      />
      {foundResults && <SearchResults results={foundResults} />}
    </div>
  );
};

export default SearchContainer;
