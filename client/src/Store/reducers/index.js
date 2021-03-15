import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";

const rootReducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducers;
