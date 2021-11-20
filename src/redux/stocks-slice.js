import { createSlice } from "@reduxjs/toolkit";

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    stocksList: [],
    displayedStock: {},
  },
  reducers: {
    loadStockPrice(state, action) {
      const loadedList = action.payload;

      const relevantData = loadedList.map((eachStockData) => {
        let closingPricesArr = [];
        let data = [];

        eachStockData.c.forEach((closingPrice) =>
          closingPricesArr.push(closingPrice)
        );
        closingPricesArr.forEach((closingPrice, index) => {
          const timestampValue = new Date(eachStockData.t[index] * 1000);
          const convertedTimestampValue = new Date(
            timestampValue
          ).toLocaleDateString("en-US", {
            hour: "2-digit",
            timeZone: "UTC",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          data.push({
            x: convertedTimestampValue,
            y: closingPrice,
            o: eachStockData.o[index],
          });
        });

        const priceChanges = () => {
          let hoursPerOneTradeDay = 15; // stock exchanges open for 15 hours
          const openingPriceSevenDaysAgo = eachStockData.o[0];
          const openingPrice15HoursAgo =
            eachStockData.o[eachStockData.o.length - hoursPerOneTradeDay - 1];
          const currentPrice = eachStockData.c[eachStockData.c.length - 1];

          const sevenDaysChangeRatio = currentPrice / openingPriceSevenDaysAgo;
          const sevenDaysChangePercent = (
            (sevenDaysChangeRatio - 1) *
            100
          ).toFixed(2);

          const oneDayChangeRatio = currentPrice / openingPrice15HoursAgo;
          const oneDayChangePercent = ((oneDayChangeRatio - 1) * 100).toFixed(
            2
          );

          return {
            oneDayChange: oneDayChangePercent,
            sevenDaysChange: sevenDaysChangePercent,
          };
        };

        const valueReducer = (value) => {
          let outputValue = "";
          if (value >= 1000) {
            outputValue = `${(value / 1000).toFixed(2)}B`;
          } else if (value < 1000) {
            outputValue = `${value.toFixed(2)}M`;
          }
          return outputValue;
        };

        return {
          ticker: eachStockData.ticker,
          currentPrice: eachStockData.c[eachStockData.c.length - 1].toFixed(2),
          country: eachStockData.country,
          industry: eachStockData.industry,
          logo: eachStockData.logo,
          marketCap: valueReducer(eachStockData.marketCap),
          name: eachStockData.name,
          shareOutstanding: valueReducer(eachStockData.shareOutstanding),
          weburl: eachStockData.weburl,
          exchange: eachStockData.exchange,
          priceChanges: priceChanges(),
          data,
        };
      });

      state.displayedStock = relevantData[0];

      state.stocksList = relevantData;
    },
    showThisStock(state, action) {
      const stockToBeShown = action.payload;

      state.displayedStock = stockToBeShown;
    },
  },
});

export const stocksActions = stocksSlice.actions;
export default stocksSlice;
