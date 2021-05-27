
/** seting action types */
export const actionTypes = {
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
};

/*
 * Action creators for login
 */

export function loginUserSuccess(data) {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    data
  };
}
