import {actionTypes} from "../_actions/User.action";

const initialState = {
    meta: {},
    user: {},
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.data,
            };
        case actionTypes.CLEAR_USER_DATA:
            return {
                ...state,
                user: {}
            }
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                meta: {...state.meta, profiles: action.data}
            }
        case actionTypes.SAVE_SELECTED_PROFILE:
            console.log(action.data)
            return {
                ...state,
                meta: {...state.meta,selectedProfile: action.data }
            }
        default:
            return state;
    }
};

export default user;
