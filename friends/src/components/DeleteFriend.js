import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class DeleteFriend extends React.Component {
  constructor() {
    super();
    this.state = { id: "" };
  }
  submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`api/friends/${this.state.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  changeHandler = e => {
    this.setState({ id: e.target.value });
    console.log(this.state.id);
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>DELETE FRIENDS</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-evenly",
            alignItems: "center"
          }}
          
        >
          <TextField
            style={{ margin: "5%" }}
            onChange={this.changeHandler}
            name="id"
            id="outlined-basic"
            label="Enter id..."
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ height: "60px", width: "100px" }}
            onSubmit={this.submitHandler}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

export default DeleteFriend;
