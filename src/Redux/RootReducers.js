import { combineReducers } from "redux";
import { operationsReducer } from "./todoapp/Reducers/operations";

const rootReducer = combineReducers({
  operationsReducer,
  // more reducers can be added here
});

export default rootReducer;
