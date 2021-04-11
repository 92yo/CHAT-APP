import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";
import { chatroomReducer } from "./chatroomReducer";

const rootReducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  chatRooms: chatroomReducer,
});

export default rootReducers;
