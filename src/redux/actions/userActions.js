import axios from "axios";
import * as actionsTypes from '../constants/userConstants'

export const actionFetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://63860498beaa645826709462.mockapi.io/User"
      });
      dispatch({
        type: actionsTypes.UPDATE_USER_LIST,
        payload: data
      }); 
    } catch (err) {
      console.log(err)
    } 
  }
};

export const actionCreateUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://63860498beaa645826709462.mockapi.io/User",
        data: user,
      });
      dispatch(actionFetchUsers());
    } catch (err) {
      console.log(err)
    }
  }
};

export const actionDeleteUser = (userID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `https://63860498beaa645826709462.mockapi.io/User/${userID}`,
      });
      dispatch(actionFetchUsers()); 
    } catch (err) {
      console.log(err)
    } 
  }
};
