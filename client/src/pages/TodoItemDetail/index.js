import React, { useEffect, useState } from "react";

import axios from "axios";

import config from "../../api/config";
import "./style.scss";
import BaseHeader from "../../components/BaseHeader";

const TodoItemDetail = ({ match }) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await axios.get(
          config.apiUsers + `/users/${match.params.userId}`
        );
        setCurrentUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentUser();
  }, []);
  return (
    <>
      <BaseHeader />
      <div className="detailinfo_card">
        <img src={require("../../assets/images/user.png")} />
        <h3 className="context_heading_card">{currentUser?.name}</h3>
        <p>Пользовательское имя: {currentUser?.username}</p>
        <p>Телефон: {currentUser?.phone}</p>
        <p>Почта: {currentUser?.email}</p>
        <p>Город: {currentUser?.address?.city}</p>
        <p>Улица: {currentUser?.address?.street}</p>
        <p>Дом: {currentUser?.address?.suite}</p>
        <p>Zipcode: {currentUser?.address?.zipcode}</p>
      </div>
    </>
  );
};

export default TodoItemDetail;
