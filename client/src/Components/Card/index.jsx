import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    opacity: "0.8",
    boxShadow:
      "rgba(114, 175, 211, 0.4) 5px 5px, rgba(114, 175, 211, 0.3) 10px 10px, rgba(114, 175, 211, 0.2) 15px 15px, rgba(114, 175, 211, 0.1) 20px 20px, rgba(114, 175, 211, 0.05) 25px 25px;",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  media: {
    height: "auto",
    paddingTop: "50%",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cardContainer}>
        <Card id="cards" className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/images/CardOne.png"
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Coose your chat room
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                esse.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card id="cards" className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/images/CardTwo.png"
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Chat Room
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
                suscipit?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
