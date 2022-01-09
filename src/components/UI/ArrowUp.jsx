import React from "react";

const ArrowUp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="arrow-up" onClick={scrollToTop}>
      <h3>top</h3>
    </div>
  );
};
export default ArrowUp;
