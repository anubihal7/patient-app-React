/** seting action types */
export const actionTypes = {
  SAVE_USER_TOKEN: "SAVE_USER_TOKEN",
  LOGOUT_USERS_PERSIST: "LOGOUT_USERS_PERSIST",
};

/*
 * Action creators for login
 */

export function saveUserToken(data) {
  return {
    type: actionTypes.SAVE_USER_TOKEN,
    data,
  };
}

export function logoutUser() {
  return {
    type: actionTypes.LOGOUT_USERS_PERSIST,
    data: null,
  };
}
