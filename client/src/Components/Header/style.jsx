import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    margin: "5px",
    background: "transparent",
    boxShadow: "none",
    position: "absolute",
    height: "80px",
    zIndex: 999,
  },
  colorText: {
    color: "#5AFF3D",
  },
  menuDown: {
    fill: "#5AFF3D",
    fontSize: "2.5rem",
  },
  appBarActive: {
    background: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
    opacity: "0.9",
  },
  bgImage: {
    position: "relative",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imgContainer: {
    height: "100%",
    boxSizing: "border-box",
  },
  title: {
    color: "#8F8F8F",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export { useStyles };
