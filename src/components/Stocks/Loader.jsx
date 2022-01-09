import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/ui-slice";

const Loader = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.showArrowUp(true));

  return (
    <div className={`loader show`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
