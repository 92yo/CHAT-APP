import React from "react";
import { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Fab,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  chatSection: {
    marginTop: "50px",
    width: "100%",
    height: "80vh",
    background: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  ownMessage: {
    color: "#37ecba",
  },
  otherMessage: {
    color: "#453a94",
  },
});

const ChatroomScreenTwo = ({ match, socket }) => {
  const classes = useStyles();
  const chatroomId = match.params.id;

  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const messageRef = useRef();

  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: messageRef.current.value,
      });

      messageRef.current.value = "";
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userInfo")).token;

    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={9} style={{ flexBasis: "95%", maxWidth: "95%" }}>
          <List className={classes.messageArea}>
            {messages.map((message, i) => (
              <ListItem key={i}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      disableTypography
                      align={userId === message.userId ? "left" : "right"}
                      primary={
                        <Typography
                          className={
                            userId === message.userId
                              ? classes.ownMessage
                              : classes.otherMessage
                          }
                        >
                          {message.message}
                        </Typography>
                      }
                    >
                      {console.log()}
                    </ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align={userId === message.userId ? "left" : "right"}
                      secondary={
                        message.name.charAt(0).toUpperCase() +
                        message.name.substring(1, message.name.length)
                      }
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>

          <Divider />

          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                name="message"
                inputRef={messageRef}
                fullWidth
              />
            </Grid>

            <Grid xs={1} align="right">
              <Fab type="submit" size="medium" aria-label="add">
                <SendIcon onClick={sendMessage} />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(ChatroomScreenTwo);
