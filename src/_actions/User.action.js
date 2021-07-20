/** seting action types */
export const actionTypes = {
    LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
    CLEAR_USER_DATA: "CLEAR_USER_DATA",
    GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
    SAVE_SELECTED_PROFILE: "SAVE_SELECTED_PROFILE",
    SET_LOADING_STATE: "SET_LOADING_STATE",
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

export function saveSelectedProfile(data) {
    return {
        type: actionTypes.SAVE_SELECTED_PROFILE,
        data
    };
}

export function clearUserData() {
    return {
        type: actionTypes.CLEAR_USER_DATA,
        data: null
    };
}

export function setLoadingState(data) {
    return {
        type: actionTypes.SET_LOADING_STATE,
        data: data
    };
}
