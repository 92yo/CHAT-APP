import {
  CHATROOM_DETAILS_REQUEST,
  CHATROOM_DETAILS_SUCCESS,
  CHATROOM_DETAILS_FAIL,
} from "../../Constants/chatroomConstants";

export const chatroomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case CHATROOM_DETAILS_REQUEST:
      return { loading: true };
    case CHATROOM_DETAILS_SUCCESS:
      return { loading: false, rooms: action.payload };
    case CHATROOM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
