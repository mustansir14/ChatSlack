export const SET_DATA = "SET_DATA";
export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";

export const setData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const setIsLoggedIn = (isLoggedIn) => (dispatch) => {
  dispatch({
    type: SET_IS_LOGGED_IN,
    payload: isLoggedIn,
  });
};
