import React from "react";
import { useDispatch } from "react-redux";
import { stocksActions } from "../../redux/stocks-slice";
import { uiActions } from "../../redux/ui-slice";

const SearchResults = ({ results }) => {
  const dispatch = useDispatch();

  const chooseStockHandler = (e) => {
    if (!e.target.id) {
      console.log(e.target.parentNode.id);
      const stock = results.find(
        (stock) => stock.ticker === e.target.parentNode.id
      );
      console.log(stock);
      dispatch(stocksActions.showThisStock(stock));
    } else {
      console.log(e.target.id);
      const stock = results.find((stock) => stock.ticker === e.target.id);
      console.log(stock);
      dispatch(stocksActions.showThisStock(stock));
    }
    dispatch(uiActions.showGraph(true));
    dispatch(uiActions.showArticle(false));
  };

  console.log(results);
  const searchResult = results.map((result) => {
    return (
      <div
        onClick={chooseStockHandler}
        id={result.ticker}
        key={result.ticker}
        className="search-item"
      >
        <h4 className="result-name">{result.name}</h4>
        <h5 className="result-ticker">{result.ticker}</h5>
        <h5 className="result-price">${result.currentPrice}</h5>
      </div>
    );
  });

  return <div className={`search-results`}>{searchResult}</div>;
};

export default SearchResults;
