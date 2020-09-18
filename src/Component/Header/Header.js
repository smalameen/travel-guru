import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../Header/Header.css";

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 0.09,
  },
}));



const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="App-bar">
        <AppBar>
          <Toolbar>
            <Button href="/travelArea" variant="h1" color="primary">
              Go to Home
            </Button>
            <Typography variant="h6" className={classes.title}>
              Destination
            </Typography>

            <Typography variant="h6" className={classes.title}>
              Blog
            </Typography>
            <Typography href = "/login" variant="h6" className={classes.title}>
              Contact
            </Typography>
            <Button variant="h1" color="secondary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>

  </div>
  );
};

export default Header;
