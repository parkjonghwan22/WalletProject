import { combineReducers } from "redux";
import { account } from "./account/reducer";

export const rootReducer = combineReducers({
  account,
});
