import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./style.scss";

const TodoItem = ({ user, removeUserf }) => {
  return (
    <div className="user_itemcontainer">
      <div className="user_itemcontainer_content">
        <div className="content_header">
          <img src={require("../../assets/images/user.png")} alt="" />
          <p>{user.name}</p>
          <button onClick={() => removeUserf(user.id)} className="button_close">
            &#9587;
          </button>
        </div>

        <p className="content_email">Email: {user.email}</p>
        <p className="content_email">
          Website:
          <a href="https://jsonplaceholder.typicode.com/users">
            {user.website}
          </a>
        </p>

        <Link to={`/detailinfo/${user.id}`} className="content_submitlink">
          Открыть
        </Link>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  user: PropTypes.object.isRequired,
  removeUserf: PropTypes.func.isRequired,
};
export default TodoItem;
