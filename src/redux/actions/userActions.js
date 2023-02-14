import axios from "axios";

export const actionFetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://63860498beaa645826709462.mockapi.io/User"
      });
      dispatch({
        type: 'user/UPDATE_USER_LIST',
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

export const actionSelectUser = (userID) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://63860498beaa645826709462.mockapi.io/User/${userID}`  
      })
      dispatch({
        type: 'user/SELECT_USER',
        payload: res.data
      })
    }catch{

    }
  }
};

export const actionUpdateUser = (userID, user) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "PUT",
        url: `https://63860498beaa645826709462.mockapi.io/User/${userID}`,
        data: user,
      })
      dispatch(actionFetchUsers());
    }catch{

    }
  }
};