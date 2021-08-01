import {actionTypes} from "../_actions/persist.action";

const initialState = {
    JwtToken: {},
    searchKey: "",
    breadCrumb: []
};

const persist = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_USER_TOKEN:
            return {
                ...state,
                JwtToken: action.data,
            };
        case actionTypes.LOGOUT_USERS_PERSIST:
            return {
                ...state,
                JwtToken: {},
            };
        case actionTypes.SAVE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.data
            };
        case actionTypes.UPDATE_CRUMB:
            return {
                ...state,
                breadCrumb: action.data
            };

        default:
            return state;
    }
};

export default persist;
