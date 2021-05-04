import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getChatrooms, createChatroom } from "../Store/actions/chatroomActions";
import Loader from "../Components/Loader";
import makeToast from "../Components/Toaster";
import Meta from "../Components/Meta";

const DashboardScreen = ({ history }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const chatRooms = useSelector((state) => state.chatRooms);
  const { loading, error, rooms } = chatRooms;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createRoomHandler = () => {
    dispatch(createChatroom(name));
    window.location.reload();
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(getChatrooms());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <Meta title="Dashboard" />
      {loading ? (
        <Loader />
      ) : error ? (
        makeToast("error", { error })
      ) : (
        <div className="card">
          <div className="cardHeader">Chatrooms</div>
          <div className="cardBody">
            <div className="inputGroup">
              <label htmlFor="chatroomName">Chatroom Name</label>
              <input
                type="text"
                name="chatroomName"
                id="chatroomName"
                placeholder="Create Chatroom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" onClick={createRoomHandler}>
            Create Chatroom
          </button>

          <div className="chatrooms">
            {!rooms ? (
              <Redirect to="/" />
            ) : (
              rooms.map((chatroom) => (
                <div key={chatroom._id} className="chatroom">
                  <div>{chatroom.name}</div>
                  <Link to={`/chatroom/${chatroom._id}`}>
                    <div className="join">Join</div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardScreen;
