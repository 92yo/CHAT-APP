import axios from "axios";
import makeToast from "../../Components/Toaster";
import {
  CHATROOM_DETAILS_REQUEST,
  CHATROOM_DETAILS_SUCCESS,
  CHATROOM_DETAILS_FAIL,
} from "../../Constants/chatroomConstants";

export const getChatrooms = () => async (dispatch) => {
  try {
    dispatch({
      type: CHATROOM_DETAILS_REQUEST,
    });

    const userToken = localStorage.getItem("userInfo", "token");

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    const { data } = await axios.get("/api/chatroom/", config);

    dispatch({
      type: CHATROOM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHATROOM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? makeToast("error", error.response.data.message)
          : makeToast("error", error.message),
    });
  }
};

export const createChatroom = () => async () => {};
