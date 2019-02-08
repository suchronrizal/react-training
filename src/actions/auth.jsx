import axios from "axios";
import apiAuth from "../config/api";

export const login = () => async dispatch => {
  const res = await axios.post(apiAuth.login);
  dispatch({
    type: "LOGIN",
    payload: res.data
  });
};
