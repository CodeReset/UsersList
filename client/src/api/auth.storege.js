const getToken = () => {
  const token = localStorage.getItem("jwt");
  return token;
};

const setToken = (token) => {
  localStorage.setItem("jwt", token);
};

const removeToken = () => {
  localStorage.removeItem("jwt");
};

export { getToken, setToken, removeToken };
