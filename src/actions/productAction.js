import Axios from "axios";
import { API_URL } from "../helper";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      let res = await Axios.get(API_URL + "/products");
      dispatch({
        type: "GET_DATA",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
