import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

import "./style.css";

const Hero = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>
        <span>Let</span>'s <span>Chat.</span>
      </h1>
      <p>What are you waiting for?</p>
      <Scroll to="cards" smooth={true}>
        <IconButton>
          <ExpandMoreIcon
            className="arrowScrollDown"
            style={{ fill: "#5aff3d", fontSize: "2.5rem" }}
          />
        </IconButton>
      </Scroll>
      <div className="hero-btns">
        {userInfo ? (
          <Link to="/dashboard">
            <Button className="btns" size="large">
              Chat Rooms
            </Button>
          </Link>
        ) : (
          <>
            <Link to="/register">
              <Button className="btns" size="large">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button className="btns" size="large">
                Sign In
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
