import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllUsers, removeUser, addUser } from "../../api/users";

import "./style.scss";
import { getToken } from "../../api/auth.storege";
import BaseHeader from "../../components/BaseHeader";
import Loader from "../../components/Loader";
import TodoList from "../../components/TodoList";
import CreateUserForm from "../../components/CreateUserForm";
import BaseFooter from "../../components/BaseFooter";

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsers);
  const loader = useSelector((state) => state.users.loader);
  useEffect(() => {
    const isLogged = getToken();
    if (!isLogged) {
      history.push("/auth");
    } else {
      dispatch(getAllUsers());
    }
  }, []);

  const removeUserf = (id) => {
    dispatch(removeUser(id));
  };

  const addUserf = (user) => {
    dispatch(addUser(user));
  };

  return (
    <>
      <BaseHeader />
      <main className="main_page">
        <h2 className="main_page_heading">Добавить пользователя</h2>
        <div>
          <CreateUserForm addUserf={addUserf} />
        </div>
        <h2 className="main_page_heading">Все пользователи</h2>
        {loader ? (
          <Loader />
        ) : (
          <TodoList users={users} removeUserf={removeUserf} />
        )}
      </main>
      <BaseFooter />
    </>
  );
};

export default Home;
