import axios from "axios";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "./types";

const url = "http://localhost:3006/users";

export const checkUser = (cred) => {
  let isLoading = false;

  return (dispatch) => {
    let x = [];
    axios
      .get(url)
      .then((response) => {
        x.push(response.data);
        console.log(x[0]);
        for (var i = 0; i < x[0].length; i++) {
          if (
            x[0][i].username === cred.username &&
            x[0][i].password === cred.password
          ) {
            dispatch(userLoginSuccess(response.data));
          }
        }
      })
      .catch((error) => {
        dispatch(userLoginError(error));
      });
    // console.log(x.data);
  };
};

export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const userLoginError = (data) => {
  return {
    type: USER_LOGIN_ERROR,
    payload: data,
  };
};

export const userLoginLoading = (data) => {
  return {
    type: USER_LOGIN_LOADING,
    payload: data,
  };
};
