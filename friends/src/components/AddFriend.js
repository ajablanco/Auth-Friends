import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {friend: {id: Date.now(), name:"", age:"", email:""}}
    }
    submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend, {
            headers:
            {
                authorization: window.localStorage.getItem('token')
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    changeHandler = e => {
        this.setState( {friend: {...this.state.friend, [e.target.name]: e.target.value}})
        console.log(this.state)
    }
    render(){
       return(
        <div>
            <h1 style={{textAlign: "center"}}>ADD A FRIEND</h1>
            <form style={{display: "flex", flexDirection: "column", alignContent: "space-evenly", alignItems:"center"}} onSubmit={this.submitHandler} noValidate autoComplete="off" >
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

export default AddFriend;