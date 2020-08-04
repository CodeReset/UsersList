import React from "react";

import { Formik } from "formik";
import clsx from "clsx";
import PropTypes from "prop-types";

import { CreateUserSchema } from "./SchemaCreateUser";
import "./style.scss";

const CreateUserForm = ({ addUserf }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", website: "" }}
      validationSchema={CreateUserSchema}
      onSubmit={(values, action) => {
        const user = {
          id: Date.now(),
          name: values.name,
          email: values.email,
          website: values.website,
        };
        addUserf(user);
        action.resetForm();
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            className="form_control_input_creater"
            name="name"
            value={props.values.name}
            onChange={props.handleChange("name")}
            placeholder="Имя"
          />
          <input
            className="form_control_input_creater"
            name="email"
            value={props.values.email}
            onChange={props.handleChange("email")}
            placeholder="Почта"
          />
          <input
            className="form_control_input_creater"
            name="website"
            value={props.values.website}
            onChange={props.handleChange("website")}
            placeholder="Личный сайт"
          />

          <button
            className={clsx([
              "form_control_button_creater",
              props.isValid &&
                props.values.name &&
                props.values.email &&
                props.values.website &&
                "form_control_button_active",
            ])}
            type="submit"
          >
            Добавить
          </button>
        </form>
      )}
    </Formik>
  );
};

CreateUserSchema.propTypes = {
  addUserf: PropTypes.func.isRequired,
};

export default CreateUserForm;
