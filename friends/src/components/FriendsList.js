import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = { friends: []}
    }
    componentDidMount() {
        this.getFriendsList();
    }
    getFriendsList = () => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res);
            this.setState({ friends: res.data})
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div style={{display: "flex", flexDirection:"column", textAlign: "center", fontSize: "1.5rem"}}>
                <h1 style={{textAlign: "center"}}>Friends List:</h1>
                {this.state.friends.map(friend => <div>{`${friend.id}. ${friend.name}, ${friend.age} years old, email: ${friend.email}`}</div>)}
            </div>
        )
    }
}

export default FriendsList;