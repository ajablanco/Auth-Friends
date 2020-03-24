import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      credentials: {
        username: "",
        password: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.credentials);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ ...this.state, isLoading: true });
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        this.setState({ ...this.state, isLoading: false });
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div >
          <h1 style={{textAlign: "center"}}>LOG-IN</h1>
        <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "column", alignContent: "space-evenly", alignItems:"center"}}>
          <TextField
            name="username"
            onChange={this.handleChange}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            style={{margin: "5%"}}
          />
          <TextField
            name="password"
            onChange={this.handleChange}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{margin: "10%"}}
          />
          <Button type="submit" variant="contained" color="secondary" style={{height: "60px", width: "100px"}}>
            Login
          </Button>
        </form>
        {this.state.isLoading && <div>One second...</div>}
      </div>
    );
  }
}

export default LoginForm;
