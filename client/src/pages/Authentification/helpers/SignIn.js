import React from "react";

import clsx from "clsx";
import { useDispatch } from "react-redux";

import { Formik } from "formik";

import { authSignIn } from "../../../api/auth";
import { SignInSchema } from "./SchemaSignin";

export const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values, action) => {
        dispatch(authSignIn(values.login, values.password));
        // action.resetForm();
      }}
    >
      {(props) => (
        <form className="form_control" onSubmit={props.handleSubmit}>
          <input
            className="form_control_input"
            name="login"
            value={props.values.login}
            onChange={props.handleChange("login")}
            placeholder="Логин"
          />
          <input
            className="form_control_input"
            name="password"
            value={props.values.password}
            onChange={props.handleChange("password")}
            placeholder="Пароль"
            type="password"
          />
          <button
            className={clsx([
              "form_control_button",
              props.isValid &&
                props.values.login &&
                props.values.password &&
                "form_control_button_active",
            ])}
            type="submit"
          >
            Войти
          </button>
        </form>
      )}
    </Formik>
  );
};
