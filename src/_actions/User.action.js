/** seting action types */
export const actionTypes = {
    LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
    CLEAR_USER_DATA: "CLEAR_USER_DATA",
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

export function clearUserData() {
    return {
        type: actionTypes.CLEAR_USER_DATA,
        data: null
    };
}
