import React from "react";
import Modal from "./Modal";

import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const dispatch = useDispatch();

  const justCloseModal = () => {
    dispatch(uiActions.showModal(false));
  };

  return (
    <Modal justCloseModal={justCloseModal}>
      <Link onClick={justCloseModal} to="/stocks" className="header-item">
        Stocks
      </Link>
      <Link onClick={justCloseModal} to="/news" className="header-item">
        News
      </Link>
    </Modal>
  );
};

export default HamburgerMenu;
