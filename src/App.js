import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "./components/UI/MainLayout";

import Header from "./components/Header/Header";
import HamburgerMenu from "./components/UI/HamburgerMenu";
import { fetchStocks } from "./redux/fetch-actions";

function App() {
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.ui.showModal);

  console.log("App reRendered");

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <div className="App">
      <main>
        <Header />
        {showModal ? <HamburgerMenu /> : ""}

        <MainLayout />
      </main>
    </div>
  );
}

export default App;
