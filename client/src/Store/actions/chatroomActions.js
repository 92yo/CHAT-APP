import axios from "axios";
import makeToast from "../../Components/Toaster";
import {
  CHATROOM_DETAILS_REQUEST,
  CHATROOM_DETAILS_SUCCESS,
  CHATROOM_DETAILS_FAIL,
  CHATROOM_CREATE_REQUEST,
  CHATROOM_CREATE_SUCCESS,
  CHATROOM_CREATE_FAIL,
} from "../../Constants/chatroomConstants";

export const getChatrooms = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHATROOM_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
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

export const createChatroom = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHATROOM_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/chatroom/`, { name }, config);

    dispatch({
      type: CHATROOM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHATROOM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? makeToast("error", error.response.data.message)
          : makeToast("error", error.message),
    });
  }
};
