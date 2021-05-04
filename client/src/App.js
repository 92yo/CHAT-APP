import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import LoginScreen from "./Screens/LoginScreen";
import RegsiterScreen from "./Screens/RegisterScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import ChatroomScreen from "./Screens/ChatroomScreen";
import LandingScreen from "./Screens/LandingScreen";
import PageNotFound from "./Components/404";

import { io } from "socket.io-client";
import makeToast from "./Components/Toaster";

const App = () => {
  const [socket, setSocket] = useState(null);
  const ENDPOINT = "https://chatify-application.herokuapp.com/";

  const setupSocket = () => {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).token
      : null;

    if (token && !socket) {
      const newSocket = io(ENDPOINT, {
        query: {
          token,
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("error", "Socket Disconnected!");
      });

      newSocket.on("connection", () => {
        makeToast("success", "Socket Connected!");
      });

      setSocket(newSocket);
    }
  };

  useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={LandingScreen} exact />
            <Route
              path="/login"
              render={() => <LoginScreen setupSocket={setupSocket} />}
            />
            <Route path="/register" component={RegsiterScreen} exact />
            <Route
              path="/dashboard"
              render={() => <DashboardScreen socket={socket} />}
              exact
            />
            <Route
              path="/chatroom/:id"
              render={() => <ChatroomScreen socket={socket} />}
              exact
            />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default App;
