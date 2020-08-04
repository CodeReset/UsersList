import React from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import * as types from "../../api/auth/types";
import "./style.scss";
import { SelectButton } from "../../UI/SelectButton";
import { SignIn } from "./helpers/SignIn";
import { SignUp } from "./helpers/SignUp";
import CopyRight from "../../components/CopyRight";

const Authentification = () => {
  const selected = useSelector((state) => state.auth.selectedTab);
  const dispatch = useDispatch();

  return (
    <div className="main_container_wrapper">
      <div className="logo_container">
        <Link to="/auth">
          <img
            className="logo_container_img"
            src={require("../../assets/images/logo.png")}
            alt="logo"
          />
        </Link>
      </div>
      <div className="controll_button">
        <SelectButton
          onClick={() => dispatch({ type: types.SELECTSIGNIN })}
          active={selected === "signIn" ? true : false}
        >
          Войти
        </SelectButton>
        <SelectButton
          onClick={() => dispatch({ type: types.SELECTSIGNUP })}
          active={selected === "signUp" ? true : false}
        >
          Регистрация
        </SelectButton>
      </div>

      <div className="tab_content">
        <div className="tab_content_context">
          {selected === "signIn" ? <SignIn /> : <SignUp />}
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Authentification;
