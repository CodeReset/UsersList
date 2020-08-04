import React from "react";

import clsx from "clsx";
import { useDispatch } from "react-redux";

import { Formik } from "formik";
import { SignUpSchema } from "./SchemaSignup";
import { authSignUp } from "../../../api/auth";

export const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        passwordConfirm: "",
        phone: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, action) => {
        if (values.password === values.passwordConfirm) {
          action.resetForm();
          dispatch(authSignUp(values.login, values.password, values.phone));
        }
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
            name="phone"
            value={props.values.phone}
            onChange={props.handleChange("phone")}
            placeholder="Телефон"
          />
          <input
            className="form_control_input"
            name="password"
            value={props.values.password}
            onChange={props.handleChange("password")}
            placeholder="Пароль"
            type="password"
          />
          <input
            className="form_control_input"
            name="passwordConfirm"
            value={props.values.passwordConfirm}
            onChange={props.handleChange("passwordConfirm")}
            placeholder="Повторите пароль"
            type="password"
          />
          <button
            className={clsx([
              "form_control_button",
              props.isValid &&
                props.values.login &&
                props.values.password &&
                props.values.passwordConfirm &&
                props.values.phone &&
                "form_control_button_active",
            ])}
            type="submit"
          >
            Регистрация
          </button>
        </form>
      )}
    </Formik>
  );
};
