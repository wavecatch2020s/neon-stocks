import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
import SearchContainer from "./SearchContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const hamburgerClickHandler = () => {
    dispatch(uiActions.showModal(true));
  };

  return (
    <header>
      <Link to="/">
        <h1>NEON STOCKS</h1>
      </Link>
      <div className="right-wrapper">
        <SearchContainer />
        <button onClick={hamburgerClickHandler} className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          <li className="header-item">
            <Link to="/stocks">Stocks</Link>
          </li>
          <li className="header-item">
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
