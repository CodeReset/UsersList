import React from "react";

import { Link } from "react-router-dom";

import "./style.scss";

const BaseHeader = () => {
  return (
    <header className="header">
      <div className="header_content">
        <Link to="/">
          <img src={require("../../assets/images/logo.png")} alt="" />
        </Link>
        <nav className="header_navigation">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </div>
    </header>
  );
};

export default BaseHeader;
