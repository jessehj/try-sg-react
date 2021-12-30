import { combineReducers } from "redux";
import auth from "../modules/auth";

const reducer = combineReducers({
  auth,
});

export default reducer;
