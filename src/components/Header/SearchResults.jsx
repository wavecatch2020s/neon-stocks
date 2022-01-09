import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  const searchResult = results.map((result) => {
    return (
      <Link to={`/stocks/${result.ticker}`}>
        <div id={result.ticker} key={result.ticker} className="search-item">
          <h4 className="result-name">{result.name}</h4>
          <h5 className="result-ticker">{result.ticker}</h5>
          <h5 className="result-price">${result.currentPrice}</h5>
        </div>
      </Link>
    );
  });

  return <div className={`search-results`}>{searchResult}</div>;
};

export default SearchResults;
