import { stocksActions } from "./stocks-slice";
import finnhubCompaniesList from "../assets/finnhubCompaniesList";

export const fetchStocks = () => {
  return async (dispatch) => {
    const BASE_URL1 = "https://finnhub.io/api/v1/stock/candle?symbol=";
    const BASE_URL2 = "https://finnhub.io/api/v1/stock/profile2?symbol=";
    const TOKEN = "c4d95niad3icnt8rc9o0";

    const fetchStock = async (stockName) => {
      const todayTimestamp = (
        new Date(new Date().toUTCString()).getTime() / 1000
      ).toFixed(0);
      let days = 7;
      const fromTimestamp = (todayTimestamp - days * 24 * 60 * 60).toFixed(0);

      const response1 = await fetch(
        `${BASE_URL1}${stockName}&resolution=60&from=${fromTimestamp}&to=${todayTimestamp}&token=${TOKEN}`
      );

      const response2 = await fetch(`${BASE_URL2}${stockName}&token=${TOKEN}`);
      if (!response2) {
        throw new Error("could not fetch company profile");
      }

      if (!response1.ok) {
        throw new Error("could not fetch stocks");
      }

      const parsedData = await response1.json();
      const parsedData2 = await response2.json();
      return {
        ticker: parsedData2.ticker,
        c: parsedData.c,
        t: parsedData.t,
        o: parsedData.o,
        name: parsedData2.name,
        industry: parsedData2.finnhubIndustry,
        country: parsedData2.country,
        logo: parsedData2.logo,
        shareOutstanding: parsedData2.shareOutstanding,
        weburl: parsedData2.weburl,
        exchange: parsedData2.exchange,
        marketCap: parsedData2.marketCapitalization,
      };
    };

    try {
      let stocksPriceData = [];
      let promises = [];
      let listOfStocksToBeMapped = finnhubCompaniesList.slice(
        0,
        finnhubCompaniesList.length - 1
      );

      listOfStocksToBeMapped.map(async (stockName) => {
        promises.push(
          fetchStock(stockName).then((res) => {
            stocksPriceData.push(res);
          })
        );
      });

      Promise.all(promises).then(() => {
        dispatch(stocksActions.loadStockPrice(stocksPriceData));
        console.log("data fetched!");
        console.log(stocksPriceData);
      });
    } catch (error) {
      console.log(`error message: ${error.message}`);
    }
  };
};
