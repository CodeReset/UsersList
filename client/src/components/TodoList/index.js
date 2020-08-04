import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";

import "./style.scss";

const TodoList = ({ users, removeUserf }) => {
  return (
    <>
      <div className="user_list">
        {users.length ? (
          users.map((user) => (
            <TodoItem key={user.id} user={user} removeUserf={removeUserf} />
          ))
        ) : (
          <p>Пользователей нет</p>
        )}
      </div>
    </>
  );
};

TodoList.propTypes = {
  users: PropTypes.array.isRequired,
  removeUserf: PropTypes.func.isRequired,
};
export default TodoList;
