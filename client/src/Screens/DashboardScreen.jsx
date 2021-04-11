import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChatrooms } from "../Store/actions/chatroomActions";
import Loader from "../Components/Loader";
import makeToast from "../Components/Toaster";

const DashboardScreen = ({ history }) => {
  const dispatch = useDispatch();

  const chatRooms = useSelector((state) => state.chatRooms);
  const { loading, error, rooms } = chatRooms;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(getChatrooms());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
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
                placeholder="ChatterBox Nepal"
              />
            </div>
          </div>
          <button>Create Chatroom</button>
          <div className="chatrooms">
            {rooms.map((chatroom) => (
              <div key={chatroom._id} className="chatroom">
                <div>{chatroom.name}</div>
                <Link to={`/chatroom/${chatroom._id}`}>
                  <div className="join">Join</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardScreen;
