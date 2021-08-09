import {actionTypes} from "../_actions/User.action";

const initialState = {
    meta: {},
    loading:false,
    attributes: {},
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                attributes: action.data,
            };
        case actionTypes.CLEAR_USER_DATA:
            return {
                ...state,
                attributes: {}
            }
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                meta: {...state.meta, profiles: action.data}
            }
        case actionTypes.SAVE_SELECTED_PROFILE:
            return {
                ...state,
                meta: {...state.meta,selectedProfile: action.data }
            }
        case actionTypes.SET_LOADING_STATE:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state;
    }
};

export default user;
