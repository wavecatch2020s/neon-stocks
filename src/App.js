import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainSection from "./components/MainSection";

import Header from "./components/Header/Header";

import { fetchStocks } from "./redux/fetch-actions";

function App() {
  const dispatch = useDispatch();

  console.log("App reRendered");

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <div className="App">
      <main>
        <Header />
        <MainSection />
      </main>
    </div>
  );
}

export default App;
