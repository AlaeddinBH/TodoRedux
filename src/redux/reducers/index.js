import { combineReducers } from "redux";
import reducer from "./reducer";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  reducer,
  visibilityFilter
});