import React from "react";

import "./style.scss";
import CopyRight from "../CopyRight";

const BaseFooter = () => {
  return (
    <footer className="footer">
      <img
        className="footer_logo"
        src={require("../../assets/images/logo.png")}
        alt=""
      />
      <CopyRight />
    </footer>
  );
};
export default BaseFooter;
