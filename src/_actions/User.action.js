/** seting action types */
export const actionTypes = {
    LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
    CLEAR_USER_DATA: "CLEAR_USER_DATA",
    GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
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
export function saveUserProfiles(data) {
    return {
        type: actionTypes.GET_PROFILE_SUCCESS,
        data
    };
}
export function clearUserData() {
    return {
        type: actionTypes.CLEAR_USER_DATA,
        data: null
    };
}
