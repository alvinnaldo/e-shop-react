export const loginAction = (data) => {
  console.log("Data dari component ==>", data);
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const logoutAction = () => {
  console.log("Data global state user dihapus");
  return {
    type: "LOGOUT",
  };
};
