import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class UpdateFriend extends React.Component {
    constructor() {
        super();
        this.state = { id: "", name: "", age: "", email: ""}
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axiosWithAuth().put(`/api/friends/${this.state.id}`, this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    changeHandler = e => {
        this.setState({ ...this.state, [e.target.name]: e.target.value})
    }
    render() {
        return(
            <div>
            <h1 style={{textAlign: "center"}}>UPDATE FRIENDS</h1>
            <form style={{display: "flex", flexDirection: "column", alignContent: "space-evenly", alignItems:"center"}} onSubmit={this.submitHandler} noValidate autoComplete="off" >
            <TextField style={{margin: "5%"}} onChange={this.changeHandler} name="id" id="outlined-basic" label="Enter id..." variant="outlined" />
                <TextField style={{margin: "5%"}} onChange={this.changeHandler} name="name" id="outlined-basic" label="Enter Name..." variant="outlined" />
                <TextField style={{margin: "5%"}} onChange={this.changeHandler} name="age" id="outlined-basic" label="Enter Age..." variant="outlined" />
                <TextField style={{margin: "5%"}} onChange={this.changeHandler} name="email" id="outlined-basic" label="Enter Email..." variant="outlined" />
                <Button type="submit" variant="contained" color="secondary" style={{height: "60px", width: "100px"}}>
            SUBMIT
          </Button>
            </form>
            </div>
        )
    }
}

export default UpdateFriend;