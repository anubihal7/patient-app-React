import { combineReducers } from "redux";
import user from "./User.reducer";
import { reducer as formReducer } from "redux-form";
// import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import persist from "./persist.reducer";

export const history = createBrowserHistory();

const appReducer = combineReducers({
  user,
  persist,
  form: formReducer,
  //   router: connectRouter(history),
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
