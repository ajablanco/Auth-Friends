import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import UpdateFriend from "./components/UpdateFriend";
import DeleteFriend from "./components/DeleteFriend";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class App extends React.Component {
  constructor() {
    super();
    this.state = { credentials: {} };
  }

  render() {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="links">

                <Link to="/friends-list">Friends</Link>
                <Link to="/add-friend">Add Friend</Link>
                <Link to="/update-friends">Update Friends</Link>
                <Link to="/delete-friends">Delete Friends</Link>

            </Typography>
            <Button to="/login" color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{display: "flex", justifyContent: "center", width: "100vw", marginTop: "5%"}}>
          <Route path="/login" component={LoginForm} />
                        <Switch>
                <PrivateRoute exact path="/add-friend" component={AddFriend} />
                <PrivateRoute
                  exact
                  path="/friends-list"
                  component={FriendsList}
                />
                <PrivateRoute
                  exact
                  path="/update-friends"
                  component={UpdateFriend}
                />
                <PrivateRoute
                  exact
                  path="/delete-friends"
                  component={DeleteFriend}
                />
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
